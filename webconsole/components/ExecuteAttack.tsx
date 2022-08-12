/** @format */

import React from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import toast, { Toaster } from "react-hot-toast";
import { getAPIUrlState, getAttackUrlState } from "../models/endPointsSlice";
import { getPayloads } from "../models/payloadsSlice";
import { useSelector } from "react-redux";
import { PayloadsT } from "../models/PayloadsT";

const ExecuteAttack = () => {
  const apiUrl = useSelector(getAPIUrlState);
  const attackUrl = useSelector(getAttackUrlState);
  const payloads = useSelector(getPayloads);
  return (
    <div style={{ margin: "1em" }}>
      <Toaster />
      <Button
        variant="outlined"
        size="large"
        endIcon={<SendIcon />}
        onClick={() => {
          if (!validation(apiUrl, attackUrl, payloads)) {
            executeAttack(apiUrl, attackUrl, payloads);
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

const executeAttack = (
  apiUrl: string,
  attackUrl: string,
  payloads: PayloadsT
) => {
  toast.success("Attack started");
};

const validation = (apiUrl: string, attackUrl: string, payloads: PayloadsT) => {
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
  }
  return isError;
};

export default ExecuteAttack;
