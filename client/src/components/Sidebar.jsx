import React from "react";

import items from "../Test Data/test_items";

export default () => {
  const itemsArr = items.map((item) => item);

  const duplicateCategoriesArr = itemsArr.map((item) => {
    return item.category;
  });

  const categoriesArr = [...new Set(duplicateCategoriesArr)];

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <aside className="sidebar">
      <h3>Shopping Categoris</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>
        x
      </button>

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
  );
};
