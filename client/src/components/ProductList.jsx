import React from "react";

import Product from "./Product";
import { useShopContext } from "../context/ShopContext";

export default () => {
  const {
    state: { items },
  } = useShopContext();

  return (
    <>
      {items.map((item) => {
        return (
          <Product
            key={item.id}
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
    </>
  );
};
