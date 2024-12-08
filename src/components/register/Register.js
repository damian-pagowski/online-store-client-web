import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleRegister } from "../../action-creators/user-actions-creator";
import { Navigate, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleRegister(formData));
    setFormData({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>

            <button type="submit" className="btn btn-success" id="register-btn">
              Register
            </button>
            <div className="w-100">
              <p className="text-right p-0">
                Already have an account?
                <Link to="/login" className="text-right w-100" id="link-to-login">
                  {" "}login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;