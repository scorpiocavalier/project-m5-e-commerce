import React from "react";
import { Route } from "react-router-dom";

import { useShopContext } from "../context/ShopContext";
import { STATUS } from "../context/actions";
import Spinner from "./Spinner";
import Error from "./Error";

import Home from "./Home";
import SearchBar from "./SearchBar";
import Shop from "./Shop";
import Cart from "./Cart";
import PhotoGallary from "./PhotoGallary";

// Render the content area based on status
export default () => {
  const {
    state: { status },
  } = useShopContext();

  switch (status) {
    case STATUS.IDLE:
      return (
        <>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Shop />
          </Route>
          <Route path="/search">
            <SearchBar />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/photo">
            <PhotoGallary />
          </Route>
        </>
      );
    case STATUS.LOADING:
      return <Spinner />;
    case STATUS.ERROR:
      return <Error />;
    default:
      return <Error />;
  }
};
