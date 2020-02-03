import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <nav className="navbar sticky-bottom navbar-light bg-light" id="footer">
      <div className="container">
        <div className="mx-auto mt-2">
         
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-col">
            <ul>
              <li>Blog</li>
              <li>About</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <li>Sell Your Services</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <li>Payment Products</li>
              <li>Shop with Points</li>
              <li>Business Card</li>
            </ul>
          </div>
          <div className="footer-col">
            <ul>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Returns &amp; Replacements</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-2">
      </div>
    </nav>
  );
}

export default Footer;
