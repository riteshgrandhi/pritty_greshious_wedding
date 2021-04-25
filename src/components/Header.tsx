import {
  motion,
  useTransform,
  useViewportScroll,
  Variants,
} from "framer-motion";
import React, { useEffect } from "react";
import { LoadableProps } from "../types/LoadableProps";
import { useResponsiveStyles } from "../utils/useResponsiveStyles";
import styles from "./../styles/Header.module.css";
import { ParallaxPage } from "./ParallaxPage";

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

export const Header = React.forwardRef<
  HTMLDivElement,
  HeaderProps & LoadableProps
>((props, ref) => {
  const publicUrl = process.env.PUBLIC_URL;
  const responsiveStyles = useResponsiveStyles(styles);

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
    <ParallaxPage
      bgImage="/images/beach.jpg"
      bgClassName={`${styles.bg} ${responsiveStyles.mobile}`}
    >
      <div
        ref={ref}
        className={`${styles.wrapper}  ${responsiveStyles.mobile}`}
      >
        <div
          className={`${styles.logoWrapperWrapper}  ${responsiveStyles.mobile}`}
        >
          <div className={`${styles.logoWrapper} ${responsiveStyles.mobile}`}>
            <motion.img
              src={`${publicUrl}/images/logo.png`}
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
        </div>
        <div
          className={`${styles.headerTextWrapper} ${responsiveStyles.mobile}`}
        >
          <div className={`${styles.headerText} ${responsiveStyles.mobile}`}>
            <motion.p
              style={{ x: xMovementText, opacity: xMovementOpacity }}
              variants={headerTextVariants}
              initial="initial"
              animate="final"
              transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
            >
              The Wedding of <br />
              <span className={styles.names}>Reshma & Ritesh</span>
            </motion.p>
          </div>
        </div>
      </div>
    </ParallaxPage>
  );
});
