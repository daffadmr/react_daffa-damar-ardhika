import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./features/index";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});