import React from "react";
import styled from "styled-components";

import companies from "../Test Data/companies";

export default ({ companyId }) => {
  const productCompany = companies.find((company) => {
    return company.id === companyId;
  });

  return (
    <Wrapper>
      <p>{productCompany.name}</p>
      <p>{productCompany.url}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;
