/** @format */

import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import toast, { Toaster } from "react-hot-toast";
import { getAPIUrlState, getAttackUrlState } from "../models/endPointsSlice";
import {
  getPayloads,
  getSelections,
  setPayloads,
} from "../models/payloadsSlice";
import { useSelector, useDispatch } from "react-redux";
import { PayloadsT, SeverityT } from "../models/PayloadsT";
import { GridSelectionModel } from "@mui/x-data-grid/models";

const ExecuteAttack = () => {
  const apiUrl = useSelector(getAPIUrlState);
  const attackUrl = useSelector(getAttackUrlState);
  const payloads = useSelector(getPayloads);
  const selections = useSelector(getSelections); // idがnumber型なのでこれはnumber[]
  const dispatch = useDispatch();
  const changePayloadStatePrepareCall = async () => {
    await dispatch(
      setPayloads(changePayloadStatePrepare(payloads, selections))
    );
  };
  const changePayloadStateExecCall = async (id: number) => {
    await dispatch(
      setPayloads(
        changePayloadStateExec(payloads, { id: id, severity: "executing" })
      )
    );
  };
  return (
    <div style={{ margin: "1em" }}>
      <Toaster />
      <Button
        variant="outlined"
        size="large"
        endIcon={<SendIcon />}
        onClick={async () => {
          if (!validation(apiUrl, attackUrl, payloads, selections)) {
            // executeAttack(
            //   apiUrl,
            //   attackUrl,
            //   payloads,
            //   selections,
            //   changePayloadStatePrepareCall,
            //   changePayloadStateExecCall
            // );
            let nextPayloads = changePayloadStatePrepare(payloads, selections);
            await dispatch(setPayloads(nextPayloads));
            setInterval(() => {
              const randRange = (min, max) =>
                Math.floor(Math.random() * (max - min + 1) + min);
              const id = randRange(0, nextPayloads.length - 1);
              const severity: SeverityT = (() => {
                switch (nextPayloads[id].severity) {
                  case "executing":
                    return randRange(0, 1) ? "safe" : "critical";
                  case undefined:
                    return "executing";
                  default:
                    return nextPayloads[id].severity;
                }
              })();
              nextPayloads = changePayloadStateExec(nextPayloads, {
                id: id,
                severity: severity,
              });
              dispatch(
                setPayloads(
                  changePayloadStateExec(nextPayloads, {
                    id: id,
                    severity: severity,
                  })
                )
              );
            }, 2000);
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

const executeAttack = async (
  apiUrl: string,
  attackUrl: string,
  payloads: PayloadsT,
  selections: GridSelectionModel,
  changePayloadStatePrepareCall: () => Promise<void>,
  changePayloadStateExecCall: (number) => Promise<void>
) => {
  toast.success("Attack started");
  await changePayloadStatePrepareCall();
  changePayloadStateExecCall(1);
};

const validation = (
  apiUrl: string,
  attackUrl: string,
  payloads: PayloadsT,
  selections: GridSelectionModel
) => {
  let isError = false;
  if (apiUrl === "") {
    toast.error("Please enter an Endpoint for PyJailBreak Server");
    isError = true;
  }
  if (attackUrl === "") {
    toast.error("Please enter an Endpoint for Target Server");
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

const changePayloadStatePrepare = (
  payloads: PayloadsT,
  selections: GridSelectionModel
) => {
  const newPayloads: PayloadsT = payloads.map((payload) => {
    if (payload.id in selections) {
      return {
        id: payload.id,
        payload: payload.payload,
        expected: payload.expected,
        severity: undefined,
      };
    } else {
      return payload;
    }
  });
  return newPayloads;
};

const changePayloadStateExec = (
  payloads: PayloadsT,
  changePoint: { id: number; severity: SeverityT }
) => {
  const { id, severity } = changePoint;
  const newPayloads: PayloadsT = payloads.map((payload) => {
    if (payload.id === id) {
      return { ...payload, severity };
    } else {
      return payload;
    }
  });
  return newPayloads;
};

export default ExecuteAttack;
