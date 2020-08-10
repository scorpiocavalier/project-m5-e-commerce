import React from "react";
import styled from "styled-components";

const userPredict = (suggestion, input) => {
  const title = suggestion.name;
  const index = title.toLowerCase().indexOf(input);
  const suggestion1 = title.slice(0, index + input.length);
  const suggestion2 = title.slice(index + input.length);
  return { suggestion1, suggestion2 };
};

export default ({ matchedSuggestions, userValue }) => {
  const { suggestion1, suggestion2 } = userPredict(
    matchedSuggestions,
    userValue
  );

  return (
    <List>
      {suggestion1}
      <Prediction>{suggestion2}</Prediction>
      <Type>in</Type>
    </List>
  );
};

const List = styled.li`
  text-align: center;
  padding: 0.5rem 0.5rem;
  width: 100%;
  &:hover {
    background-color: grey;
  }
`;
const Prediction = styled.span`
  font-weight: bold;
`;
const Type = styled.span`
  font-size: 1rem;
  font-style: italic;
  color: blue;
`;
