import { configureStore } from "@reduxjs/toolkit";
import producReducer from "../SLICE/productSlice";
import cartReducer from "../SLICE/cartSlice";

export const store = configureStore({
  reducer: {
    product: producReducer,
    cart: cartReducer,
  },
});
