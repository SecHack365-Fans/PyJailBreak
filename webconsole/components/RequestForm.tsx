/** @format */

import React from "react";
import InputFile from "./InputFile";
import { SeverityT, PayloadT, FormStateT } from "../models/PayloadsT";
import { TextField, Chip } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Check, WarningAmber, Cancel, HelpOutline } from "@mui/icons-material";
import styles from "./RequestForm.module.css";

class RequestForm extends React.Component<{}, FormStateT> {
  constructor(props: {}) {
    super(props);
    this.state = {
      endpoint: "",
      payloads: [],
      selections: [],
    };
  }
  // 後にIDは自動で付与するので、このブロックは消す
  payloads: PayloadT[] = [
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
  makeStatusChip = (severity: SeverityT) => {
    if (severity === "Safe") {
      return (
        <Chip
          variant="outlined"
          color="success"
          label={severity}
          icon={<Check />}
        />
      );
    } else if (severity === "Warning") {
      return (
        <Chip
          variant="outlined"
          color="warning"
          label={severity}
          icon={<WarningAmber />}
        />
      );
    } else if (severity === "Critical") {
      return (
        <Chip
          variant="outlined"
          color="error"
          label={severity}
          icon={<Cancel />}
        />
      );
    } else {
      return (
        <Chip
          variant="outlined"
          color="info"
          label="Not Finished"
          icon={<HelpOutline />}
        />
      );
    }
  };
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
        this.makeStatusChip(params.row.severity),
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
