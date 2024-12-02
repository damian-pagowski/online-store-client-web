import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "../product-list-item/ProductListItem";
import ProductCategoriesAccordion from "../product-categories/ProductCategories";
import "./ProductListWrapper.css";
import { _getCart } from "../../action-creators/cart-actions-creator";

const ProductListWrapper = ({ listProductHandler, filterHandler, resetResults }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => Object.values(state.products));
  const currency = useSelector((state) => state.cart.currency);

  useEffect(() => {
    dispatch(_getCart());
    listProductHandler();
  }, [dispatch, listProductHandler]);

  return (
    <div className="product-list-container">
      <div className="product-list-grid">
        <div className="item1">
          <ProductCategoriesAccordion
            listProductHandler={listProductHandler}
            filterHandler={filterHandler}
            resetResults={resetResults}
          />
        </div>
        <div className="item2">
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
              <div className="alert alert-danger" role="alert">
                Sorry, there are no products matching your criteria
                <a onClick={resetResults} className="alert-link">
                  {" "}Show All
                </a>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductListWrapper;