import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/Cart/cartSlice";

export const cartStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
