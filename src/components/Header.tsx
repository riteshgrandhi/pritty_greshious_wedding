import {
  motion,
  useTransform,
  useViewportScroll,
  Variants,
} from "framer-motion";
import React, { useEffect } from "react";
import { LoadableProps } from "../types/LoadableProps";
import { useParallax } from "../utils/useParallax";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";
import styles from "./../styles/Header.module.css";

interface HeaderProps {}

const logoVariants: Variants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  final: {
    opacity: 1,
    x: 0,
  },
};

const headerTextVariants: Variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  final: {
    opacity: 1,
    x: 0,
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

export const Header: React.FC<HeaderProps & LoadableProps> = (props) => {
  const publicUrl = process.env.PUBLIC_URL;
  const responsiveStyles = useResponsiveStyles(styles);
  const posYAnim = useParallax("y", [-75, 75]);

  const { scrollYProgress } = useViewportScroll();
  const xMovementText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const xMovementLogo = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const xMovementOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    (document.scrollingElement as HTMLElement).style.overflow = "hidden";
    setTimeout(() => {
      (document.scrollingElement as HTMLElement).style.overflow = "";
    }, 2000);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.logoWrapper} ${responsiveStyles.mobile}`}>
        <motion.img
          src={`${publicUrl}/images/RR_logo4_red_4K_transparent.png`}
          alt="logo"
          className={`${styles.logo} ${responsiveStyles.mobile}`}
          variants={logoVariants}
          initial="initial"
          animate="final"
          transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
          onLoad={() => props.onLoaded()}
          style={{ x: xMovementLogo, opacity: xMovementOpacity }}
        />
      </div>
      <div className={`${styles.headerTextWrapper} ${responsiveStyles.mobile}`}>
        <div
          className={`${styles.headerText} ${responsiveStyles.mobile}`}
        >
          <motion.p style={{ x: xMovementText, opacity: xMovementOpacity }}
          variants={headerTextVariants}
          initial="initial"
          animate="final"
          transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}>
            The Wedding of <br />
            <span className={styles.names}>Reshma & Ritesh</span>
          </motion.p>
        </div>
      </div>
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
