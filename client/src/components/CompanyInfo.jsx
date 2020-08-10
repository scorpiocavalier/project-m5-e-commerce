import React from "react";
import styled from "styled-components";

import companies from "../Test Data/companies";

export default ({ companyId }) => {
  const productCompany = companies.find((company) => {
    return company.id === companyId;
  });

  return (
    <Wrapper>
      <CompanyLink href={`${productCompany.url}`} target="_blank">
        <p>{productCompany.name}</p>
      </CompanyLink>
    </Wrapper>
  );
};

const CompanyLink = styled.a`
  text-decoration: none;
`;
const Wrapper = styled.div`
  display: flex;
`;
