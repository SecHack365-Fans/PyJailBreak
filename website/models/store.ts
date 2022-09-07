/** @format */

import { configureStore } from "@reduxjs/toolkit";

import endPointsReducer from "./endPointsSlice";
import payloadsReducer from "./payloadsSlice";
import payloadsDialogReducer from "./dialogSlice";
import emulateReducer from "./emulateSlice";

export const store = configureStore({
  reducer: {
    endPointsReducer: endPointsReducer,
    payloadsReducer: payloadsReducer,
    payloadsDialogReducer: payloadsDialogReducer,
    emulateReducer: emulateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
