import React, { useEffect, useState } from "react";
import Cards from "./cards";

export default function Items() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setItems(res));
  }, []);

  return (
    <div className="container my-3 justify-center d-flex items-center flex-wrap">
      {items.map((item) => (
        <Cards item={item} />
      ))}
    </div>
  );
}
