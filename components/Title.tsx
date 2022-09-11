import React, { useRef } from "react";
import styles from "../styles/Title.module.css";
import Five from "./Five";

const Title = () => {
  const fiveRef = useRef(null);

  console.log(fiveRef);
  return (
    <div className={styles.container}>
      <div>
        <div>After</div>
        <div className={styles.five} ref={fiveRef}>
          <Five />
        </div>
      </div>
    </div>
  );
};

export default Title;
