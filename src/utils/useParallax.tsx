import { useTransform, useViewportScroll } from "framer-motion";

export const useParallax = (
  axis: "x" | "y",
  [rangeA, rangeB]: [number, number],
) => {
  const scrollMotionValues = useViewportScroll();
  const axisScrollMotionValue =
    axis === "x"
      ? scrollMotionValues.scrollXProgress
      : scrollMotionValues.scrollYProgress;
  return useTransform(axisScrollMotionValue, [0, 1], [rangeA, rangeB]);
};
