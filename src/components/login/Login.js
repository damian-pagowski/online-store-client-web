import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../../action-creators/user-actions-creator";
import { Navigate, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Login.css";

const Login = () => {
  // State for form credentials
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(credentials));
    setCredentials({ username: "", password: "" });
  };

  // Handles input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  // Redirect if the user is already logged in
  if (user.token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="mx-auto mt-5" id="container-login">
      <div className="card" id="card-login">
        <img
          src={logo}
          className="card-img-top mx-auto"
          alt="Logo"
          id="logo-login"
        />
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="username"
                onChange={handleChange}
                value={credentials.username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                onChange={handleChange}
                value={credentials.password}
              />
            </div>

            {user.message && (
              <p id="login-error" className="text-danger">
                Invalid password. Please try again.
              </p>
            )}

            <button type="submit" className="btn btn-success" id="login-btn">
              Login
            </button>

            <div className="w-100">
              <p className="text-right p-0">
                Don't have an account?
                <Link to="/register" className="text-right w-100" id="link-to-register">
                  {" "}register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;