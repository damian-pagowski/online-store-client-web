import React from "react";
import logo from "../../assets/images/logo.png";
import "./Login.css";

function Login() {
  return (
    <div className="mx-auto mt-5" id="container-login">
      <div className="card" id="card-login">
        <img
          src={logo}
          className="card-img-top mx-auto"
          alt="..."
          id="logo-login"
        />
        <div className="card-body">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
