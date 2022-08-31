import filtersReducer from "./filters";
import sethsReducer from "./seths";
import cartReducer from "./cart";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  filters: filtersReducer,
  seths: sethsReducer,
  cart: cartReducer,
});
export default rootReducer;
