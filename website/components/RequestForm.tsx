/** @format */

import React from "react";
import ExecuteAttack from "./ExecuteAttack";
import { PayloadsEditor } from "./PayloadsEditor";
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
import {
  getOpenState,
  getRowIdState,
  setOpen,
  setRowId,
} from "../models/payloadsDialogSlice";
import { getPayloads, setSelections } from "../models/payloadsSlice";
import { PayloadsT } from "../models/PayloadsT";
import { DataGridFooters } from "./DataGridFooters";

const RequestForm = () => {
  const dispatch = useDispatch();
  const apiUrl = useSelector(getAPIUrlState);
  const attackUrl = useSelector(getAttackUrlState);
  const payloads: PayloadsT = useSelector(getPayloads);
  const dialogOpen = useSelector(getOpenState);
  const dialogRowId = useSelector(getRowIdState);
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
  const handleDialogOpen = (gridRowId: GridRowId) => {
    dispatch(setOpen(true));
    dispatch(setRowId(gridRowId));
  };
  const handleDialogClose = () => {
    dispatch(setOpen(false));
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
          columns={columns(handleDialogOpen)}
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
      <PayloadsEditor
        open={dialogOpen}
        rowId={dialogRowId}
        payload={payloads[dialogRowId].payload}
        handleClose={handleDialogClose}
      />
    </div>
  );
};

const columns = (handleDialogOpen: (id: GridRowId) => void): GridColDef[] => {
  return [
    {
      field: "payload",
      headerName: "Payload",
      flex: 1,
      renderCell: (params: GridValueGetterParams) => (
        // TODO: クリックできる場所の範囲を変更する
        <span
          className={styles.scroll}
          onClick={() => handleDialogOpen(params.id)}
        >
          {params.row.payload.map((option: string, index: number) => (
            <Chip
              key={index}
              variant="outlined"
              label={option}
              sx={{
                margin: "0 2px",
                p: "0 5px",
                "& .MuiChip-label": {
                  color: "#ccc",
                  overflowX: "scroll",
                  textOverflow: "clip",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                },
              }}
            />
          ))}
        </span>
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
      headerAlign: "center",
      flex: 1,
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
      align: "center",
      renderCell: (params: GridValueGetterParams) =>
        makeStatusChip(params.row.result).chip,
      sortComparator: resultsComparator,
    },
  ];
};

export default RequestForm;
