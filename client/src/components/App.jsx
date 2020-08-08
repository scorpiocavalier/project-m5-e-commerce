import React, { useState, useEffect } from "react";
import companies from "./companies";
import items from "./items";
import Shop from "./Shop";

function App() {
  const companiesArr = companies.map((item) => item);
  const itemsArr = items.map((item) => item);

  const duplicateCategoriesArr = itemsArr.map((item) => {
    return item.category;
  });

  const categoriesArr = [...new Set(duplicateCategoriesArr)];

  const productsOfACategory = itemsArr.filter(
    (item) => item.category === "Fitness"
  );

  console.log(productsOfACategory);

  return (
    <Shop />
    // <div>
    //   <ul>
    //     {productsOfACategory.map((item) => {
    //       return (
    //         <>
    //           <li>
    //             <img src={`${item.imageSrc}`} alt={`${item.name}`} />
    //             <p>{item.body_location}</p>
    //           </li>
    //         </>
    //       );
    //     })}
    //   </ul>
    // </div>
  );
}
export default App;
