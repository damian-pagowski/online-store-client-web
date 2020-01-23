import React from "react";
// import Login from "./components/login/Login";
import Navbar from "./navbar/Navbar";
import Carousel from "./carousel/Carousel";
import ProductListWrapper from "./product-list-wrapper/ProductListWrapper";
import Footer from "./footer/Footer";
import Cart from "./cart/Cart";
import Login from "./login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { _createCart } from "../action-creators/cart-actions-creator";
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(_createCart());
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    );
  }
}

const DefaultContainer = props => (
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
    <Footer />
  </div>
);

const LoginContainer = props => (
  <div className="App">
    <div className="container">
      <Route path="/login" component={Login} />
    </div>
  </div>
);
export default connect()(App);

// export default App;
