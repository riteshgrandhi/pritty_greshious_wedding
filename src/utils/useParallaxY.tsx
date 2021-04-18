import { useTransform, useViewportScroll } from "framer-motion";

export const useParallaxY = (rangeY: number) => {
  const { scrollYProgress } = useViewportScroll();
  return useTransform(scrollYProgress, [0, 1], [-rangeY, rangeY]);
};
