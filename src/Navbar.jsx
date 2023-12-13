import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <nav style={navStyle}>
        <Link to={"/home"}>Logo</Link>
        <ul style={orderList}>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/blogs"}>Blogs</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;

const navStyle = {
  background: "gray",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};
const orderList = {
  display: "flex",
  listStyleType: "none",
  gap: 40,
};
