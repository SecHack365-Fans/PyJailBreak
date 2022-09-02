/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { GridRowId } from "@mui/x-data-grid";

type Url = {
  open: boolean;
  gridRowId: GridRowId;
  mode: "payload" | "unexpected";
};

type RowIdActionT = {
  type: string;
  payload: GridRowId;
};

type OpenActionT = {
  type: string;
  payload: boolean;
};

type ModeActionT = {
  type: string;
  payload: "payload" | "unexpected";
};

const initialState: Url = {
  open: false,
  gridRowId: 0,
  mode: "payload",
};

export const endPointsSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    setRowId: (state, action: RowIdActionT) => {
      state.gridRowId = action.payload;
    },
    setOpen: (state, action: OpenActionT) => {
      state.open = action.payload;
    },
    setMode: (state, action: ModeActionT) => {
      state.mode = action.payload;
    },
  },
});

export const { setRowId, setOpen, setMode } = endPointsSlice.actions;

export const getRowIdState = (state: RootState) =>
  state.payloadsDialogReducer.gridRowId;
export const getOpenState = (state: RootState) =>
  state.payloadsDialogReducer.open;
export const getModeState = (state: RootState) =>
  state.payloadsDialogReducer.mode;

export default endPointsSlice.reducer;
