import { combineReducers } from "@reduxjs/toolkit";
import customer from "./customerSlice"

export const rootReducer = combineReducers({
    customer
})