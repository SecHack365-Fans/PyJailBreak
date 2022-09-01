/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { GridRowId } from "@mui/x-data-grid";

type Url = {
  open: boolean;
  gridRowId: GridRowId;
};

type RowIdActionT = {
  type: string;
  payload: GridRowId;
};

type OpenActionT = {
  type: string;
  payload: boolean;
};

const initialState: Url = {
  open: false,
  gridRowId: 0,
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
  },
});

export const { setRowId, setOpen } = endPointsSlice.actions;

export const getRowIdState = (state: RootState) =>
  state.payloadsDialogReducer.gridRowId;
export const getOpenState = (state: RootState) =>
  state.payloadsDialogReducer.open;

export default endPointsSlice.reducer;
