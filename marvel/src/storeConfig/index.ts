import { configureStore } from "@reduxjs/toolkit";
import personApi from "./apiSlice";
import { slice } from './slice'

export const store = configureStore({
    reducer: {
        personGet: slice.reducer,
        [personApi.reducerPath]: personApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(personApi.middleware)
})