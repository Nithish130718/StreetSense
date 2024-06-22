import React from "react";
import "../Styles/Footer.css";
import SubscribeNewsletter from "./SubscribeNewsletter";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">StreetSense</p>
            <p className="ft-description">
              Subscribe to our Newsletter for latest updates on StreetSense and
              its products
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Key Features</p>
          <ul className="ft-list-items">
            <li>
              <a href="#key-features">Traffic Updates</a>
            </li>
            <li>
              <a href="#key-features">I-Route Planning</a>
            </li>
            <li>
              <a href="#key-features">Live Data</a>
            </li>
            <li>
              <a href="#key-features">Offline Access</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Legal</p>
          <ul className="ft-list-items">
            <li>
              <Link to={"/StreetSense/legal"}>General Info</Link>
            </li>
            <li>
              <Link to={"/StreetSense/legal"}>Privacy Policy</Link>
            </li>
            <li>
              <Link to={"/StreetSense/legal"}>Terms of Services</Link>
            </li>
            <li>
              <Link to={"/StreetSense/legal"}>How it Works</Link>
            </li>
          </ul>
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@StreetSense.com">
                support@StreetSense.com
              </a>
            </li>
            <li>
              <a href="mailto:appointment@StreetSense.com">
                appointment@StreetSense.com
              </a>
            </li>
            <li>
              <a href="tel:+022 5454 5252">+022 5454 5252</a>
            </li>
            <li>
              <a href="tel:+022 2326 6232">+022 2326 6232</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>
          © 2013-2023 StreetSense. All rights reserved.
          <Link to="/StreetSense/terms-and-conditions">
            {" "}
            See Terms and Conditions here
          </Link>
        </p>

        <ul className="ft-social-links">
          <li>
            <a
              href="https://linkedin.com/in/"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
