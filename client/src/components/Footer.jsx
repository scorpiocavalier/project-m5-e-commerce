import React from "react";
import styled from "styled-components";

export default () => {
  return (
    <Wrapper>
      <Copyright>&copy; 2020 The ARK Project. All rights reserved.</Copyright>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Copyright = styled.span`
  font-size: 14px;
  color: white;
`;
