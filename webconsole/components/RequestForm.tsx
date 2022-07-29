/** @format */

import React from "react";
import InputFile from "./InputFile";
import { PayloadT, FormStateT } from "../models/PayloadsT";
import { TextField } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { makeStatusChip } from "./statusChip";
import styles from "./RequestForm.module.css";

class RequestForm extends React.Component<{}, FormStateT> {
  constructor(props: {}) {
    super(props);
    this.state = {
      endpoint: "",
      payloads: this.payloads,
      selections: [],
    };
  }
  // 後にIDは自動で付与するので、このブロックは消す
  private payloads: PayloadT[] = [
    {
      id: 1,
      payload: "__import__('os').system('echo \"Expected String\"')",
      expected: "Expected String",
      severity: "Safe",
    },
    {
      id: 2,
      payload:
        "__import__('os').system('echo \"Expected String is Toooooo Long\"')",
      expected: "Expected String is Toooooo Long",
      severity: "Warning",
    },
    {
      id: 3,
      payload: "__import__('os').system('echo \"Dangerous\"')",
      expected: "Dangerous",
      severity: "Critical",
    },
    {
      id: 4,
      payload: "print(1)",
      expected: "1",
      severity: undefined,
    },
  ];
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
  render() {
    return (
      <div className={styles.body}>
        <InputFile defaultValue={this.payloads} />
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
            rows={this.payloads}
            columns={this.columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
            onSelectionModelChange={(selections) =>
              this.setState({ ...this.state, selections: selections })
            }
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
