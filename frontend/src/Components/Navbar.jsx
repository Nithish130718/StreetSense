import React, { useState } from "react";

import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Map from "../Pages/Map";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/StreetSense">StreetSense</Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/StreetSense" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#key-features" className="navbar-links">
            Key Features
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Comments and Reviews
          </a>
        </li>
        <li>
          <a href="#contributors" className="navbar-links">
            Contributors
          </a>
        </li>
        {/* <li>
          <Link to="/login" className="navbar-links">
            Login
          </Link>
        </li>
         <li>
          <Link to = "/dashboard" className = "navbar-links">
            Dashboard
          </Link>
  </li> */}
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >
        <Link to="/StreetSense/map" className="navbar-links">
          Use the Map
        </Link>
      </button>

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/StreetSense">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/StreetSense#services">
              Services
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/StreetSense#about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/StreetSense#reviews">
              Reviews
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/StreetSense#contributors">
              Contributors
            </Link>
          </li>
          <li>
            <Link onClick={openNav} to="/StreetSense/login">
              Login
            </Link>
          </li>
          <li>
            <Link to="/login" className="navbar-links">
              Login
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav"></div>
    </div>
  );
}

export default Navbar;
