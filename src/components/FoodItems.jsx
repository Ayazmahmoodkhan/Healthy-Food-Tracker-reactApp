import React from "react";
import Items from "./Items";
import { useState } from "react";

const FoodItems = ({ items, handleRemoveItem }) => {
  let [activeItem, setAtiveItem] = useState([]);
  let onBuybutton = (item, event) => {
    let newItem = [...activeItem, item];
    setAtiveItem(newItem);
  };
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Items
          key={index}
          fooditems={item}
          bought={activeItem.includes(item)}
          handleBuyButton={(event) => onBuybutton(item, event)}
          handleRemoveButton={() => handleRemoveItem(item)}
        ></Items>
      ))}
    </ul>
  );
};

export default FoodItems;
