import React, { useState, useRef } from "react";
import styled from "styled-components";
// import { TiDeleteOutline } from "react-icons/ti";
import Suggestion from "./Suggestion";
import { useShopContext } from "../context/ShopContext";

export default () => {
  const {
    state: { items },
  } = useShopContext();
  const [userValue, setUserValue] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  // const [dropDown, setDropDown] = useState(false);

  const watch = useRef();

  const matchedSuggestion = (watch) => {
    if (watch.length > 1) {
      return items.filter((item) => console.log(item.name));
    }
    return [];
  };

  let listMatchedSuggestion = matchedSuggestion(watch);

  return (
    <>
      <Wrapper>
        <InputData
          type="text"
          value={userValue}
          onChange={(ev) => {
            // if (!dropDown) setDropDown(true);
            setUserValue(ev.target.value);
            console.log(userValue);
          }}
        ></InputData>
      </Wrapper>
      {listMatchedSuggestion.length > 0 && (
        <List>
          {listMatchedSuggestion.map((matchedSuggestion) => (
            <Suggestion
              ref={watch}
              key={matchedSuggestion.id}
              userValue={userValue}
            />
          ))}
        </List>
      )}
    </>
  );
};

const Wrapper = styled.div``;

const InputData = styled.input`
  border-radius: 0.5rem;
  border: solid 1px #808080;
  width: 20rem;
  padding: 1rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 3rem;
`;
