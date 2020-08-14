import React from "react";
import styled from "styled-components";

import categories from "../assets/categories";
import Photos from "./Photos";

export default () => {
  return (
    <Wrapper>
      <Header>Shop by Category</Header>
      <GalleryWrapper>
        {categories.map(({ id, imageSrc, title }) => (
          <Photos key={id} imageSrc={imageSrc} title={title} />
        ))}
      </GalleryWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 10%;
`

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const Header = styled.h2`
  font-size: 32px;
  padding: 30px 0;
`