import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Wrapper>
      All rights Reserved <span>&copy;</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
