import React, { useState, useRef } from "react";
import styled from "styled-components";
// import { TiDeleteOutline } from "react-icons/ti";
import Suggestion from "./Suggestion";
import { useShopContext } from "../context";

export default () => {
  const {
    state: { items },
  } = useShopContext();
  const [userValue, setUserValue] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  // const [dropDown, setDropDown] = useState(false);

  const watch = useRef();

  const matchedSuggestions = (searchValue) => {
    if (searchValue.length > 1) {
      return items.filter(({ name }) =>
        name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    return [];
  };

  let listMatchedSuggestions = matchedSuggestions(userValue);

  return (
    <>
      <Wrapper>
        <InputData
          type="text"
          value={userValue}
          onChange={(ev) => {
            // if (!dropDown) setDropDown(true);
            setUserValue(ev.target.value);
          }}
        ></InputData>
      </Wrapper>
      {listMatchedSuggestions.length > 0 && (
        <List>
          {listMatchedSuggestions.map((matchedSuggestion) => (
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
