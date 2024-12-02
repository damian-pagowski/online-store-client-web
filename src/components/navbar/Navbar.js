import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { handleLogout } from "../../action-creators/user-actions-creator";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

const Navbar = ({ searchHandler }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const itemsCount = useSelector((state) => state.cart.itemsCount) || 0;

  const logoutHandler = () => {
    console.log("logout");
    dispatch(handleLogout());
  };

  const searchChangeHandler = (event) => {
    console.log("search updating...");
    setSearch(event.target.value);
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    console.log("search submitted...");
    searchHandler({ search });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/" id="home-link">
        <img src={logo} alt="Logo" id="logo" />
      </Link>
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
        <ul className="navbar-nav mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link disabled" to="/">
              Help
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/">
              Gift Cards
            </Link>
          </li>
        </ul>

        <div className="mx-auto order-0">
          <form
            className="form-inline my-2 my-lg-0"
            onSubmit={searchSubmitHandler}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              name="search"
              id="product-search-input"
              value={search}
              onChange={searchChangeHandler}
              placeholder="Search..."
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              id="product-search-button"
            >
              Search
            </button>
          </form>
        </div>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {user.email ? (
              <Link
                id="logout-link"
                className="nav-link"
                onClick={logoutHandler}
                to="/"
              >
                <span id="logged-user">
                  {user.username}{" "}
                </span>
                <i className="fa fa-user icon-nav-right"></i>Logout
              </Link>
            ) : (
              <Link className="nav-link" to="/login" id="login-link">
                <i className="fa fa-user icon-nav-right"></i>Login
              </Link>
            )}
          </li>
          <li className="nav-item mr-4">
            <Link className="nav-link" to="/cart" id="cart-link">
              <span className="badge badge-pill badge-success" id="cart-size">
                {itemsCount}
              </span>
              <i className="fa fa-shopping-cart icon-nav-right"></i>
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;