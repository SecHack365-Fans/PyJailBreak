/** @format */

import React from "react";
import ExecuteAttack from "./ExecuteAttack";
import { DialogEditor } from "./DialogEditor";
import { TextField, Chip, Box } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridRowId,
} from "@mui/x-data-grid";
import { makeStatusChip, resultsComparator } from "./statusChip";
import styles from "./RequestForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAPIUrlState,
  getVulnDomain,
  getVulnPort,
  setAPIUrl,
  setVulnDomain,
  setVulnPort,
} from "../models/endPointsSlice";
import { setOpen, setRowId, setMode } from "../models/payloadsDialogSlice";
import {
  getPayloads,
  setSelections,
  setPayloads,
} from "../models/payloadsSlice";
import { PayloadsT } from "../models/PayloadsT";
import { DataGridFooters } from "./DataGridFooters";

const RequestForm = () => {
  const dispatch = useDispatch();
  const apiUrl = useSelector(getAPIUrlState);
  const vulnDomain = useSelector(getVulnDomain);
  const vulnPort = useSelector(getVulnPort);
  const payloads: PayloadsT = useSelector(getPayloads);
  const textFieldStyle = {
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
  const targetTextStyle = {
    width: "40%",
    "& ,MuiFormControl-root": {
      mb: 0,
    },
  };
  const handleDialogOpen = (
    gridRowId: GridRowId,
    mode: "payload" | "unexpected"
  ) => {
    dispatch(setOpen(true));
    dispatch(setRowId(gridRowId));
    dispatch(setMode(mode));
  };
  const handleDialogClose = (gridRowId: GridRowId) => {
    dispatch(setOpen(false));
    const newPayloads = [
      ...payloads.slice(0, gridRowId as number),
      {
        ...payloads[gridRowId as number],
        payload: payloads[gridRowId as number].payload.filter(
          (payload) => payload !== ""
        ),
      },
      ...payloads.slice((gridRowId as number) + 1),
    ];
    dispatch(setPayloads(newPayloads));
  };
  return (
    <div className={styles.body}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%" }}>
          <TextField
            required
            label="Endpoint for PyJailBreak Server"
            variant="outlined"
            placeholder="https://localhost:8080"
            value={apiUrl}
            onChange={(e) => {
              dispatch(setAPIUrl(e.target.value));
            }}
            sx={Object.assign({}, textFieldStyle, { width: "80%" })}
          />
        </div>
        <div style={{ width: "100%" }}>
          <TextField
            required
            label="Domain for Target Server"
            variant="outlined"
            placeholder="this.is.vulnable.server"
            value={vulnDomain}
            onChange={(e) => {
              dispatch(setVulnDomain(e.target.value));
            }}
            sx={Object.assign({}, textFieldStyle, targetTextStyle)}
          />
          <TextField
            required
            label="Port for Target Server"
            variant="outlined"
            placeholder="4000"
            value={vulnPort}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "") {
                dispatch(setVulnPort(undefined));
              } else {
                const port = Math.min(
                  parseInt(value.substring(0, 5).replace(/[^0-9]/g, "")),
                  65536
                );
                dispatch(setVulnPort(port));
              }
            }}
            sx={Object.assign({}, textFieldStyle, targetTextStyle)}
          />
          <p
            style={{
              color: "#aaa",
              margin: "3px 0 16px 0",
              fontSize: "0.75rem",
            }}
          >
            {vulnDomain !== "" || vulnPort
              ? `Like this: nc ${vulnDomain} ${vulnPort ?? ""}`
              : ""}
          </p>
        </div>
      </Box>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={payloads}
          columns={columns()}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(selections) =>
            dispatch(setSelections(selections))
          }
          components={{
            Footer: () => <DataGridFooters />,
          }}
          sx={{
            color: "#eee",
            "& .MuiDataGrid-cell": {
              padding: "2px",
            },
          }}
          onCellClick={(params) => {
            if (params.field === "payload" || params.field === "unexpected") {
              handleDialogOpen(params.id, params.field);
            }
          }}
        />
      </div>
      <ExecuteAttack />
      <DialogEditor handleClose={handleDialogClose} />
    </div>
  );
};

const columns = (): GridColDef[] => {
  const chipStyle = {
    margin: "0 2px",
    p: "0 5px",
    "& .MuiChip-label": {
      color: "#ccc",
    },
  };
  return [
    {
      field: "payload",
      headerName: "Payload",
      flex: 1,
      renderCell: (params: GridValueGetterParams) => (
        <span className={styles.scroll} style={{ padding: "2px" }}>
          {params.row.payload.map((option: string, index: number) => (
            <Chip
              key={index}
              variant="outlined"
              label={option}
              sx={chipStyle}
            />
          ))}
        </span>
      ),
    },
    {
      field: "unexpected",
      headerName: "Unexpected Output",
      flex: 1,
      renderCell: (params: GridValueGetterParams) => (
        // TODO: クリックできる場所の範囲を変更する
        <span className={styles.scroll} style={{ padding: "2px" }}>
          {params.row.unexpected.map((option: string, index: number) => (
            <Chip
              key={index}
              variant="outlined"
              label={option}
              sx={chipStyle}
            />
          ))}
        </span>
      ),
    },
    {
      field: "severity",
      headerName: "Expected Severity",
      headerAlign: "center",
      flex: 1,
      maxWidth: 170,
      align: "center",
      renderCell: (params: GridValueGetterParams) =>
        makeStatusChip(params.row.severity).chip,
      sortComparator: resultsComparator,
    },
    {
      field: "result",
      headerName: "Scan Result",
      headerAlign: "center",
      flex: 1,
      maxWidth: 170,
      align: "center",
      renderCell: (params: GridValueGetterParams) =>
        makeStatusChip(params.row.result).chip,
      sortComparator: resultsComparator,
    },
  ];
};

export default RequestForm;
