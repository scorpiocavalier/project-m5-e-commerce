import React from "react";
import styled from "styled-components";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";

export default () => {
  return (
    <Wrapper>
      <Copyright>&copy; 2020 The ARK Project. All rights reserved.</Copyright>
      <IconWrapper>
        <IconWrap>
          <FiFacebook style={{ color: "#ccc" }} />
        </IconWrap>
        <IconWrap>
          <FiInstagram style={{ color: "#ccc" }} />
        </IconWrap>
        <IconWrap>
          <FiLinkedin style={{ color: "#ccc" }} />
        </IconWrap>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const IconWrap = styled.button`
  margin: 0.5rem;
  border: none;
  cursor: pointer;
`;

const Copyright = styled.span`
  font-size: 12px;
  color: #ccc;
`;
