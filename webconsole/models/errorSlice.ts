/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type Error = {
  jsonErr: string;
};

type ActionT = {
  type: string;
  payload: string;
};

const initialState: Error = {
  jsonErr: "",
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setJsonErrMsg: (state, action: ActionT) => {
      state.jsonErr = action.payload;
    },
  },
});

export const { setJsonErrMsg } = errorSlice.actions;

export const getJsonErrMsg = (state: RootState) => state.errorReducer.jsonErr;

export default errorSlice.reducer;
