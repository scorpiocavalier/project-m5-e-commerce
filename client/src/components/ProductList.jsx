import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
    <GridWrapper>
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
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  border: solid yellow 2px;
  display: grid;
  grid: auto / 1fr;
  gap: 30px 30px;
  padding: 30px;

  @media (min-width: 768px) {
    border: solid blue 2px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    border: solid red 2px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    border: solid green 2px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
