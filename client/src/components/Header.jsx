import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default () => {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };

  return (
    <Wrapper>
      {/* <div className="brand"> */}
      {/* <button onClick={openMenu}>&#9776;</button> */}
      <Link to="/">Ark</Link>
      {/* </div> */}
      {/* <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">SignIn</a>
      </div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
