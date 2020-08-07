import React, { useState, useEffect } from "react";
import companies from "./companies";
import items from "./items";

function App() {
  const companiesArr = companies.map((item) => item);
  const itemsArr = items.map((item) => item);

  const duplicateCategoriesArr = itemsArr.map((item) => {
    return item.category;
  });
  const categoriesArr = [...new Set(duplicateCategoriesArr)];
  console.log(itemsArr[0].imageSrc);
  return (
    <div>
      <ul>
        {itemsArr.map((item) => {
          console.log("ya", item.imageSrc);
          return (
            <li key={item.name}>
              {`${item.name}`}: <br></br>
              <img src={`${item.imageSrc}`} alt={`${item.name}`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
