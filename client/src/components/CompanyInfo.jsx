import React from "react";
import companies from "./companies";

export default function CompanyInfo({ companyId }) {
  const productCompany = companies.find((company) => {
    return company.id === companyId;
  });

  return (
    <>
      <p>{productCompany.name}</p>
      <p>{productCompany.url}</p>
    </>
  );
}

// const productCompany = (arr, id) => {
//   arr.find((item) => {
//     return item.id === props;
//   });
// };

// {companies.find((company) => {
//   return company.id === props.id;
// })}
