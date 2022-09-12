import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "../styles/Title.module.css";
import Five, { totalNums } from "./Five";
import { useSpring, animated, config } from "@react-spring/web";

const Title = ({ trigger }: { trigger: () => void }) => {
  const [fiveRef, setFiveRef] = useState(null) as any;
  const [heightRef, setHeightRef] = useState(null) as any;

  const props = useSpring({
    from: { x: 0 },
    to: { x: heightRef?.clientHeight - 100 },
    config: { mass: 1, tension: 270, friction: 160 },
    onChange: {
      x: (a, b, c) => {
        fiveRef?.scroll(0, (a as unknown as number).toFixed(0));
        Number((a as unknown as number).toFixed(0)) >=
        (heightRef?.clientHeight - 100) * 0.8
          ? trigger()
          : undefined;
      },
    },
  });

  return (
    <div className={styles.container}>
      <div>
        <div>After</div>
        <div className={styles.five} ref={setFiveRef}>
          <Five refSet={setHeightRef} />
        </div>
      </div>
    </div>
  );
};

export default Title;
