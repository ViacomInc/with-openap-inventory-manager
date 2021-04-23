import { configureStore } from "@reduxjs/toolkit";
import { openAPReducer } from "openap-inventory-manager-react";

const store = configureStore({ reducer: { ...openAPReducer } });
export default store;

export type State = ReturnType<typeof store.getState>;

import { useDispatch as useDispatchHook } from "react-redux";
export type Dispatch = typeof store.dispatch;
export const useDispatch = (): Dispatch => useDispatchHook<Dispatch>();

export { useSelector } from "react-redux";
