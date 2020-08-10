import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import NavItem from "./NavItem";
import NavList from "./NavList";

export default () => {
  return (
    <Wrapper>
      <StyledLink to="/">
        <h2>THE ARK PROJECT</h2>
      </StyledLink>
      <NavItem />
      <NavList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-left: 0.5rem;
`;

const StyledLink = styled(Link)`
  color: #eee;
  &:active {
    color: #eee;
  }
  &:visited {
    color: #eee;
  }
`;
