import React from "react";
import items from "../Test Data/test_items";
import styled from "styled-components";
import Photos from "./Photos";

export default () => {
  return (
    <Wrapper>
      {items.map((item) => (
        <Photos key={item.id} imageSrc={item.imageSrc} title={item.title} />
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
