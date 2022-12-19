import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../Cart";
import Items from "../items";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Items />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
