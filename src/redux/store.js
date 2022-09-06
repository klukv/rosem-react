import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer, sethsReducer, cartReducer } from "./reducers";

const store = configureStore({
  reducer: { filtersReducer, sethsReducer, cartReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
