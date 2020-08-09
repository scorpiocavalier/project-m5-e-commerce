import React from "react";
import styled from "styled-components";

import Cover from "./Cover";

export default () => {
  return (
    <Wrapper>
      <Cover />
      <SomeComponent>Some Component</SomeComponent>
      <SomeComponent>Some Component</SomeComponent>
      <SomeComponent>Some Component</SomeComponent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SomeComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ddd;
  border: 1px solid #fff;
`;