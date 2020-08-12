import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/*
Instead of displaying the quantity in stock, here is a function that mimics the functionality
of amazon, which just shows the user the minimum relevant info, ie: is it in or out of stock.
I dont think the user actually cares how much stock there is, as long as there is more than 0.
*/
const InStock = (qty) => qty > 0;

// Image ContainerComponent
export const ImageContent = ({ src, alt }) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} />
    </ImageContainer>
  );
};

export const ProductName = ({ children }) => {
  return <Name>{children}</Name>;
};
export const ProductPrice = ({ children }) => {
  return <Price>{children}</Price>;
};
export const ProductAvailability = ({ children, available }) => {
  return <Availability available={available}>{children}</Availability>;
};
export const ProductMoreInfo = ({ children }) => {
  return <MoreInfo>{children}</MoreInfo>;
};
export const ProductAddToCart = ({ children }) => {
  return <AddToCart>{children}</AddToCart>;
};

export const checkAvailability = (stockQty) => {
  const available = stockQty > 0;
  const availability = available ? "In stock" : "Out of stock";
  return { available, availability };
};

/*
The Product component is taking props from the map in the product list component. The
checkInStock function explaind in the comment above is used below.
*/
export default ({ item }) => {
  const { imageSrc, name, price, numInStock } = item;

  const { available, availability } = checkAvailability(numInStock);

  return (
    <Card>
      <ImageContent src={imageSrc} alt={name} />
      <Divider />
      <InfoWrapper>
        <ProductName>{name}</ProductName>
        <PriceAvailability>
          <ProductPrice>{price}</ProductPrice>
          <ProductAvailability available={available}>
            {availability}
          </ProductAvailability>
        </PriceAvailability>
        <ActionWrapper>
          <ProductMoreInfo>More info</ProductMoreInfo>
          <ProductAddToCart>Add to Cart</ProductAddToCart>
        </ActionWrapper>
      </InfoWrapper>
    </Card>
  );
};

/*
The product wrapper displays flex-direction column in order to acheive a card format for each
item. It is clear that there is just not enough text info in the data for the img to be display
inline with the text, as the image takes up much more room, and thus looks totally lopsided.
*/

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  width: 325px;
  height: 500px;
  padding: 30px;
  text-align: center;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 10px;
`;

const Image = styled.img`
  object-fit: contain;
  height: 100%;
  max-width: 100%;
`;

const Divider = styled.div`
  border-bottom: 1px solid lightgrey;
  width: 90%;
`;

const InfoWrapper = styled.div`
  width: 90%;
  height: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 40%;
  margin-top: 20px;
  justify-content: space-between;
`;

const PriceAvailability = styled.div`
  display: flex;
  flex-direction: row;
`;

const Name = styled.p`
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 600;
`;
const Price = styled.p`
  padding: 5px;
  font-weight: bold;
  font-size: 20px;
`;
const Availability = styled.p`
  padding: 5px;
  font-size: 20px;
  color: ${(p) => (p.available ? "green" : "gray")};
`;

const ActionWrapper = styled.div`
  display: flex;
`;

const MoreInfo = styled.button`
  width: 120px;
  font-size: 18px;
`;

const AddToCart = styled(MoreInfo)`
  &:hover {
    background: green;
  }
`;
