/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type Url = {
  APIUrl: string;
  vulnDomain: string;
  vulnPort: number;
};

type ActionT = {
  type: string;
  payload: string;
};

type vulnDomainActionT = {
  type: string;
  payload: string;
};

type vulnPortActionT = {
  type: string;
  payload: number | undefined;
};

const initialState: Url = {
  APIUrl: "http://192.168.11.9:8080", // バックエンドのエンドポイント
  vulnDomain: "localhost", // やられサーバのホスト
  vulnPort: 4444, // やられサーバのポート
};

export const endPointsSlice = createSlice({
  name: "endpoints",
  initialState,
  reducers: {
    setAPIUrl: (state, action: ActionT) => {
      state.APIUrl = action.payload;
    },
    setVulnDomain: (state, action: vulnDomainActionT) => {
      state.vulnDomain = action.payload;
    },
    setVulnPort: (state, action: vulnPortActionT) => {
      state.vulnPort = action.payload;
    },
  },
});

export const { setAPIUrl, setVulnDomain, setVulnPort } = endPointsSlice.actions;

export const getAPIUrlState = (state: RootState) =>
  state.endPointsReducer.APIUrl;
export const getVulnDomain = (state: RootState) =>
  state.endPointsReducer.vulnDomain;
  export const getVulnPort = (state: RootState) =>
  state.endPointsReducer.vulnPort;

export default endPointsSlice.reducer;