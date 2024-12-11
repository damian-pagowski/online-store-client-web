import React from "react";
import "./index.css";
import App from "./components/App";
import { CartProvider } from './context/CartContext';
import { CategoriesProvider } from './context/CategoriesContext';
import { ProductProvider } from './context/ProductContext';
import { StoreProvider } from './context/StoreContext';
import { UserProvider } from './context/UserContext';

import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <UserProvider>
      <StoreProvider>
        <ProductProvider>
          <CartProvider>
            <CategoriesProvider>

              <Router>
                <App />
              </Router>
            </CategoriesProvider>

          </CartProvider>

        </ProductProvider>

      </StoreProvider>
    </UserProvider>
  </React.StrictMode>
);