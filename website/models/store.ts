/** @format */

import { configureStore } from "@reduxjs/toolkit";

import endPointsReducer from "./endPointsSlice";
import errorReducer from "./errorSlice";
import payloadsReducer from "./payloadsSlice";

export const store = configureStore({
  reducer: {
    endPointsReducer: endPointsReducer,
    errorReducer: errorReducer,
    payloadsReducer: payloadsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
