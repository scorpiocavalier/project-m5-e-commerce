import React from "react";
import { Route, Switch } from "react-router-dom";

import { useShopContext } from "../context/ShopContext";
import { STATUS } from "../context/actions";
import Spinner from "./Spinner";
import Error from "./Error";

import Home from "./Home";
import Shop from "./Shop";
import ProductDetails from "./ProductDetails";

// Render the content area based on status
export default () => {
  const {
    state: { status },
  } = useShopContext();

  switch (status) {
    case STATUS.IDLE:
      return (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Shop />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      );
    case STATUS.LOADING:
      return <Spinner />;
    case STATUS.ERROR:
      return <Error />;
    default:
      return <Error />;
  }
};
