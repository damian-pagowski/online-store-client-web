import React, { useEffect, useContext, useState } from "react";
import CartItem from "../cart-item/CartItem";
import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";
import "./Cart.css";

const Cart = () => {
  const { state: { cartItems }, getCart } = useContext(CartContext);
  const { state: { products }, loadProductById } = useContext(ProductContext);
  const [cartItemsDetails, setCartItemsDetails] = useState([]);

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
          {cartItemsDetails.length > 0 ? (
            <>
              {cartItemsDetails.map((item) => (
                <CartItem data={item} currency="EUR" key={item.productId} />
              ))}
                <h2 className="text-center">
                  TOTAL: EUR {Math.round(cartItemsDetails.reduce((total, item) => total + item.price * item.quantity, 0) * 100) / 100}
                </h2>
            </>
          ) : (
            <div className="alert alert-danger mt-5" role="alert">
              <h2 className="text-center">Cart Empty</h2>
            </div>
          )}
        </ul>
      </div>
      <div className="item1">
        
      </div>
    </div>
  </div>
  );
};

export default Cart;