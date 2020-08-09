import React from "react";

import Product from "./Product";
import testItems from "../Test Data/test_items";

export default () => {
  // const {
  //   imageSrc,
  //   name,
  //   price,
  //   numInStock,
  //   category,
  //   body_location,
  //   companyId,
  // } = testItems;

  return (
    <div>
      {testItems.map((item) => {
        return (
          // console.log("Product List Level Company", testItems.companyId);
          <Product
            key={item.name}
            imageSrc={item.imageSrc}
            name={item.name}
            price={item.price}
            numInStock={item.numInStock}
            category={item.category}
            body_location={item.body_location}
            companyId={item.companyId}
          />
        );
      })}
    </div>
  );
}
