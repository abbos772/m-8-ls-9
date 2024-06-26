import React from "react";
import "./Navbar.css";
import Logo from "./img/Logo.svg";
import { GrSearch } from "react-icons/gr";
import { FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="nav">
          <img src={Logo} alt="" />
        </div>
        <div className="nav">
          <a href="">Home</a>
          <a href="">Brands</a>
          <a href="">Recent Products</a>
          <a href="">Contact</a>
          <a href="">About</a>
        </div>
        <div className="nav">
          <GrSearch />
          <FaUser />
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
