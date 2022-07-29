/** @format */

import React from "react";
import { onChangeInputFile } from "./onChangeInputFile";
import { FormStateT, PayloadsT } from "../models/PayloadsT";
import { TextField } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { makeStatusChip } from "./statusChip";
import { payloads } from "./payloads";
import styles from "./RequestForm.module.css";

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
    console.log(payloads);
    this.setState({
      payloads: payloads,
    });
  };
  setFileReadError = (err: string) => {
    this.setState({
      errorMsg: err,
    });
  };
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
        <input
          type="file"
          onChange={(err) =>
            onChangeInputFile(err, this.setPayloads, this.setFileReadError)
          }
        />
        {this.state.errorMsg}
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={this.state.payloads}
            columns={this.columns}
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
