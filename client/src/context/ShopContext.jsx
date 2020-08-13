import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";

import { STATUS, setState } from "./actions";
import { shopReducer } from "./reducers";
import firebase from "../firebase/firebase";

// Create the shop context and initial state
const ShopContext = createContext();
const initialState = {
  status: STATUS.LOADING,
  items: null,
  companies: null,
  cart: [],
  itemIds: [],
};

// Custom hook for providing the ShopContext
export const useShopContext = () => useContext(ShopContext);

// This context provider will wrap the app
export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);
  const [category, setCategory] = useState(null);
  console.log("categories", category);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the list of items from the API
        // let res = await fetch(`/products`);
        // const items = await res.json();
        // Fetch the list of companies from the API
        // res = await fetch(`/companies`);
        // const companies = await res.json();

        const database = firebase.database();
        const itemsRef = database.ref("items");
        const companiesRef = database.ref("companies");

        const itemsSnapshot = await itemsRef.once("value");
        const items = (await itemsSnapshot.val()) || null;

        const companiesSnapshot = await companiesRef.once("value");
        const companies = (await companiesSnapshot.val()) || null;

        let itemIds = Object.keys(items);

        if (category) {
          itemIds = itemIds.filter((itemId) => {
            return items[itemId].category === category;
          });
        }
        // Create a new state
        const newState = {
          status: STATUS.IDLE,
          items,
          companies,
          itemIds,
        };

        // Pass the new state to the dispatch
        dispatch(setState(newState));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category]);

  return (
    <ShopContext.Provider value={{ state, dispatch, category, setCategory }}>
      {children}
    </ShopContext.Provider>
  );
};
