import React from "react";
import "./Footer.css";

const footerLinks = [
  {
    title: "Company",
    links: ["Blog", "About", "Investor Relations"],
  },
  {
    title: "Services",
    links: ["Sell Your Services", "Become an Affiliate", "Advertise Your Products"],
  },
  {
    title: "Products",
    links: ["Payment Products", "Shop with Points", "Business Card"],
  },
  {
    title: "Support",
    links: ["Your Account", "Your Orders", "Returns & Replacements"],
  },
];

function Footer() {
  return (
    <nav className="navbar sticky-bottom navbar-light bg-light" id="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-columns">
            {footerLinks.map((column, index) => (
              <div className="footer-col" key={index}>
                <h6 className="footer-title">{column.title}</h6>
                <ul>
                  {column.links.map((link, idx) => (
                    <li key={idx}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Footer;