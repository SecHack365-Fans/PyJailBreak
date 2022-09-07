/** @format */

import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import toast, { Toaster } from "react-hot-toast";
import {
  getAPIUrlState,
  getProtocol,
  getVulnDomain,
  getVulnPort,
} from "../models/endPointsSlice";
import {
  getPayloads,
  getSelections,
  setPayloads,
} from "../models/payloadsSlice";
import { getIsEmulate } from "../models/emulateSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  severities,
  PayloadsT,
  SeverityT,
  APIResponseS,
  APIResponseT,
} from "../models/PayloadsT";
import { GridSelectionModel, GridRowId } from "@mui/x-data-grid/models";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";

const ExecuteAttack = () => {
  const apiUrl = useSelector(getAPIUrlState);
  const isEmulate = useSelector(getIsEmulate);
  const protocol = useSelector(getProtocol);
  const vulnDomain = useSelector(getVulnDomain);
  const vulnPort = useSelector(getVulnPort);
  const payloads = useSelector(getPayloads);
  const selections = useSelector(getSelections); // idがnumber型なのでこれはnumber[]
  const dispatch: Dispatch<AnyAction> = useDispatch();
  return (
    <div style={{ margin: "1em" }}>
      <Toaster />
      <Button
        variant="outlined"
        size="large"
        endIcon={<SendIcon />}
        onClick={() => {
          if (
            // TODO: propsをpbjectにまとめる
            !validation(
              apiUrl,
              protocol,
              vulnDomain,
              vulnPort,
              payloads,
              selections
            )
          ) {
            executeAttack(
              apiUrl,
              isEmulate,
              protocol,
              vulnDomain,
              vulnPort,
              payloads,
              selections,
              dispatch
            );
          }
        }}
        sx={{
          width: "15em",
          height: "3em",
          boxShadow: "0 10px 25px 0 rgba(0, 0, 0, .5)",
          color: "#eee",
          backgroundColor: "#282b30",
          borderColor: "#eee",
          "&:hover": {
            backgroundColor: "#353a40",
            borderColor: "#ddd",
          },
        }}
      >
        Execute!
      </Button>
    </div>
  );
};

type ChangePointT = {
  id: GridRowId;
  severity: SeverityT;
};

const executeAttack = async (
  apiUrl: string,
  isEmulate: boolean,
  protocol: string,
  vulnDomain: string,
  vulnPort: number,
  payloads: PayloadsT,
  selections: GridSelectionModel,
  dispatch: Dispatch<AnyAction>
) => {
  toast.success("Scan Started!");
  let isPushError = false;
  for (const selectedId of selections) {
    const payload = payloads.find((payload) => payload.id === selectedId);
    if (typeof payload === "undefined") {
      continue;
    }
    const changePoint: ChangePointT = { id: selectedId, severity: "executing" };
    payloads = changePayloadStateExec(payloads, changePoint);
    dispatch(setPayloads(payloads));
    try {
      const getSeverty = async () => {
        const res = await fetch(`${apiUrl}/scan`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            payload: payload.payload,
            unexpected: payload.unexpected,
            severity: payload.severity,
            endpoint: {
              protocol: protocol,
              domain: vulnDomain,
              port: vulnPort,
            },
            payload_option: payload.payload_option,
            unexpected_option: payload.unexpected_option,
          }),
        });
        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }
        const json: APIResponseT = await res.json();
        console.log("API response: ", json);
        const parseResult = APIResponseS.safeParse(json);
        if (parseResult.success === false) {
          console.error(parseResult.error);
          throw new Error(`Internal Server Error`);
        }
        if (!json.success) {
          throw new Error(json.error);
        }
        return json.severity;
      };
      const severity: SeverityT = !isEmulate
        ? await getSeverty()
        : await getRandomSeverity();
      const changePoint: ChangePointT = {
        id: selectedId,
        severity: severity,
      };
      payloads = changePayloadStateExec(payloads, changePoint);
      dispatch(setPayloads(payloads));
    } catch (err) {
      if (!isPushError) {
        toast.error(err.message);
        isPushError = true;
      }
      console.error(err);
      const changePoint: ChangePointT = {
        id: selectedId,
        severity: "unknown",
      };
      payloads = changePayloadStateExec(payloads, changePoint);
      dispatch(setPayloads(payloads));
    }
  }
};

const validation = (
  apiUrl: string,
  protocol: string,
  vulnDomain: string,
  vulnPort: number | undefined,
  payloads: PayloadsT,
  selections: GridSelectionModel
) => {
  let isError = false;
  if (apiUrl === "") {
    toast.error("Please enter an Endpoint for PyJailBreak Server");
    isError = true;
  }
  if (protocol === "") {
    toast.error("Please select a Protocol for Target Server");
    isError = true;
  }
  if (vulnDomain === "") {
    toast.error("Please enter a Domain for Target Server");
    isError = true;
  }
  if (typeof vulnPort === "undefined") {
    toast.error("Please enter a Port for Target Server");
    isError = true;
  }
  if (payloads.length === 0) {
    toast.error("Please add at least one payload");
    isError = true;
  } else if (selections.length === 0) {
    toast.error("Please select at least one payload");
    isError = true;
  }
  return isError;
};

const changePayloadStateExec = (
  payloads: PayloadsT,
  changePoint: { id: GridRowId; severity: SeverityT }
) => {
  const { id, severity } = changePoint;
  const newPayloads: PayloadsT = payloads.map((payload) => {
    if (payload.id === id) {
      return { ...payload, result: severity };
    } else {
      return payload;
    }
  });
  return newPayloads;
};

const getRandomSeverity = async () => {
  const timeout = Math.floor(Math.random() * (1000 - 500) + 500);
  await new Promise((resolve) => setTimeout(resolve, timeout));
  const severity: SeverityT = severities.slice(0, 3)[
    Math.floor(Math.random() * 3)
  ];
  return severity;
};

export default ExecuteAttack;
