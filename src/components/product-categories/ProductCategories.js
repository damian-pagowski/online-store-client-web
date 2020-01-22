import React from "react";
import "./ProductCategories.css";

function ProductCategoriesAccordion() {
  return (
    <div class="accordion" id="productCategoriesAccordion">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button
              class="btn btn-link collapsed category-name"
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Computers
            </button>
          </h2>
        </div>

        <div
          id="collapseOne"
          class="collapse show"
          aria-labelledby="headingOne"
          data-parent="#productCategoriesAccordion"
        >
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">Laptops</li>
              <li class="list-group-item">Tablets</li>
              <li class="list-group-item">Servers</li>
              <li class="list-group-item">Peripherals</li>
              <li class="list-group-item">Accessories</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button
              class="btn btn-link collapsed category-name"
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Video Games
            </button>
          </h2>
        </div>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#productCategoriesAccordion"
        >
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">PC</li>
              <li class="list-group-item">PS 4</li>
              <li class="list-group-item">PS 3</li>
              <li class="list-group-item">Xbox 360</li>
              <li class="list-group-item">Switch</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button
              class="btn btn-link collapsed category-name"
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Cellphones
            </button>
          </h2>
        </div>
        <div
          id="collapseThree"
          class="collapse"
          aria-labelledby="headingThree"
          data-parent="#productCategoriesAccordion"
        >
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">Wise Phones</li>
              <li class="list-group-item">Smart Phones</li>
              <li class="list-group-item">Intelligent Phones</li>
              <li class="list-group-item">Hipster Phones</li>
              <li class="list-group-item">Other</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategoriesAccordion;
