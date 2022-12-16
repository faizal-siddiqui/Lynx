import React from "react";
import { NavLink } from "react-router-dom";

const CartLinks = ({ location, linkText, activeStyle }) => {
  return (
    <>
      <NavLink
        to={location}
        style={({ isActive }) => (isActive ? activeStyle : { color: "gray" })}
      >
        {linkText}
      </NavLink>
    </>
  );
};

export default CartLinks;
