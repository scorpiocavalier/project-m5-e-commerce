import React, { useRef } from "react";
import styled from "styled-components";

import useIntersectionObserver from "../hooks/useIntersectionObserver";

export default () => {
  const targetRef = useRef();
  useIntersectionObserver(targetRef);

  return <SomeComponent ref={targetRef}>Some Component</SomeComponent>;
};

const SomeComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ddd;
  border: 1px solid #fff;
`;
