import { useEffect } from "react";

export const useOnStopScrolling = (callback: () => void) => {
  useEffect(() => {
    let isScrolling: NodeJS.Timeout;
    window.addEventListener(
      "scroll",
      () => {
        console.log("Scrolling");
        // Clear our timeout throughout the scroll
        clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function () {
          if (callback) {
            callback();
          }
          console.log("Scrolling has stopped.");
        }, 200);
      },
      false
    );
  }, []);
};
