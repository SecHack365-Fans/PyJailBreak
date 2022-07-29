/** @format */

import React from "react";
import { onChangeInputFile } from "./onChangeInputFile";
import { FormStateT, PayloadsT } from "../models/PayloadsT";
import { TextField, Button, Box, Tooltip } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { makeStatusChip } from "./statusChip";
import { payloads } from "./payloads";
import { downloadFile } from "./downloadFile";
import styles from "./RequestForm.module.css";
import { FileUpload, FileDownload } from "@mui/icons-material";

class RequestForm extends React.Component<{}, FormStateT> {
  constructor(props: {}) {
    super(props);
    this.state = {
      endpoint: "",
      payloads: payloads,
      selections: [],
      errorMsg: null,
    };
  }
  scrollStyle = {
    overflow: "scroll",
    scrollbarWidth: "none",
    "-ms-overflow-style": "none",
    "::-webkit-scrollbar": {
      display: "none",
    },
  };
  columns: GridColDef[] = [
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
      field: "expected",
      headerName: "Expected Output",
      flex: 1,
      editable: true,
      renderCell: (params: GridValueGetterParams) => (
        <p className={styles.scroll}>{params.row.expected}</p>
      ),
    },
    {
      field: "severity",
      headerName: "Scan Result",
      flex: 1,
      renderCell: (params: GridValueGetterParams) =>
        makeStatusChip(params.row.severity),
    },
  ];
  setPayloads = (payloads: PayloadsT) => {
    this.setState({
      payloads: payloads,
    });
  };
  setFileReadError = (err: string) => {
    this.setState({
      errorMsg: err,
    });
  };
  DataGridFooters = () => (
    <Box sx={{ p: 1, display: "flex" }}>
      <Tooltip title="Upload Payloads">
        <Button component="label" sx={{ color: "#eee" }}>
          <FileUpload />
          <input
            type="file"
            hidden
            onChange={(err) => {
              this.setState({
                errorMsg: null,
              });
              onChangeInputFile(err, this.setPayloads, this.setFileReadError);
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
              this.state.payloads.map((payload) => {
                return {
                  payload: payload.payload,
                  expected: payload.expected,
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
      {this.state.errorMsg && (
        <p className={styles.errMsg}>Error: {this.state.errorMsg}</p>
      )}
    </Box>
  );
  render() {
    return (
      <div className={styles.body}>
        <TextField
          label="Endpoint"
          variant="outlined"
          placeholder="https://localhost:8080"
          required
          sx={{
            width: "70%",
            maxWidth: "600px",
            marginBottom: "1rem",
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
          }}
        />
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={this.state.payloads}
            columns={this.columns}
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={(selections) =>
              this.setState({ ...this.state, selections: selections })
            }
            components={{
              Footer: this.DataGridFooters,
            }}
            sx={{
              color: "#eee",
            }}
          />
        </div>
      </div>
    );
  }
}

export default RequestForm;
