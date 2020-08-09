import React from "react";
import styled from "styled-components";

import cover1 from "../assets/cover/cover-brown-vertical.jpg";

export default () => {
  return (
    <Wrapper>
      <Image src={cover1} alt="wearables"/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 92vh;
  width: 100%;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`