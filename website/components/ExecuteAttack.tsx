/** @format */

import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import toast, { Toaster } from "react-hot-toast";
import { getAPIUrlState, getProtocol, getVulnDomain, getVulnPort } from "../models/endPointsSlice";
import {
  getPayloads,
  getSelections,
  setPayloads,
} from "../models/payloadsSlice";
import { useSelector, useDispatch } from "react-redux";
import { PayloadsT, SeverityT } from "../models/PayloadsT";
import { GridSelectionModel, GridRowId } from "@mui/x-data-grid/models";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";

const ExecuteAttack = () => {
  const apiUrl = useSelector(getAPIUrlState);
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
          if (!validation(apiUrl, protocol, vulnDomain, vulnPort, payloads, selections)) {
            executeAttack(apiUrl, protocol, vulnDomain, vulnPort, payloads, selections, dispatch);
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
}

const executeAttack = async (
  apiUrl: string,
  protocol: string,
  vulnDomain: string,
  vulnPort: number,
  payloads: PayloadsT,
  selections: GridSelectionModel,
  dispatch: Dispatch<AnyAction>
) => {
  toast.success("Scan Started!");
  let isError = false;
  for (const selectedId of selections) {
    const payload = payloads.find((payload) => payload.id === selectedId);
    if (isError || typeof payload === "undefined") {
      continue;
    }
    const changePoint:ChangePointT = { id: selectedId, severity: "executing" };
    payloads = changePayloadStateExec(payloads, changePoint);
    dispatch(setPayloads(payloads));
    await fetch(`${apiUrl}/scan`, {
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
      }),
    })
      .then((res) => res.json())
      .then((json) => { // TODO: validation with zod
        console.log("API response: ", json)
        const changePoint:ChangePointT = { id: selectedId, severity: json.severity };
        payloads = changePayloadStateExec(payloads, changePoint);
        dispatch(setPayloads(payloads));
      }).catch((err) => {
        isError = true;
        console.error(err);
        toast.error("Scan Failed! Please check your input parameters.");
        return
      });
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

export default ExecuteAttack;
