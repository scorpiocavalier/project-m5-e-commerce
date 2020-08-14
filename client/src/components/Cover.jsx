import React from "react";
import styled from "styled-components";

import ImageSrc from "../assets/cover/cover-white-horizontal.jpg";

export default () => {
  return (
    <Wrapper>
      <Image src={ImageSrc} alt="wearables" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  /* top: -7vh; */
  width: 100%;
  height: calc(100vh - 7vh);
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
