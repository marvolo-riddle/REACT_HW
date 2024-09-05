import { configureStore } from "@reduxjs/toolkit";
import { fetchApi } from "./apiSlice/apiSlice.js";

export const store = configureStore({
  reducer: {
    [fetchApi.reducerPath]: fetchApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchApi.middleware),
});
