import React, { useEffect, useContext } from "react";
import ProductListItem from "../product-list-item/ProductListItem";
import Categories from "../product-categories/Categories";
import { ProductContext } from "../../context/ProductContext";
import "./ProductListWrapper.css";

const ProductListWrapper = ({ filterHandler, resetResults }) => {
  const { state, loadProducts } = useContext(ProductContext);
  const { products, currency, loading, error } = state;

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="product-list-container">
      <div className="product-list-grid">
        <div className="item1">
          <Categories
            filterHandler={filterHandler}
            resetResults={resetResults}
          />
        </div>
        <div className="item2">
          {loading && <p>Loading products...</p>}
          {error && <p className="alert alert-danger">{error}</p>}
          <ul className="list-unstyled">
            {products && products.length > 0 ? (
              products.map((productData) => (
                <ProductListItem
                  data={productData}
                  currency={currency}
                  key={productData.productId}
                />
              ))
            ) : (
              !loading && (
                <div className="alert alert-danger" role="alert">
                  Sorry, there are no products matching your criteria
                  <a onClick={resetResults} className="alert-link" href="/">
                    {" "}Show All
                  </a>
                </div>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductListWrapper;