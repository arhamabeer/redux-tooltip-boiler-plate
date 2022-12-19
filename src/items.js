import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./cards";
import { getProducts } from "./REDUX/SLICE/productSlice";

export default function Items() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.product.products) || [];
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="container my-3 justify-center d-flex items-center flex-wrap">
      <h1>ITEMS...</h1>

      {items.map((item) => (
        <Cards item={item} key={item.id} btn={"Add To Cart"} />
      ))}
    </div>
  );
}
