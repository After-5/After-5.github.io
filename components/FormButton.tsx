import React from "react";
import styles from "../styles/FormButton.module.css";

const FormButton = () => {
  return (
    <a
      className={styles.btn}
      href="https://docs.google.com/forms/d/e/1FAIpQLSdhHPFobjOlHnrnfK1BjWJLxfl2Nj6-Uv6tFblmONGOk6lLcA/viewform?vc=0&c=0&w=1&flr=0"
    >
      Fill in Form
    </a>
  );
};

export default FormButton;
