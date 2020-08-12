import React from "react";
import styled from "styled-components";
import Filter from "./Filter";

import Product from "./Product";
import { useShopContext } from "../context/ShopContext";

export default () => {
  const {
    state: { items },
  } = useShopContext();
  console.log("items", items[0].category);

  // items.filter()

  return (
    <>
      <FilterDiv>
        <Filter>Choose A Category</Filter>
      </FilterDiv>
      <GridWrapper>
        {items.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </GridWrapper>
    </>
  );
};

const FilterDiv = styled.div`
  border-bottom: 1px solid #dee0df;
  /* border: solid green 2px; */

  height: 150px;
  /* width: 100%; */

  display: grid;
  grid: auto / 1fr;
  gap: 50px 30px;

  margin: 100px 30px 0px 30px;
  padding: 30px;

  align-items: center;
  justify-items: center;

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

const GridWrapper = styled.div`
  display: grid;
  grid: auto / 1fr;
  /* grid-template-columns: 1fr;
  grid-template-rows: 50px auto; */
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
