import React from "react";
import styled from "styled-components";

import Cover from "./Cover";
import Dummy from "./Dummy";

export default () => {
  return (
    <Wrapper>
      <Cover />
      <Dummy className="dummy-1" />
      <Dummy />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
