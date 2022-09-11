import React from "react";
import styles from "../styles/Five.module.css";

const Five = ({ refSet }: { refSet: any }) => {
  const items = [12, 1, 2, 3, 4, 5];
  return (
    <div className={styles.container} ref={refSet}>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Five;

export const totalNums = 6;
