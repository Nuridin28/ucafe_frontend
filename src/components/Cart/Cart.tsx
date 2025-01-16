import React from "react";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
type Props = {};

export default function Cart({}: Props) {
  return (
    <div className="flex justify-end items-center my-8">
      <ShoppingCartCheckoutIcon />
    </div>
  );
}
