import React, { createContext, useReducer, useCallback } from "react";
import api from "../api/productAPI";

export const ProductContext = createContext();

const initialState = {
  products: [],
  currency: 'EUR',
  loading: true,
  error: null
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'LOAD_PRODUCTS_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'UPDATE_CURRENCY':
      return { ...state, currency: action.payload };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const loadProducts = useCallback(async (category, sub, search) => {
    try {
      const data = await api.products(category, sub, search);
      dispatch({ type: 'LOAD_PRODUCTS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'LOAD_PRODUCTS_ERROR', payload: 'Failed to load products' });
    }
  }, []);

  const updateCurrency = (currency) => {
    dispatch({ type: 'UPDATE_CURRENCY', payload: currency });
  };

  return (
    <ProductContext.Provider value={{ state, loadProducts, updateCurrency }}>
      {children}
    </ProductContext.Provider>
  );
};