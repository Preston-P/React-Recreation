import NavBar from "./navbar";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navstyle = {
    color: "white",
    textDecoration: "none"
  };
  return (
    <NavBar>
      <nav>
        <ul>
          <Link style={navstyle} to="/">
            <li>Home</li>
          </Link>

          <Link style={navstyle} to="/Kyoto">
            <li>Kyoto</li>
          </Link>
          <Link style={navstyle} to="/Osaka">
            <li>Osaka</li>
          </Link>
          <Link style={navstyle} to="/Jeju">
            <li>Jeju</li>
          </Link>
        </ul>
      </nav>
    </NavBar>
  );
}

export default Nav;
