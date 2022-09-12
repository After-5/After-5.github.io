import { animated, config, useSpring } from "@react-spring/web";
import React, { useState } from "react";
import Background from "../components/Background";
import FormButton from "../components/FormButton";
import Subtitle from "../components/Subtitile";
import Title from "../components/Title";
import styles from "../styles/MainScreen.module.css";

const MainScreen = () => {
  const [show, setShow] = useState(false);

  const props = useSpring({
    opacity: show ? 1 : 0,
    config: config.molasses,
  });


  return (
    <div className={styles.container}>
      <Title trigger={() => setShow(true)} />

      <animated.div style={props}>
        <Subtitle />
        <FormButton />
      </animated.div>
    </div>
  );
};

export default MainScreen;
