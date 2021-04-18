import { motion, Variants } from "framer-motion";
import React from "react";
import { LoadableProps } from "../types/LoadableProps";
import { useParallaxY } from "../utils/useParallaxY";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";
import styles from "./../styles/Header.module.css";

interface HeaderProps {}

export const Header: React.FC<HeaderProps & LoadableProps> = (props) => {
  const publicUrl = process.env.PUBLIC_URL;
  const responsiveStyles = useResponsiveStyles(styles);
  const posYAnim = useParallaxY(75);

  const logoVariants: Variants = {
    initial: {
      opacity: 0,
      y: -50,
    },
    final: {
      opacity: 1,
      y: 0,
    },
  };

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
      <motion.img
        src={`${publicUrl}/images/RR_logo4_red_4K_transparent.png`}
        alt="logo"
        className={`${styles.logo} ${responsiveStyles.mobile}`}
        variants={logoVariants}
        initial="initial"
        animate="final"
        transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
        onLoad={() => props.onLoaded()}
      />
      <motion.div
        className={`${styles.bg} ${responsiveStyles.mobile}`}
        style={{
          backgroundImage: `url(${publicUrl}/images/VIN03846.JPG)`,
          // backgroundPositionY: `${posY}%`,
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
