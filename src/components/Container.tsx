import React, { useEffect, RefObject, useState } from "react";

interface ContainerProps {
  refs: RefObject<HTMLDivElement>[];
}

export const Container: React.FC<ContainerProps> = ({ children, refs }) => {
  const [scrollYRounded, setScrollYRounded] = useState(0);
  const [totalSize, setTotalSize] = useState(0);
  const [isCurrectlyScrolling, setIsCurrectlyScrolling] = useState(false);

  useEffect(() => {
    setTotalSize(refs.reduce((p, c) => p + (c.current?.clientHeight || 0), 0));
  }, [refs]);

  useEffect(() => {
    setInterval(() => {
      if (document.scrollingElement) {
        const scrollY =
          (document.scrollingElement.scrollTop / totalSize) * refs.length;
        setScrollYRounded(() => Math.round(scrollY));
      }
    }, 500);
  }, [totalSize]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    window.onscroll = () => {
      setIsCurrectlyScrolling(true);
      timeout = setTimeout(() => {
        setIsCurrectlyScrolling(false);
        clearTimeout(timeout);
      }, 200);
    };
  }, []);

  useEffect(() => {
    if (!isCurrectlyScrolling) {
      document.scrollingElement?.scrollTo({
        behavior: "smooth",
        left: 0,
        top: refs[scrollYRounded]?.current?.offsetTop,
      });
    }
  }, [scrollYRounded]);

  return <>{children}</>;
};
