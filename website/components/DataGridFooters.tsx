/** @format */

import React from "react";
import { onChangeInputFile } from "./importFile";
import { downloadFile } from "./downloadFile";
import { Button, Box, Tooltip } from "@mui/material";
import { FileUpload, FileDownload } from "@mui/icons-material";
import { setPayloads } from "../models/payloadsSlice";
import { PayloadsT } from "../models/PayloadsT";

export const DataGridFooters = (payloads: PayloadsT) => {
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
              onChangeInputFile(e, setPayloads);
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
