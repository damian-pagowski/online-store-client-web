import React from "react";
// import Login from "./components/login/Login";
import Navbar from "./navbar/Navbar";
import Carousel from "./carousel/Carousel";
import ProductListWrapper from "./product-list-wrapper/ProductListWrapper";
import Footer from "./footer/Footer";
import Cart from "./cart/Cart";
import Login from "./login/Login";
import Register from "./register/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "./loader/Loader";

import { _getCart } from "../action-creators/cart-actions-creator";
import PaymentResult from "./payment/PaymentResult";
import { logIn } from "../actions/users-actions";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(_getCart());
    const userProfile = localStorage.getItem("shop-user-profile");
    if (userProfile) {
      const data = JSON.parse(userProfile);
      this.props.dispatch(logIn({ ...data }));
    }
  }

  render() {
    console.log("LOADING >> " + this.props.loadingBar.default);

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/login"
            render={() => <LoginContainer loadingBar={this.props.loadingBar} />}
          />
          <Route
            exact
            path="/register"
            render={() => <LoginContainer loadingBar={this.props.loadingBar} />}
          />
          <Route
            render={() => (
              <DefaultContainer loadingBar={this.props.loadingBar} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

const dataPaymentSuccess = {
  title: "Purchase was successful",
  message: "Your item will be sent to you within 48 hours.",
  icon: "fa-check-circle",
  backUrl: "/",
  backText: "Back to Shop"
};
const dataPaymentFailed = {
  title: "Payment Failed!",
  message: "Please try again later",
  backUrl: "/cart",
  icon: "fa-warning",
  backText: "Back to Cart"
};

const DefaultContainer = props =>
  props.loadingBar && props.loadingBar.default >= 1 ? (
    <Loader />
  ) : (
    <div>
      <Navbar />
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <Carousel />
            <ProductListWrapper />
          </div>
        )}
      />
      <Route path="/cart" component={Cart} />
      <Route
        path="/checkout-success"
        render={() => <PaymentResult data={dataPaymentSuccess} />}
      />
      <Route
        path="/checkout-fail"
        render={() => <PaymentResult data={dataPaymentFailed} />}
      />
      <Footer />
    </div>
  );

const LoginContainer = props =>
  props.loadingBar && props.loadingBar.default >= 1 ? (
    <Loader />
  ) : (
    <div className="App">
      <div className="container">
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </div>
  );

function mapStateToProps({ loadingBar }) {
  return {
    loadingBar
  };
}

export default connect(mapStateToProps)(App);
