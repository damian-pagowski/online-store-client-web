import React, { useEffect, useContext, useState } from "react";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";
import { UserContext } from "../../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { state: { cartItems }, getCart, clearCart } = useContext(CartContext);
  const { state: { products }, loadProductById } = useContext(ProductContext);
  const [cartItemsDetails, setCartItemsDetails] = useState([]);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching cart from API...");
    getCart();
  }, [getCart]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      if (!cartItems || cartItems.length === 0) {
        setCartItemsDetails([]);
        return;
      }

      const productIds = Object.keys(cartItems || {});
      const productPromises = productIds.map(async (productId) => {
        let product = products.find(p => p.productId === Number(productId));
        if (!product) {
          product = await loadProductById(productId);
        }
        return { ...product, quantity: cartItems[productId] };
      });

      try {
        const cartProductDetails = await Promise.all(productPromises);
        setCartItemsDetails(cartProductDetails);
      } catch (error) {
        console.error("Error fetching cart product details", error);
      }
    };

    if (cartItems) {
      fetchCartProducts();
    }
  }, [cartItems, products, loadProductById]);

  // ** note for myself in x years: FAKE checkout for testing only!!!**
  const handleCheckout = () => {
    clearCart();
    setCheckoutComplete(true); 
  };

  if (cartItems === null) {
    return (
      <div className="cart-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-grid-container">
        <div className="item2">
          <ul>

            {
              cartItemsDetails.length > 0 ? (
                <>
                  {cartItemsDetails.map((item) => (
                    <CartItem data={item} currency="EUR" key={item.productId} />
                  ))}
                  <h2 className="text-center">
                    TOTAL: EUR {Math.round(cartItemsDetails.reduce((total, item) => total + item.price * item.quantity, 0) * 100) / 100}
                  </h2>
                </>
              ) :  checkoutComplete ? (
                <div className="alert alert-info mt-4" role="alert">
                  <h2 className="text-center">Your items will be delivered ASAP!</h2>
                  <Link to="/" className="btn btn-primary mt-3">Return to Store</Link>
                </div>
                ) : (
                <div className="alert alert-danger mt-5" role="alert">
                  <h2 className="text-center">Cart Empty</h2>
                  <Link to="/" className="btn btn-primary mt-3">Return to Store</Link>
                </div>
              )}
          </ul>
        </div>

        <div className="item1 text-center">

          {
            cartItemsDetails.length > 0 &&(
          user?.token ? (
            <button 
              className="btn btn-success mt-4" 
              onClick={handleCheckout}
            >
              Checkout Now
            </button>
          ) : (
            <button 
              className="btn btn-info mt-4" 
              onClick={() => navigate("/register")}
            >
              Please Register
            </button>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default Cart;