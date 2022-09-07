/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type ModeT = {
  emulateMode: boolean;
};

type EmulateActionT = {
  type: string;
  payload: boolean;
};

const initialState: ModeT = {
  emulateMode: false,
};

export const emulateSlice = createSlice({
  name: "emulate",
  initialState,
  reducers: {
    setEmulateMode: (state, action: EmulateActionT) => {
      state.emulateMode = action.payload;
    },
  },
});

export const { setEmulateMode } = emulateSlice.actions;

export const getIsEmulate = (state: RootState) =>
  state.emulateReducer.emulateMode;

export default emulateSlice.reducer;
