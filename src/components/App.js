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
import { _getProducts } from "../action-creators/products-actions-creator";

class App extends React.Component {
  state = {
    category: null,
    subcategory: null,
    search: null
  };

  resetResults = () => {
    Promise.all([
      this.setState({
        ...this.state,
        ...{
          category: null,
          subcategory: null,
          search: null
        }
      })
    ]).then(() => {
      this.listProductHandler();
    });
  };

  listProductHandler = () => {
    console.log(" listProductHandler called - app");
    console.log("state: " + JSON.stringify(this.state));
    const { category, subcategory, search } = this.state;
    this.props.dispatch(_getProducts(category, subcategory, search));
  };

  searchHandler = data => {
    const { search } = data;
    console.log("Search : " + search);
    Promise.all([this.setState({ ...this.state, search })]).then(() => {
      console.log(">> searchHandler called - app");
      console.log("state: " + JSON.stringify(this.state));
      this.listProductHandler();
      console.log("state: " + JSON.stringify(this.state));
    });
  };

  filterHandler = (category, subcategory) => {
    Promise.all([this.setState({ ...this.state, category, subcategory })]).then(
      () => {
        console.log(">> filterHandler called - app");
        console.log("state: " + JSON.stringify(this.state));
        this.listProductHandler();
        console.log("state: " + JSON.stringify(this.state));
      }
    );
  };

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
              <DefaultContainer
                loadingBar={this.props.loadingBar}
                searchHandler={this.searchHandler}
                filterHandler={this.filterHandler}
                listProductHandler={this.listProductHandler}
                resetResults={this.resetResults}
              />
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
      <Navbar searchHandler={props.searchHandler} />
      <Route
        exact
        path="/"
        render={() => (
          <div>
            <Carousel />
            <ProductListWrapper
              listProductHandler={props.listProductHandler}
              filterHandler={props.filterHandler}
              resetResults={props.resetResults}
            />
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
