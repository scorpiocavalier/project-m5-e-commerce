import React from "react";
import styled from "styled-components";

import Product from "./Product";
import { useShopContext } from "../context/ShopContext";
import SearchBar from "./SearchBar";

export default () => {
  const {
    state: { items },
  } = useShopContext();

  return (
    <GridWrapper>
      <SearchBar items={items} />
      {items.map((item) => (
        <Product key={item.id} item={item} />
      ))}
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
