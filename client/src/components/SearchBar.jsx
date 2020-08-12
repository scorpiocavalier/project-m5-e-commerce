import React, { useState } from "react";
import styled from "styled-components";
import Suggestion from "./Suggestion";
import { useShopContext } from "../context/ShopContext";

export default () => {
  const {
    state: { items },
  } = useShopContext();
  const [userValue, setUserValue] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);

  const matchedSuggestion = (userInput) => {
    if (userInput.length > 1) {
      return items.filter((item) =>
        item.name.toLowerCase().includes(userInput.toLowerCase())
      );
    }
    return [];
  };

  let listMatchedSuggestion = matchedSuggestion(userValue);

  return (
    <>
      <Wrapper>
        <InputData
          type="text"
          value={userValue}
          onChange={(ev) => {
            if (!dropDown) setDropDown(true);
            setUserValue(ev.target.value);
          }}
          onKeyDown={(ev) => {
            switch (ev.key) {
              case "ArrowUp": {
                if (selectedSuggestion - 1 > -1) {
                  setSelectedSuggestion(selectedSuggestion - 1);
                }
                return;
              }
              case "ArrowDown": {
                if (selectedSuggestion + 1 < listMatchedSuggestion.length) {
                  setSelectedSuggestion(selectedSuggestion + 1);
                }
                return;
              }
              default: {
                return;
              }
            }
          }}
        />
      </Wrapper>
      {listMatchedSuggestion.length > 0 && dropDown && (
        <List>
          {listMatchedSuggestion.map((matchedSuggestion) => (
            <Suggestion
              matchedSuggestion={matchedSuggestion}
              key={matchedSuggestion.id}
              userValue={userValue}
              category={matchedSuggestion.category}
            />
          ))}
        </List>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

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
  max-width: 30rem;
`;
