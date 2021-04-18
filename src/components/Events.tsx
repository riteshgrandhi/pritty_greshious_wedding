import {
  motion,
  Variants,
} from "framer-motion";
import React from "react";
import { LoadableProps } from "../types/LoadableProps";
import { useParallaxY } from "../utils/useParallaxY";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";
import styles from "./../styles/Events.module.css";

interface EventProps {
  index: number;
}

export const Events: React.FC<EventProps & LoadableProps> = ({ index }) => {
  const publicUrl = process.env.PUBLIC_URL;
  const responsiveStyles = useResponsiveStyles(styles);
  const posYAnim = useParallaxY(75);

  const bgVariants: Variants = {
    initial: {
      opacity: 0,
    },
    final: {
      opacity: 1,
    },
  };

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={`${styles.bg} ${responsiveStyles.mobile}`}
        style={{
          backgroundImage: `url(${publicUrl}/images/Ritesh_fort.jpg)`,
          y: posYAnim,
        }}
        variants={bgVariants}
        initial="initial"
        animate="final"
        transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
      />
    </div>
  );
};
