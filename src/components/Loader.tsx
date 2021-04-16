import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./../styles/Loader.module.css";
import { useMediaQuery } from "react-responsive";

const variants = {
  loader: {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
    },
  },
  overlay: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  },
};

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className={styles.wrapper}
          variants={variants.overlay}
          initial="visible"
          animate="visible"
          exit="hidden"
          transition={{ duration: 1, ease: "anticipate" }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${styles.item} ${
              isTabletOrMobile ? styles.mobile : ""
            }`}
          >
            <motion.path
              fill="none"
              d="M112.4548 187.3901c-150.0001-95-140-215-25-120 184.9999-195 25 90 40 175"
              variants={variants.loader}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, ease: "easeInOut", yoyo: Infinity }}
            />
          </motion.svg>
          <div className={styles.overlay} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
