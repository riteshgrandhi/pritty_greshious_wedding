import { useEffect } from "react";

export const useOnStopScrolling = (callback: () => void) => {
  useEffect(() => {
    let isScrolling: NodeJS.Timeout;
    window.addEventListener(
      "scroll",
      function (event) {
        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(function () {
          if (callback) {
            callback();
          }
          console.log("Scrolling has stopped.");
        }, 66);
      },
      false
    );
  }, []);
};
