/** @format */

import React from "react";
import { onChangeInputFile } from "./importFile";
import { downloadFile } from "./downloadFile";
import { Button, Box, Tooltip } from "@mui/material";
import { FileUpload, FileDownload } from "@mui/icons-material";
import { setPayloads, getPayloads } from "../models/payloadsSlice";
import { useDispatch, useSelector } from "react-redux";
import { PayloadsT } from "../models/PayloadsT";

export const DataGridFooters = () => {
  const dispatch = useDispatch();
  const payloads: PayloadsT = useSelector(getPayloads);
  const setPayloadsCallback = (newPayloads: PayloadsT) => {
    dispatch(setPayloads(newPayloads));
  };
  return (
    <Box sx={{ p: 1, display: "flex" }}>
      <Tooltip title="Upload Payloads">
        <Button component="label" sx={{ color: "#eee" }}>
          <FileUpload />
          <input
            type="file"
            hidden
            accept=".json"
            onChange={(e) => {
              onChangeInputFile(e, setPayloadsCallback);
              e.target.value = "";
            }}
          />
        </Button>
      </Tooltip>
      <Tooltip title="Download Payloads">
        <Button
          component="label"
          sx={{ color: "#eee" }}
          onClick={() => {
            downloadFile(
              payloads.map((payload) => {
                return {
                  payload: payload.payload,
                  unexpected: payload.unexpected,
                  severity: payload.severity,
                  payload_option: payload.payload_option,
                  unexpected_option: payload.unexpected_option,
                };
              }),
              "payloads.json"
            );
          }}
        >
          <FileDownload />
        </Button>
      </Tooltip>
    </Box>
  );
};
