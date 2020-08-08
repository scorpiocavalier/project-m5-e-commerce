import React from "react";
import items from "./items";
import styled from "styled-components";
import CompanyInfo from "./CompanyInfo";

/* Instead of displaying the quantity in stock, here is a function that mimics the functionality
of amazon, which just shows the user the minimum relevant info, ie: is it in or out of stock.
I dont think the user actually cares how much stock there is, as long as there is more than 0.*/
const checkInStock = (item) => {
  const stock = item.numInStock;
  if (stock >= 1) {
    return "In Stock";
  } else {
    return "Out of Stock";
  }
};
checkInStock(items, 0);

/*
the Product component is taking props from the map in the product list component. The 
checkInStock function explaind in the comment above is used below.
*/

export default function Product(props) {
  return (
    <ProductWrapper>
      {/* {console.log("map test", props.name)} */}
      {<ProductImage src={`${props.imageSrc}`} alt={`${props.name}`} />}{" "}
      <ProductInformationWrapper>
        <h2>{`${props.name}`}</h2>
        <p>Price: {`${props.price}`}</p>
        <p>{checkInStock(props)}</p>
        <p>{`${props.category}`}</p>
        <p>{`${props.body_location}`}</p>
        <CompanyInfo companyId={props.companyId} />
      </ProductInformationWrapper>
    </ProductWrapper>
  );
}
/*
The product wrapper displays flex-direction column in order to acheive a card format for each
item. It is clear that there is just not enough text info in the data for the img to be display
inline with the text, as the image takes up much more room, and thus looks totally lopsided.
*/

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: blue solid 2px;
  align-items: center;
`;

const ProductImage = styled.img`
  border: red solid 1px;
  max-width: 100%;
`;

const ProductInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/*
img  name
price
numInStock

Items in{`${items[0].numInStock}`}

*/
