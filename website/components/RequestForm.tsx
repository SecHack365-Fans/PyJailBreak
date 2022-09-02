/** @format */

import React from "react";
import ExecuteAttack from "./ExecuteAttack";
import { DialogEditor } from "./DialogEditor";
import { TextField, Chip } from "@mui/material";
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
  getAttackUrlState,
  setAPIUrl,
  setAttackUrl,
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
  const attackUrl = useSelector(getAttackUrlState);
  const payloads: PayloadsT = useSelector(getPayloads);
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
