/** @format */

import { configureStore } from "@reduxjs/toolkit";

import endPointsReducer from "./endPointsSlice";
import errorReducer from "./errorSlice";
import payloadsReducer from "./payloadsSlice";
import payloadsDialogReducer from "./payloadsDialogSlice";

export const store = configureStore({
  reducer: {
    endPointsReducer: endPointsReducer,
    errorReducer: errorReducer,
    payloadsReducer: payloadsReducer,
    payloadsDialogReducer: payloadsDialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
