import React from "react";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="" id="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav  mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Help
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Gift Cards
            </a>
          </li>
        </ul>

        <div className="mx-auto order-0">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-user icon-nav-right"></i>Login
            </a>
          </li>
          <li className="nav-item mr-4">
            <a className="nav-link" href="#">
              <i className="fa fa-shopping-cart icon-nav-right"></i>Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
