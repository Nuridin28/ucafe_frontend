import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../features/Cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
