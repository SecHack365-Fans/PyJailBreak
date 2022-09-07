/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { GridRowId } from "@mui/x-data-grid";

type DialogT = {
  payloadOpen: boolean;
  optionsOpen: boolean;
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

const initialState: DialogT = {
  payloadOpen: false,
  optionsOpen: false,
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
    setPayloadOpen: (state, action: OpenActionT) => {
      state.payloadOpen = action.payload;
    },
    setOptionsOpen: (state, action: OpenActionT) => {
      state.optionsOpen = action.payload;
    },
    setMode: (state, action: ModeActionT) => {
      state.mode = action.payload;
    },
  },
});

export const { setRowId, setPayloadOpen, setOptionsOpen, setMode } =
  endPointsSlice.actions;

export const getRowIdState = (state: RootState) =>
  state.payloadsDialogReducer.gridRowId;
export const getPayloadOpenState = (state: RootState) =>
  state.payloadsDialogReducer.payloadOpen;
export const getOptionsOpenState = (state: RootState) =>
  state.payloadsDialogReducer.optionsOpen;
export const getModeState = (state: RootState) =>
  state.payloadsDialogReducer.mode;

export default endPointsSlice.reducer;
