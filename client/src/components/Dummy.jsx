import React from "react";
import styled from "styled-components";

export default () => {
  return <SomeComponent>Some Component</SomeComponent>;
};

const SomeComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ddd;
  border: 1px solid #fff;
`;
