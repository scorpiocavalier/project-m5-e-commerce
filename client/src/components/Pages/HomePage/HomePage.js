import React from "react";
import { Link } from "react-router-dom";
import items from "../../../Test Data/test_items";

const HomePage = () => {
  return (
    <ul className="products">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <div className="product">
              <Link to={"/product/" + item.id}>
                <img src={item.imageSrc} alt={item.name} />
              </Link>

              <div className="product-name">
                <Link to={"/product/" + item.id}>{item.name}</Link>
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
