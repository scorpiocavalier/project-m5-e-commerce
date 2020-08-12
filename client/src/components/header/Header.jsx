import React from "react";
import styled from "styled-components";

import Brand from "./Brand";
import Navigation from "./Navigation";

export default () => {
  return (
    <Navbar>
      <Brand />
      <Navigation />
    </Navbar>
  );
};

const Navbar = styled.nav`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: transparent;
`;
