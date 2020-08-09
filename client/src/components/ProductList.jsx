import React, { useState, useEffect } from "react";

import Product from "./Product";

export default () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/products`);
      const data = await res.json();
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {items &&
        items.map((item) => {
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
