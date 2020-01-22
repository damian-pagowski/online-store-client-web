import React from "react";
// import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import ProductListWrapper from "./components/product-list-wrapper/ProductListWrapper";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
function App() {
  return (
    <div>
      <Navbar />
      {/* <Carousel />
      <ProductListWrapper /> */}
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
