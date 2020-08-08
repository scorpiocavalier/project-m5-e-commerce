import React, { useState, useEffect } from "react";
// import companies from "./companies";
import Shop from "./Shop";
import { BrowserRouter, Route } from "react-router-dom";

import companies from "../Test Data/companies";
import items from "../Test Data/test_items";

//components
import HomePage from "./Pages/HomePage/HomePage";
import ProductPage from "./Pages/ProductPage";

function App() {
  // const companiesArr = companies.map((item) => item);
  const itemsArr = items.map((item) => item);

  const duplicateCategoriesArr = itemsArr.map((item) => {
    return item.category;
  });

  const categoriesArr = [...new Set(duplicateCategoriesArr)];

  const productsOfACategory = itemsArr.filter(
    (item) => item.category === "Fitness"
  );

  //for closing sidebar
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  //for opening side bar
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="index.html">Ark</a>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin.html">SignIn</a>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categoris</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          {/* category on sidebar */}
          <ul>
            {categoriesArr.map((item) => {
              return (
                <li>
                  <a href="index.html">{item}</a>
                </li>
              );
            })}
          </ul>
        </aside>

        <main className="main">
          <div className="content">
            <Route path="/products">
              <Shop />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </div>
        </main>

        <footer className="footer">
          All rights Reserved <span>&copy;</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}
export default App;
