import React from "react";
import items from "../../../Test Data/test_items";

const HomePage = () => {
  return (
    <ul className="products">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <div className="product">
              <img src={item.imageSrc} alt={item.name} />
              <div className="product-name">
                <a href="product.html">{item.name}</a>
              </div>

              <div className="product-body_location">{item.body_location}</div>
              <div className="product-price">{item.price}</div>
              <div className="product-category">{item.category}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HomePage;
