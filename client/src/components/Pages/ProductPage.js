import React from "react";
import { Link } from "react-router-dom";
import items from "../../Test Data/test_items";
import styled from "styled-components";

const ProductPage = (props) => {
  const itemId = props.match.params.id;
  // console.log("itemId", itemId);
  const product = items.find((item) => item.id == itemId);
  // console.log("product", product);

  return (
    <Details>
      <ProductImage>
        <WatchImage src={product.imageSrc} />
      </ProductImage>
      <ProductInfo>
        <InfoList>
          <li>
            <h4>{product.name}</h4>
          </li>
          <li>Price:{product.price}</li>
          <li>Category:{product.category}</li>
        </InfoList>
      </ProductInfo>
      <ProductAction>
        <ActionList>
          <li>Price:{product.price}</li>
          <li>Status:{product.numInStock > 0 ? "In Stock" : "Out Of Stock"}</li>
          <li>
            Qty:
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </li>
          <li>
            <Btn>Add to cart</Btn>
          </li>
        </ActionList>
      </ProductAction>
    </Details>
  );
};

const Details = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 1rem;
`;

const ProductImage = styled.div`
  flex: 2 1 30rem;
`;

const WatchImage = styled.img`
  max-width: 30rem;
  max-height: 100%;
`;

const ProductInfo = styled.div`
  flex: 1 1 30rem;
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    margin-bottom: 1rem;
  }
`;

const ProductAction = styled.div`
  flex: 1 1 30 rem;
  border: 0.11rem #808080 solid;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #f0f0f0;
  ul li:last-child {
    display: flex;
    flex-direction: column;
  }
`;

const ActionList = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    margin-bottom: 1rem;
  }
`;

const Btn = styled.button`
  background-color: #ff8000;
  border: none;
  height: 1.5rem;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
`;

export default ProductPage;
