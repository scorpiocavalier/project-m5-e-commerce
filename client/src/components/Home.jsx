import React from "react";
import styled from "styled-components";

import Cover from "./Cover";

export default () => {
  return (
    <Wrapper>
      <Cover />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;
