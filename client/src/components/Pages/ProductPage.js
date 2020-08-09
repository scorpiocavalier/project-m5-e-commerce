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
    <Wrapper>
      <Back>
        <Link to="/">Back to HomePage</Link>
      </Back>
      <Details>
        <ProductImage>
          <img src={product.imageSrc} />
        </ProductImage>
        <ProductInfo>
          <ul>
            <li>
              <h3>{product.name}</h3>
            </li>
          </ul>
        </ProductInfo>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Back = styled.div``;

const Details = styled.div``;

const ProductImage = styled.div``;

const ProductInfo = styled.div``;
export default ProductPage;
