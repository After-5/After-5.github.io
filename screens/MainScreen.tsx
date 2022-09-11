import React from "react";
import Background from "../components/Background";
import FormButton from "../components/FormButton";
import Subtitle from "../components/Subtitile";
import Title from "../components/Title";
import styles from "../styles/MainScreen.module.css";

const MainScreen = () => {
  return (
    <div className={styles.container}>
      <Title />
      <Subtitle />
      <FormButton />
    </div>
  );
};

export default MainScreen;
