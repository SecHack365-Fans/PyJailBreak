/** @format */

import React from "react";
import { onChangeInputFile } from "./onChangeInputFile";
import { downloadFile } from "./downloadFile";
import { Button, Box, Tooltip } from "@mui/material";
import { FileUpload, FileDownload } from "@mui/icons-material";
import { ShakeLittle } from "reshake";
import { getJsonErrMsg, setJsonErrMsg } from "../models/errorSlice";
import { setPayloads } from "../models/payloadsSlice";
import { useDispatch, useSelector } from "react-redux";
import { PayloadsT } from "../models/PayloadsT";
import styles from "./RequestForm.module.css";

export const DataGridFooters = (payloads: PayloadsT) => {
  const [errShakeActive, setErrShakeActive] = React.useState(true);
  const jsonErrMsg = useSelector(getJsonErrMsg);
  const dispatch = useDispatch();
  const setFileReadError = (err: string | null) => {
    dispatch(setJsonErrMsg(err));
    setTimeout(() => {
      setErrShakeActive(false);
    }, 500);
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
              onChangeInputFile(e, setPayloads, setFileReadError);
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
                  expected: payload.unexpected,
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
      {jsonErrMsg && (
        <ShakeLittle
          active={errShakeActive}
          fixed={true}
          className={styles.errMsg}
        >
          Error: {jsonErrMsg}
        </ShakeLittle>
      )}
    </Box>
  );
};
