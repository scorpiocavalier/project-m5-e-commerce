import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default () => {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  return (
    <Wrapper>
      <StyledLink to="/">
        <h2>THE ARK PROJECT</h2>
      </StyledLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledLink = styled(Link)`
  color: white;
  &:active {
    color: white;
  }
  &:visited {
    color: white;
  }
`;