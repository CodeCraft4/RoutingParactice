import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        background: "#212121",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Link
        to={"/home"}
        style={{
          color: "orange",
          fontWeight: 900,
          fontSize: 30,
          textDecoration: "none",
        }}
      >
        Logo
      </Link>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: 30,
        }}
      >
        <li>
          <NavLink to={"/home"} style={linkStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} style={linkStyle}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to={"/blogs"} style={linkStyle}>
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} style={linkStyle}>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

const linkStyle = {
  color: "white",
  textDecoration: "none",
};
