<<<<<<< HEAD
import React from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> b45de235706997f028fbdf0eed291f36b9faa8fd
import styled from "styled-components";

import Product from "./Product";
import { useShopContext } from "../context/ShopContext";

export default () => {
  const {
    state: { items },
  } = useShopContext();

  return (
    <GridWrapper>
<<<<<<< HEAD
      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
=======
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
>>>>>>> b45de235706997f028fbdf0eed291f36b9faa8fd
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: grid;
  grid: auto / 1fr;
  gap: 50px 30px;
  padding: 30px;
  margin: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
