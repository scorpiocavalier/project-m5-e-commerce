import React, { createContext, useContext, useReducer, useEffect } from "react";

import { STATUS, setState } from "./actions";
import { shopReducer } from "./reducers";

// Create the shop context and initial state
const ShopContext = createContext();
const initialState = {
  status: STATUS.LOADING,
  items: null,
  companies: null,
  cart: [],
};

// Custom hook for providing the ShopContext
export const useShopContext = () => useContext(ShopContext);

// This context provider will wrap the app
export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const fetchData = async () => {
    try {
      // Fetch the list of items from the API
      let res = await fetch(`/products`);
      const items = await res.json();
      // Fetch the list of companies from the API
      res = await fetch(`/companies`);
      const companies = await res.json();
      // Create a new state
      const newState = {
        status: STATUS.IDLE,
        items,
        companies
      };
      // Pass the new state to the dispatch
      dispatch(setState(newState));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};
