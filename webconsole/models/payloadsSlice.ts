/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { PayloadsT } from "./PayloadsT";
import { GridSelectionModel } from "@mui/x-data-grid/models";

type Payloads = {
  payloads: PayloadsT;
  selections: GridSelectionModel;
};

type PayloadsActionT = {
  type: string;
  payload: PayloadsT;
};

type SelectionActionT = {
  type: string;
  payload: GridSelectionModel;
};

const initialState: Payloads = {
  payloads: [] as PayloadsT,
  selections: [] as GridSelectionModel,
};

export const payloadsSlice = createSlice({
  name: "payloads",
  initialState,
  reducers: {
    setPayloads: (state, action: PayloadsActionT) => {
      state.payloads = action.payload;
    },
    setSelections: (state, action: SelectionActionT) => {
      state.selections = action.payload;
    },
  },
});

export const { setPayloads, setSelections } = payloadsSlice.actions;

export const getPayloads = (state: RootState) => state.payloadsReducer.payloads;
export const getSelections = (state: RootState) =>
  state.payloadsReducer.selections;

export default payloadsSlice.reducer;
