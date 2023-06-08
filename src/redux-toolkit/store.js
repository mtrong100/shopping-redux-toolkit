import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import logger from "redux-logger";
import cartSlice from "./cartSlice";

export const reducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
});

export default configureStore({
  reducer,
  // middleware: (gDM) => gDM().concat(logger),
});
