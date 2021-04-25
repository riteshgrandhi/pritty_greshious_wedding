import { motion, Variants } from "framer-motion";
import React from "react";
import { useParallax } from "../utils/useParallax";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";
import styles from "./../styles/ParallaxPage.module.css";

interface ParallaxPageProps {
  bgImage: string;
  bgClassName?: string;
}

export const ParallaxPage: React.FC<ParallaxPageProps> = (props) => {
  const publicUrl = process.env.PUBLIC_URL;
  const responsiveStyles = useResponsiveStyles(styles);
  const posYAnim = useParallax("y", [-75, 75]);

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
      <>{props.children}</>
      <motion.div
        className={
          props.bgClassName || `${styles.bg} ${responsiveStyles.mobile}`
        }
        style={{
          backgroundImage: `url(${publicUrl}${props.bgImage})`,
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
