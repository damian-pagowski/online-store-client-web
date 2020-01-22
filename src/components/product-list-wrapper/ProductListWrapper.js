import React from "react";
import ProductListItem from "../product-list-item/ProductListItem";
import ProductCategoriesAccordion from "../product-categories/ProductCategories";
import "./ProductListWrapper.css";
 
const productInfo = {
  name: "Another Hipster Game",
  image: "images/products/game.webp",
  description: `Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
scelerisque ante sollicitudin. Cras purus odio, vestibulum
in vulputate at, tempus viverra turpis. Fusce condimentum
nunc ac nisi vulputate fringilla. Donec lacinia congue felis
in faucibus.`,
  rating: "8/10",
  price: "$99.99",
};

function ProductListWrapper() {
  return (
    <div class="container">
      <div class="grid-container">
        <div class="item1">
          <ProductCategoriesAccordion />
        </div>
        <div class="item2">
          <ul class="list-unstyled">
            <ProductListItem data={productInfo} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductListWrapper;
