import React from "react";
import styled from "styled-components";
import { useShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

export default () => {
  const {
    state: { items },
  } = useShopContext();

  const item = items.find((item) => item.id === 6543);

  return (
    <>
      <MainWrapper>
        <Wrapper>
          <Header>Shopping Cart</Header>
          <ProductDetails>
            <Head>PRODUCT</Head>
            <Quantity>
              <Head>QUANTITY</Head>
              <Head>PRICE</Head>
              <Head>TOTAL</Head>
            </Quantity>
          </ProductDetails>
          <ItemList>
            <Product>
              <Img src={item.imageSrc} />
              <ProductList>
                <ProductName>{item.name}</ProductName>
                <ProductId>Id:{item.id}</ProductId>
              </ProductList>
            </Product>
            <Quantity>
              <ItemQuant>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
                <Btn>Remove</Btn>
              </ItemQuant>
              <ItemPrice>$54</ItemPrice>
              <ItemTotal>$54</ItemTotal>
            </Quantity>
          </ItemList>
          <Btn>
            <Link to="/products" style={{ color: "black" }}>
              Continue Shopping
            </Link>
          </Btn>
        </Wrapper>
        <Card>
          <CardHeading>Order Summary</CardHeading>
          <CardOrder>Items:</CardOrder>
          <CardTotal>Total:</CardTotal>
          <CardBtn>Checkout</CardBtn>
        </Card>
      </MainWrapper>
    </>
  );
};

const MainWrapper = styled.div`
  display: grid;
  grid-template-areas: "content content card";
  @media (max-width: 1100px) {
    grid-template-areas:
      "content"
      "card";
  }
`;

const Wrapper = styled.div`
  grid-area: content;
  margin: 10rem auto;
  width: auto;
  border-radius: 0.5rem;
`;

const Head = styled.span`
  font-size: 1rem;
  margin: 0.7rem;
`;

const Header = styled.div`
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  border-bottom: thin solid grey;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: thin solid grey;
`;

const Quantity = styled.span`
  display: flex;
  flex-direction: row;
`;

const Img = styled.img`
  margin: 1rem;
`;

const Product = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

const ItemList = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: thin solid grey;
`;

const ItemQuant = styled.span`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
`;

const ItemPrice = styled.span`
  margin: 1.5rem;
`;

const ItemTotal = styled.span`
  margin: 1.5rem;
`;

const ProductList = styled.div`
  display: grid;
  grid-auto-columns: 5rem;
  margin: 1rem;
`;

const ProductName = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const ProductId = styled.div``;

const Btn = styled.button`
  &:hover {
    color: white;
  }
`;

const Card = styled.div`
  grid-area: card;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20rem;
  padding: 1rem;
  background-color: #d1d9e0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1100px) {
    height: 15rem;
    margin-top: -3rem;
  }
`;

const CardHeading = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  border-bottom: solid thin grey;
`;

const CardOrder = styled.span``;

const CardTotal = styled.span``;

const CardBtn = styled.button`
  font-size: 1.1rem;
  background-color: black;
  color: white;
`;
