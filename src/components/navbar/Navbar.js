import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const { user, handleLogout } = useContext(UserContext);

  const logoutHandler = () => {
    console.log("logout");
    handleLogout();
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
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {user?.email ? (
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
            <Link  id="cart-link"
              className={`nav-link ${!user?.token ? 'disabled' : ''}`} 
              to={user?.token ? "/cart" : "#"}
            >
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