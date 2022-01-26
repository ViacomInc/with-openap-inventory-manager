import { configureStore } from "@reduxjs/toolkit";
import { managerReducer } from "@viacomcbs/openap-inventory-manager-react";

const store = configureStore({ reducer: { ...managerReducer } });
export default store;

export type State = ReturnType<typeof store.getState>;

import { useDispatch as useDispatchHook } from "react-redux";
export type Dispatch = typeof store.dispatch;
export const useDispatch = (): Dispatch => useDispatchHook<Dispatch>();

export { useSelector } from "react-redux";
