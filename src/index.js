import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers/root-reducer";
import middleware from "./middleware/root-middleware";
import { BrowserRouter } from "react-router-dom";
const store = createStore(reducer, middleware);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
