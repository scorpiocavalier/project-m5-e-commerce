import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
    <Card>
      <ImageContainer>
        {<Image src={`${imageSrc}`} alt={`${name}`} />}
      </ImageContainer>
      {/* <HoverWrapper> */}
      <InfoWrapper>
        <Name>{`${name}`}</Name>
        <PriceAvailability>
          <Price>{`${price}`}</Price>
          <Availability>{checkInStock(numInStock)}</Availability>
          {/* ADD TO CART BUTTON*/}
        </PriceAvailability>
        {/* <PriceAvailability>
          <Category>
            <Link to={`/products/${category}`}>{`${category}`}</Link>
          </Category>
            INSERT SEE DETAILS BUTTON
          <BodyLocation>
            <Link to={`/products/${body_location}`}>{`${body_location}`}</Link>
          </BodyLocation>
        </PriceAvailability> */}
        {/* <CompanyInfo companyId={companyId} /> */}
      </InfoWrapper>
      {/* </HoverWrapper> */}
    </Card>
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

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   border: blue solid 2px;
//   align-items: center;
// `;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 290px;
  height: 450px;
  text-align: center;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 45%;
  padding: 10px 2px;
  /* border: solid blue 1px; */
  text-align: center;
  vertical-align: middle;
`;

const Image = styled.img`
  /* border: red solid 1px; */
  /* max-width: 100%;
  height: auto; */
  object-fit: contain;
`;

// const HoverWrapper = styled.div`
//   padding: 2px 16px;
// `;

const InfoWrapper = styled.div`
  width: 90%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  /* border: solid green 1px; */
`;

const PriceAvailability = styled.div`
  display: flex;
  flex-direction: row;
`;

/*
Arturo: I'll let you style these.
1. Create a Card look that has a fixed width other than the window width.
2. Give two possible colors for the Availability.
3. Maybe have category and body location on the same line.
4. Have the company info only display the company name as a Link,
which can open the url in a new tab without making them leave.
*/
const Name = styled.p`
  padding: 5px 10px;
`;
const Price = styled.p`
  padding: 5px;
  font-weight: bold;
`;
const Availability = styled.p`
  padding: 5px;
`;
const Category = styled.p`
  padding: 5px;

  Link {
    text-decoration: none;
  }
`;
const BodyLocation = styled.p`
  padding: 5px;
`;

/*
img  name
price
numInStock

Items in{`${items[0].numInStock}`}

*/
