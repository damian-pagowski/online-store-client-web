import React, { useState, useEffect, useCallback, useContext } from "react";
import Navbar from "./navbar/Navbar";
import Carousel from "./carousel/Carousel";
import ProductListWrapper from "./product-list-wrapper/ProductListWrapper";
import ProductDetails from "./product-details/ProductDetails";
import Footer from "./footer/Footer";
import Cart from "./cart/Cart";
import Login from "./login/Login";
import Register from "./register/Register";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ProductContext } from "../context/ProductContext";

const App = () => {
  const [filters, setFilters] = useState({ category: null, subcategory: null, search: null });
  const { handleLogin } = useContext(UserContext);
  const { loadProducts } = useContext(ProductContext);

  const resetResults = useCallback(() => {
    setFilters({ category: null, subcategory: null, search: null });
    listProductHandler();
  }, []);

  const listProductHandler = useCallback(() => {
    console.log("listProductHandler called - app", filters);

    const { category, subcategory, search } = filters;
    loadProducts(category, subcategory, search);
  }, [filters, loadProducts]);

  const searchHandler = useCallback((data) => {
    const { search } = data;
    setFilters(prevFilters => ({ ...prevFilters, search }));
    listProductHandler();
  }, [listProductHandler]);

  const filterHandler = useCallback((category, subcategory) => {
    setFilters(prevFilters => ({ ...prevFilters, category, subcategory }));
    listProductHandler();
  }, [listProductHandler]);

  useEffect(() => {
    try {
      const userProfile = localStorage.getItem("shop-user-profile");
      if (userProfile) {
        const data = JSON.parse(userProfile);
        handleLogin(data);
      }
    } catch (error) {
      console.error("Error parsing user profile from localStorage", error);
    }
  }, [handleLogin]);

  return (
    <Routes>
      <Route
        path="/*"
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
  );
};

const DefaultContainer = ({ searchHandler, filterHandler, listProductHandler, resetResults }) => {
  return (
    <div className="container" style={{ minWidth: '800px' }}>
      <Navbar />
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
                searchHandler={searchHandler} 
              />
            </div>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;