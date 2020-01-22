import React from "react";
import "./Cart.css";
import CartItem from "../cart-item/CartItem";
import CartSummary from "../cart-summary/CartSummary";

const productData = {
  name: "U-Book Elite Laptop",
  description: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
    scelerisque ante sollicitudin. Cras purus odio, vestibulum
    in vulputate at, tempus viverra turpis. Fusce condimentum
    nunc ac nisi vulputate fringilla. Donec lacinia congue felis
    in faucibus.`,
  image: "images/products/laptop.webp",
  price: "$1999.99",
};

const cartData = {
  itemsCount: 3,
  total: "$9,999.99",
};
function Cart() {
  return (
    <div class="container">
      <div class="grid-container">
        <div class="item2">
          <ul>
            <CartItem data={productData} />
          </ul>
        </div>
        <div class="item1">
          <CartSummary data={cartData} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
