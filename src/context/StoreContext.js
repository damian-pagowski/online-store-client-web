import React, { createContext, useReducer } from 'react';

const initialState = {
    cart: [],
    user: null,
    products: [],
    categories: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        // case 'SET_USER':
        //     return { ...state, user: action.payload };
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.payload] };
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
        case 'SET_PRODUCTS':
            return { ...state, products: action.payload };
        case 'SET_CATEGORIES':
            return { ...state, categories: action.payload };
        default:
            return state;
    }
};

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};