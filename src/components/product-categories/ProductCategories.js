import React from "react";
import "./ProductCategories.css";

function ProductCategoriesAccordion() {
  return (
    <div className="accordion" id="productCategoriesAccordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed category-name"
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
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#productCategoriesAccordion"
        >
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Laptops</li>
              <li className="list-group-item">Tablets</li>
              <li className="list-group-item">Servers</li>
              <li className="list-group-item">Peripherals</li>
              <li className="list-group-item">Accessories</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed category-name"
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
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#productCategoriesAccordion"
        >
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">PC</li>
              <li className="list-group-item">PS 4</li>
              <li className="list-group-item">PS 3</li>
              <li className="list-group-item">Xbox 360</li>
              <li className="list-group-item">Switch</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h2 className="mb-0">
            <button
              className="btn btn-link collapsed category-name"
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
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#productCategoriesAccordion"
        >
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Wise Phones</li>
              <li className="list-group-item">Smart Phones</li>
              <li className="list-group-item">Intelligent Phones</li>
              <li className="list-group-item">Hipster Phones</li>
              <li className="list-group-item">Other</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategoriesAccordion;
