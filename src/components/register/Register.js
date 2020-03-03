import React from "react";
import logo from "../../assets/images/logo.png";
import "./Register.css";
import { connect } from "react-redux";
import { handleRegister } from "../../action-creators/user-actions-creator";
import { Redirect, Link } from "react-router-dom";

class Register extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("login");
    // const {email, password} = this.state
    this.props.dispatch(handleRegister(this.state));
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { user } = this.props;

    if (user.id) {
      return <Redirect to="/" />;
    }
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
                <label for="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </div>

              <button className="btn btn-success" onClick={this.handleSubmit} id="register-btn">
                Register
              </button>
              <div class="w-100">
                <p class="text-right p-0">
                  Already have an account?
                  <Link to="/login" className="text-right w-100" id="link-to-login">
                    {" "}
                    login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    user
  };
}

export default connect(mapStateToProps)(Register);
