import { createStore, configureStore } from "@reduxjs/toolkit";
import slice from "../Slices/slice";

const store = configureStore({
  reducer: {
    rockets: slice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
