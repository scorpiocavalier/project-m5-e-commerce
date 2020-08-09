import React from "react";
import styled from "styled-components";

import CompanyInfo from "./CompanyInfo";

/* Instead of displaying the quantity in stock, here is a function that mimics the functionality
of amazon, which just shows the user the minimum relevant info, ie: is it in or out of stock.
I dont think the user actually cares how much stock there is, as long as there is more than 0.

Arturo: I helped you simplify the method.
*/
const checkInStock = (qty) => (qty > 0 ? "In Stock" : "Out of Stock");

/*
The Product component is taking props from the map in the product list component. The
checkInStock function explaind in the comment above is used below.
*/

export default (props) => {
  const {
    imageSrc,
    name,
    price,
    numInStock,
    category,
    body_location,
    companyId,
  } = props;

  return (
    <Wrapper>
      {<Image src={`${imageSrc}`} alt={`${name}`} />}
      <InfoWrapper>
        <Name>{`${name}`}</Name>
        <Price>Price: {`${price}`}</Price>
        <Availability>{checkInStock(numInStock)}</Availability>
        <Category>{`${category}`}</Category>
        <BodyLocation>{`${body_location}`}</BodyLocation>
        <CompanyInfo companyId={companyId} />
      </InfoWrapper>
    </Wrapper>
  );
};

/*
The product wrapper displays flex-direction column in order to acheive a card format for each
item. It is clear that there is just not enough text info in the data for the img to be display
inline with the text, as the image takes up much more room, and thus looks totally lopsided.

Arturo: Make use of a grid system to display x number of cards/row based on window size.
To make this work, you should probably make some changes at a higher level.
Use the library & stickers workshops as a reference, if needed.
*/

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: blue solid 2px;
  align-items: center;
`;

const Image = styled.img`
  border: red solid 1px;
  max-width: 100%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/*
Arturo: I'll let you style these.
1. Create a Card look that has a fixed width other than the window width.
2. Give two possible colors for the Availability.
3. Maybe have category and body location on the same line.
4. Have the company info only display the company name as a Link,
which can open the url in a new tab without making them leave.
*/
const Name = styled.h2``;
const Price = styled.p``;
const Availability = styled.p``;
const Category = styled.p``;
const BodyLocation = styled.p``;

/*
img  name
price
numInStock

Items in{`${items[0].numInStock}`}

*/
