import React from "react";
import styles from "../styles/Five.module.css";

const Five = () => {
  const items = [1, 2, 3, 4, 5];
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Five;
