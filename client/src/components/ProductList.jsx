import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Product from "./Product";
import { useShopContext } from "../context/ShopContext";

export default () => {
  const {
    state: { items },
  } = useShopContext();

  return (
    <GridWrapper>
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
