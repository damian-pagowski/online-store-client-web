import React, { useEffect, useContext, useState } from "react";
import ProductListItem from "../product-list-item/ProductListItem";
import Categories from "../product-categories/Categories";
import { ProductContext } from "../../context/ProductContext";
import "./ProductListWrapper.css";

const ProductListWrapper = ({ filterHandler, resetResults, searchHandler }) => {
  const { state, loadProducts } = useContext(ProductContext);
  const { products, currency, loading, error } = state;

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const resetResultsHandler = (event) => {
    event.preventDefault();
    setSearch("");
    resetResults()
  }
  const searchChangeHandler = (event) => {
    const phrase = event.target.value;
    setSearch(phrase);
    searchHandler({ search: phrase }); 
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    setSearch((prevSearch) => {
      console.log("Search submitted with:", prevSearch);
      searchHandler({ search: prevSearch });
      return prevSearch;
    });
  };


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
          <div className="mx-auto order-0">
            <form
              className="form-inline my-2 my-lg-0"
              onSubmit={searchSubmitHandler}
            >
              <div className="input-group">
                <input type="text"
                  className="form-control"
                  id="searchInput"
                  value={search}
                  onChange={searchChangeHandler}
                  placeholder="Search" />
                <div className="input-group">
                </div>
                <div className="input-group">
                  <button
                    className="btn btn-outline-warning my-2 my-sm-0"
                    onClick={resetResultsHandler}
                  >
                    X
                  </button>
                </div>
              </div>
            </form>
          </div>
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