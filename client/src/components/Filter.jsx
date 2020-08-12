import React from "react";
import styled from "styled-components";

import { useShopContext } from "../context/ShopContext";

export default function Filter() {
  const {
    state: { items },
  } = useShopContext();

  return (
    <ButtonDiv>
      <label for="categories">Select a category</label>
      <CategoryFilter name="categories" id="categories">
        <option value="Fitness">Fitness</option>
        <option value="Gaming">Gaming</option>
        <option value="Health">Health</option>
        <option value="Pets">Pets</option>
      </CategoryFilter>
    </ButtonDiv>
  );
}

const ButtonDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #dee0df;
  padding: 10px 0px 0px 0px;
`;

const CategoryFilter = styled.select`
  /* border: solid red 2px; */
  grid-column-start: 1;

  width: 180px;
  height: 35px;
  margin: 10px 0px 0px 0px;

  background-color: #dee0df;
  border-radius: 5px;

  cursor: pointer;
`;
