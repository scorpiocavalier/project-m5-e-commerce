import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default () => {
  return (
    <Wrapper>
      <Header>
        <Link to="/" style={{ color: "white" }}>
          SignIn
        </Link>
      </Header>
      <Cart>
        <Link to="/" style={{ color: "white" }}>
          Cart
        </Link>
      </Cart>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Header = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 0.5rem;
`;
const Cart = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
  font-weight: bold;
`;
