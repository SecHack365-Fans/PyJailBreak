/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type Url = {
  APIUrl: string;
  attackUrl: string;
};

type ActionT = {
  type: string;
  payload: string;
};

const initialState: Url = {
  APIUrl: "http://192.168.11.9:8080", // バックエンドのエンドポイント
  attackUrl: "localhost:4444", // やられサーバのエンドポイント
};

export const endPointsSlice = createSlice({
  name: "endpoints",
  initialState,
  reducers: {
    setAPIUrl: (state, action: ActionT) => {
      state.APIUrl = action.payload;
    },
    setAttackUrl: (state, action: ActionT) => {
      state.attackUrl = action.payload;
    },
  },
});

export const { setAPIUrl, setAttackUrl } = endPointsSlice.actions;

export const getAPIUrlState = (state: RootState) =>
  state.endPointsReducer.APIUrl;
export const getAttackUrlState = (state: RootState) =>
  state.endPointsReducer.attackUrl;

export default endPointsSlice.reducer;