import React from "react";
import styled from "styled-components";

import categories from "../assets/categories";
import Photos from "./Photos";

export default () => {
  return (
    <Wrapper>
      {categories.map(({id, imageSrc, title}) => (
        <Photos key={id} imageSrc={imageSrc} title={title} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
