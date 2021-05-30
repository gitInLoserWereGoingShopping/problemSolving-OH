import React from "react";

//props should be an array (gList)
const GroceryItem = (props) => {
  return props.gList.map((item, index) => (
    <ul key={index}>
      <li key={index}> {item.item} </li>
    </ul>
  ));
};

export default GroceryItem;
