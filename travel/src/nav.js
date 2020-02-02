import React from "react";
import styled from "styled-components";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import Kyoto from "./Kyoto";

function Nav() {
  const navstyle = {
    color: "white",
    textDecoration: "none"
  };
  return (
    <Navbar>
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
    </Navbar>
  );
}

export default Nav;
