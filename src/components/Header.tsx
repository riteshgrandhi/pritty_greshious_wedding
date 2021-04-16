import { motion } from "framer-motion";
import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./../styles/Header.module.css";

interface HeaderProps {
  onLoaded: () => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  //   const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  //   const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const publicUrl = process.env.PUBLIC_URL;
  //   const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  //   const isPortrait = useMediaQuery({ orientation: "portrait" });
  //   const isRetina = useMediaQuery({ minResolution: "2dppx" });

  return (
    <div className={styles.wrapper}>
      <img
        src={`${publicUrl}/images/RR_logo4_red_4K_transparent.png`}
        alt="logo"
        className={`${styles.logo} ${isTabletOrMobile ? styles.mobile : ""}`}
      />
      <div className={styles.bgWrapper}>
        <div className={styles.overlay} />
        <motion.img
          src={`${process.env.PUBLIC_URL}/images/VIN03846.JPG`}
          // initial={{ scale: 1 }}
          // animate={{ scale: 1.1 }}
          // transition={{ ease: "easeInOut", duration: 5, yoyo: Infinity }}
          alt="background"
          className={`${styles.bg} ${isTabletOrMobile ? styles.mobile : ""}`}
          onLoad={() => {
            props.onLoaded();
          }}
        />
      </div>
    </div>
  );
};
