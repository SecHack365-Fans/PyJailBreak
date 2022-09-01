/** @format */

import React from "react";
import { onChangeInputFile } from "./onChangeInputFile";
import ExecuteAttack from "./ExecuteAttack";
import { TextField, Button, Box, Tooltip } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { makeStatusChip, resultsComparator } from "./statusChip";
import { downloadFile } from "./downloadFile";
import styles from "./RequestForm.module.css";
import { FileUpload, FileDownload } from "@mui/icons-material";
import { ShakeLittle } from "reshake";
import { useDispatch, useSelector } from "react-redux";
import {
  getAPIUrlState,
  getAttackUrlState,
  setAPIUrl,
  setAttackUrl,
} from "../models/endPointsSlice";
import { getJsonErrMsg, setJsonErrMsg } from "../models/errorSlice";
import {
  getPayloads,
  setPayloads,
  setSelections,
} from "../models/payloadsSlice";
import { PayloadsT } from "../models/PayloadsT";

const RequestForm = () => {
  const dispatch = useDispatch();
  const apiUrl = useSelector(getAPIUrlState);
  const attackUrl = useSelector(getAttackUrlState);
  const payloads = useSelector(getPayloads);
  const textFieldStyle = {
    width: "40%",
    maxWidth: "600px",
    m: "1em 2px 1em 2px",
    "& label": {
      color: "#eee",
    },
    "& .MuiInputBase-input": {
      color: "#ccc",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#ccc",
      },
      "&:hover fieldset": {
        borderColor: "#ddd",
      },
    },
  };
  return (
    <div className={styles.body}>
      <TextField
        required
        label="Endpoint for PyJailBreak Server"
        variant="outlined"
        placeholder="https://localhost:8080"
        value={apiUrl}
        onChange={(e) => {
          dispatch(setAPIUrl(e.target.value));
        }}
        sx={textFieldStyle}
      />
      <TextField
        required
        label="Endpoint for Target Server"
        variant="outlined"
        placeholder="this.is.vulnable.server:8000"
        value={attackUrl}
        onChange={(e) => {
          dispatch(setAttackUrl(e.target.value));
        }}
        sx={textFieldStyle}
      />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={payloads}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(selections) =>
            dispatch(setSelections(selections))
          }
          components={{
            Footer: () => DataGridFooters(payloads),
          }}
          sx={{
            color: "#eee",
          }}
        />
      </div>
      <ExecuteAttack />
    </div>
  );
};

const columns: GridColDef[] = [
  {
    field: "payload",
    headerName: "Payload",
    flex: 1,
    editable: true,
    renderCell: (params: GridValueGetterParams) => (
      <p className={styles.scroll}>{params.row.payload}</p>
    ),
  },
  {
    field: "unexpected",
    headerName: "Unexpected Output",
    flex: 1,
    editable: true,
    renderCell: (params: GridValueGetterParams) => (
      <p className={styles.scroll}>{params.row.unexpected}</p>
    ),
  },
  {
    field: "severity",
    headerName: "Expected Severity",
    headerAlign: 'center',
    flex: 1,
    align: "center",
    renderCell: (params: GridValueGetterParams) =>
      makeStatusChip(params.row.severity).chip,
    sortComparator: resultsComparator,
  },
  {
    field: "result",
    headerName: "Scan Result",
    headerAlign: 'center',
    flex: 1,
    align: "center",
    renderCell: (params: GridValueGetterParams) => makeStatusChip(params.row.result).chip,
    sortComparator: resultsComparator,
  },
];

const DataGridFooters = (payloads: PayloadsT) => {
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

export default RequestForm;
