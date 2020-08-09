import React, { useState, useEffect } from "react";
import styled from "styled-components";

import verticalImage from "../assets/cover/cover-brown-vertical.jpg";
import horizontalImage from "../assets/cover/cover-white-horizontal.jpg";

export default () => {
  const [image, setImage] = useState({
    src: window.innerWidth < "768" ? verticalImage : horizontalImage,
  });

  // Change image source based on window.innerWidth
  useEffect(() => {
    const handleResize = () => {
      setImage({
        src: window.innerWidth < "768" ? verticalImage : horizontalImage,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <Wrapper>
      <Image src={image.src} alt="wearables" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
