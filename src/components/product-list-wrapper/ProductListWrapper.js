import React from "react";
import ProductListItem from "../product-list-item/ProductListItem";
import ProductCategoriesAccordion from "../product-categories/ProductCategories";
import "./ProductListWrapper.css";
import { connect } from "react-redux";
import { _getProducts } from "../../action-creators/products-actions-creator";
import { _getCart } from "../../action-creators/cart-actions-creator";

class ProductListWrapper extends React.Component {
  componentDidMount = () => {
    this.props.dispatch(_getCart());
    this.props.dispatch(_getProducts());
  };
  render() {
    const products = Object.values(this.props.products);
    const currency = this.props.currency;
    console.log(">> products : " + JSON.stringify(products));

    return (
      <div className="product-list-container">
        <div className="product-list-grid">
          <div className="item1">
            <ProductCategoriesAccordion />
          </div>
          <div className="item2">
            <ul className="list-unstyled">
              {products && products.length > 0 ? (
                products.map((productData, i) => (
                  <ProductListItem
                    data={productData}
                    currency={currency}
                    key={productData.productId}
                  />
                ))
              ) : (
                <div className="alert alert-danger" role="alert">
                  Sorry, there are no products matching your criteria
                  <a href="#" className="alert-link">
                    {" "}
                    Show All
                  </a>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ products, cart }) {
  const currency = cart.currency;
  return {
    products,
    currency,
  };
}

export default connect(mapStateToProps)(ProductListWrapper);
