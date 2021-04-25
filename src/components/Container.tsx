import { useViewportScroll } from "framer-motion";
import React, { useEffect, useState, RefObject } from "react";
import { useOnStopScrolling } from "../utils/useOnStopScrolling";

interface ContainerProps {
  refs: RefObject<HTMLDivElement>[];
}

export const Container: React.FC<ContainerProps> = ({ children, refs }) => {
  return <>{children}</>;
};
