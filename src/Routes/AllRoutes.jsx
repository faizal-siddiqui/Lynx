import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Products from "../pages/Products";
import ProductsDetails from "../pages/ProductsDetails";
import Cart from "../pages/Cart";
import Address from "../pages/Address";
import Payment from "../pages/Payment";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/products/:categ" element={<Products />} />
      <Route path="/products/:categ/:id" element={<ProductsDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/address" element={<Address />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default AllRoutes;
