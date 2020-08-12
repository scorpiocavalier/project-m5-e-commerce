import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import ArkLogo from "../assets/logo/ark-logo.png";

export default () => {
  return (
    <WrapperLink to="/">
      <Logo src={ArkLogo} alt="Ark Logo" />
      <Name>THE ARK PROJECT</Name>
    </WrapperLink>
  );
};

const WrapperLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  color: #fff;

  &:active,
  &:visited {
    color: #fff;
  }
`;

const Logo = styled.img`
  height: 100%;
`;

const Name = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    margin-left: 10px;
    font-size: 24px;
  }
`;
