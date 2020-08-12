import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ArkLogo from "../assets/logo/ark-logo.png";
import ArkLogoInverted from "../assets/logo/ark-logo-inverted.png";

const Brand = () => {
  return (
    <StyledBrand>
      <StyledLink to="/">
        <Logo src={ArkLogo} alt="Ark Logo" />
        <BrandName>THE ARK PROJECT</BrandName>
      </StyledLink>
    </StyledBrand>
  );
};

const Burger = ({ toggleMenu, active }) => {
  return (
    <StyledBurger onClick={toggleMenu}>
      <Line1 active={active} />
      <Line2 active={active} />
      <Line3 active={active} />
    </StyledBurger>
  );
};

const Links = ({ toggleMenu, active }) => {
  return (
    <StyledLinks active={active} onClick={toggleMenu}>
      <DropdownLink to="/products">Shop</DropdownLink>
      <DropdownLink to="/cart">Cart</DropdownLink>
      <DropdownLink to="/sign-in">Sign In</DropdownLink>
    </StyledLinks>
  );
};

export default () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive((prevValue) => !prevValue);
  };

  return (
    <Nav>
      <Brand />
      <Burger toggleMenu={toggleMenu} active={active} />
      <Links toggleMenu={toggleMenu} active={active} />
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: transparent;
`;

const StyledBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-right: 15px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Line = styled.div`
  width: 35px;
  height: 3px;
  margin: 4px;
  background: white;
  transition: transform 0.2s linear;
`;

const Line1 = styled(Line)`
  transform-origin: top left;
  transform: ${(p) => p.active && "rotate(45deg)"};
`;

const Line2 = styled(Line)`
  transform: ${(p) => p.active && "translateX(100%)"};
  opacity: ${(p) => p.active && "0"};
`;

const Line3 = styled(Line)`
  transform-origin: bottom left;
  transform: ${(p) => p.active && "rotate(-45deg)"};
`;

const StyledBrand = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 15px;
  &:hover {
    filter: brightness(150%);
  }
`;

const Logo = styled.img`
  height: 100%;
  margin: 0 5px;
`;

const StyledLinks = styled.div`
  display: flex;
  opacity: ${(p) => (p.active ? 1 : 0)};
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 6vh;
  background: rgba(23, 25, 25, 0.5);
  width: 100%;
  transition: all 0.2s linear;

  @media (min-width: 768px) {
    display: flex;
    opacity: 1;
    position: relative;
    top: 0;
    background: none;
    width: 40%;
    flex-direction: row;
    justify-content: space-evenly;
    height: 100%;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
  &:active,
  &:visited {
    color: #fff;
  }
`;

const DropdownLink = styled(StyledLink)`
  font-size: 18px;
  height: 60px;
  width: 100%;

  &:hover {
    background: rgba(25, 25, 25, 0.55);
  }

  @media (min-width: 768px) {
    border: 3px solid transparent;
    transition: all 0.2s ease;
    width: 100%;

    &:hover {
      border-bottom: 3px solid white;
      background: none;
    }
  }
`;

const BrandName = styled.span`
  display: none;
  font-size: 24px;
  width: 100%;
  margin: 0 10px;

  @media (min-width: 768px) {
    display: flex;
  }
`;
