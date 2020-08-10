import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ShopProvider } from './context/ShopContext'

ReactDOM.render(
  <ShopProvider>
    <App />
  </ShopProvider>,
  document.getElementById("root")
);
