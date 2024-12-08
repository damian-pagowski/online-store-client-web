import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./navbar/Navbar";
import Carousel from "./carousel/Carousel";
import ProductListWrapper from "./product-list-wrapper/ProductListWrapper";
import Footer from "./footer/Footer";
import Cart from "./cart/Cart";
import Login from "./login/Login";
import Register from "./register/Register";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./loader/Loader";

import { _getCart } from "../action-creators/cart-actions-creator";
import PaymentResult from "./payment/PaymentResult";
import { logIn } from "../actions/users-actions";
import { _getProducts } from "../action-creators/products-actions-creator";

const App = () => {
  const [category, setCategory] = useState(null);
  const [subcategory, setSubcategory] = useState(null);
  const [search, setSearch] = useState(null);
  const loadingBar = useSelector((state) => state.loadingBar);
  const dispatch = useDispatch();

  const resetResults = useCallback(() => {
    setCategory(null);
    setSubcategory(null);
    setSearch(null);
    listProductHandler();
  }, []);

  const listProductHandler = useCallback(() => {
    console.log("listProductHandler called - app");
    console.log("state: ", { category, subcategory, search });
    dispatch(_getProducts(category, subcategory, search));
  }, [category, subcategory, search, dispatch]);

  const searchHandler = useCallback((data) => {
    const { search } = data;
    console.log("Search: ", search);
    setSearch(search);
    listProductHandler();
  }, [listProductHandler]);

  const filterHandler = useCallback((category, subcategory) => {
    console.log("FilterHandler called with: ", { category, subcategory });
    setCategory(category);
    setSubcategory(subcategory);
    listProductHandler();
  }, [listProductHandler]);

  useEffect(() => {
    dispatch(_getCart());

    try {
      const userProfile = localStorage.getItem("shop-user-profile");
      if (userProfile) {
        const data = JSON.parse(userProfile);
        dispatch(logIn({ ...data }));
      }
    } catch (error) {
      console.error("Error parsing user profile from localStorage", error);
    }
  }, [dispatch]);

  return (
    <>
      {(loadingBar?.default ?? 0) >= 1 ? (
        <Loader />
      ) : (
        <Routes>
          <Route
            path="/login"
            element={<LoginContainer />}
          />
          <Route
            path="/register"
            element={<LoginContainer />}
          />
          <Route
            path="*"
            element={
              <DefaultContainer
                searchHandler={searchHandler}
                filterHandler={filterHandler}
                listProductHandler={listProductHandler}
                resetResults={resetResults}
              />
            }
          />
        </Routes>
      )}
    </>
  );
};

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

const DefaultContainer = ({ searchHandler, filterHandler, listProductHandler, resetResults }) => {
  const loadingBar = useSelector((state) => state.loadingBar);

  return (loadingBar?.default ?? 0) >= 1 ? (
    <Loader />
  ) : (
    <div>
      <Navbar searchHandler={searchHandler} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Carousel />
              <ProductListWrapper
                listProductHandler={listProductHandler}
                filterHandler={filterHandler}
                resetResults={resetResults}
              />
            </div>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout-success"
          element={<PaymentResult data={dataPaymentSuccess} />}
        />
        <Route
          path="/checkout-fail"
          element={<PaymentResult data={dataPaymentFailed} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

const LoginContainer = () => {
  const loadingBar = useSelector((state) => state.loadingBar);

  return (loadingBar?.default ?? 0) >= 1 ? (
    <Loader />
  ) : (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;