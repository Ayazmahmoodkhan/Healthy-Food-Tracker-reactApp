import React from "react";
import styles from "./Item.module.css";

const Items = ({ fooditems, bought, handleBuyButton, handleRemoveButton }) => {
  const itemStyle = { backgroundColor: bought ? "lightgreen" : "khaki" };
  return (
    <li
      className={`${styles["Item"]} list-group-item ${bought && "active"} `}
      style={itemStyle}
    >
      <span className={styles["spanItem"]}>{fooditems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
      <button
        className={` ${styles.buttonRemove} btn btn-danger md-2 `}
        onClick={handleRemoveButton}
      >
        Remove Item
      </button>
    </li>
  );
};

export default Items;
