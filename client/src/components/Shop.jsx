import React from "react";
import styled from "styled-components";

import ProductList from "./ProductList";

export default () => {
  return (
    <Wrapper>
      {/* <Filter /> */}
      <ProductList />
      {/* <Pagination /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
