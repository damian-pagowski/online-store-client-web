import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/root-reducer";
import middleware from "./middleware/root-middleware";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client"; // Correct import from react-dom/client


const store = createStore(reducer, middleware);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);