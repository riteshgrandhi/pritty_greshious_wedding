// import { useViewportScroll } from "framer-motion";
import React, { Children, useRef } from "react";

export const Container: React.FC = ({ children }) => {
  // const { scrollYProgress } = useViewportScroll();
  // const [scrollYRounded, setScrollYRounded] = useState(0);

  const childRefs = useRef<Array<HTMLDivElement | null>>([]);

  // useEffect(() => {
  //   const childCount = Children.count(children);
  //   scrollYProgress.onChange(() => {
  //     const rounded = Math.round(scrollYProgress.get() * childCount);
  //     setScrollYRounded(rounded);
  //   });
  // }, []);

  // useOnStopScrolling(() => {
  //   console.log(`${scrollYRounded} ${childRefs.current}`);

  //   window.scrollTo({
  //     behavior: "smooth",
  //     left: 0,
  //     top: childRefs ? childRefs.current[scrollYRounded]?.offsetTop : 0,
  //   });
  // });

  // useEffect(() => {
  //   window.scrollTo({
  //     behavior: "smooth",
  //     left: 0,
  //     top: childRefs ? childRefs.current[scrollYRounded]?.offsetTop : 0,
  //   });
  // }, [scrollYRounded]);

  return (
    <>
      {Children.map(children, (c, i) => (
        <div key={i} ref={(el) => (childRefs.current[i] = el)}>
          {c}
        </div>
      ))}
    </>
  );
};
