import React from "react";
import { useSelector } from "react-redux";
import Cards from "./cards";

export default function Cart() {
  const items = useSelector((state) => state.cart.cart) || [];

  return (
    <div className="container my-3 justify-center d-flex items-center flex-wrap">
      <h1>CART...</h1>
      {items.map((item) => (
        <Cards item={item} key={item.id} btn={"DELETE"} />
      ))}
    </div>
  );
}
