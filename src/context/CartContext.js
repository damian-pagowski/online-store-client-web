import React, { createContext, useReducer, useCallback } from "react";
import apiCart from "../api/cartAPI";

export const CartContext = createContext();

const initialState = {
  cartItems: [],
  loading: false,
  error: null,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        cartItems: action.payload,
        loading: false,
      };

    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(item => item.productId === action.payload.productId);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.productId === action.payload.productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { 
        ...state, 
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] 
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.productId !== action.payload.productId),
      };

    case 'SET_LOADING':
      return { ...state, loading: true };

    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Fetch cart from API when app loads
  const getCart = useCallback(async (authHeader) => {
    dispatch({ type: 'SET_LOADING' });

    try {
      const cartData = await apiCart.getCart(authHeader);
      dispatch({ type: 'SET_CART', payload: cartData });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Error fetching cart data' });
      console.error("Error fetching cart data", error);
    }
  }, []);

  const addToCart = useCallback(async (product, authHeader) => {
    try {
      const updatedCart = await apiCart.addItem(product.productId, 1, authHeader);
      dispatch({ type: 'SET_CART', payload: updatedCart });
    } catch (error) {
      console.error('Error adding to cart', error);
    }
  }, []);

  const removeFromCart = useCallback(async (product, authHeader) => {
    try {
      const updatedCart = await apiCart.addItem(product.productId, -1, authHeader);
      dispatch({ type: 'SET_CART', payload: updatedCart });
    } catch (error) {
      console.error('Error adding to cart', error);
    }
  }, []);

  return (
    <CartContext.Provider value={{ state, getCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};