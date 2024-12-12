import React, { createContext, useReducer, useCallback, useContext, useEffect } from "react";
import apiCart from "../api/cartAPI";
import { UserContext } from "./UserContext";

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
      return { 
        ...state, 
        cartItems: action.payload, 
        loading: false 
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: action.payload,
      };

    case 'SET_LOADING':
      return { 
        ...state, 
        loading: true 
      };

    case 'SET_ERROR':
      return { 
        ...state, 
        error: action.payload, 
        loading: false 
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { user } = useContext(UserContext); 

  const getAuthHeader = useCallback(() => {
    if (!user?.token) {
      console.warn("User token is missing. Cannot generate Authorization header.");
      return null;
    }
    return `Bearer ${user.token}`;
  }, [user]);

  const getCart = useCallback(async () => {
    const authHeader = getAuthHeader();
    if (!authHeader) {
      console.warn('User token is not ready. Delaying getCart...');
      return;
    }
    try {
      const cartData = await apiCart.getCart(authHeader);
      dispatch({ type: 'SET_CART', payload: cartData });
      console.log("CART FROM API: " + JSON.stringify(cartData))
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Error fetching cart data' });
      console.error("Error fetching cart data", error);
    }
  }, [getAuthHeader]);

  const addToCart = useCallback(async (data) => {
    const authHeader = getAuthHeader();
    if (!authHeader) return;

    dispatch({ type: 'SET_LOADING' });

    try {
      const updatedCart = await apiCart.addItem(data.productId, 1, authHeader); 
      dispatch({ type: 'SET_CART', payload: updatedCart });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Error adding to cart' });
      console.error('Error adding to cart', error);
    }
  }, [getAuthHeader]);


  const removeFromCart = useCallback(async (data) => {
    const authHeader = getAuthHeader();
    if (!authHeader) return;

    dispatch({ type: 'SET_LOADING' });
    console.log("DELETE CART ITEM"  +JSON.stringify(data))
    try {
      const updatedCart = await apiCart.addItem(data.productId, -data.quantity, authHeader);
      dispatch({ type: 'SET_CART', payload: updatedCart });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Error removing from cart' });
      console.error('Error removing from cart', error);
    }
  }, [getAuthHeader]);


  const clearCart = useCallback(async () => {
    const authHeader = getAuthHeader();
    if (!authHeader) return;

    dispatch({ type: 'SET_LOADING' });

    try {
      await apiCart.deleteCart(authHeader);
      dispatch({ type: 'SET_CART', payload: [] });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Error clearing cart' });
      console.error('Error clearing cart', error);
    }
  }, [getAuthHeader]);

  return (
    <CartContext.Provider 
      value={{ 
        state, 
        dispatch, 
        getCart, 
        addToCart, 
        removeFromCart, 
        clearCart 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};