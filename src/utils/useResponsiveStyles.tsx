import { useMediaQuery } from "react-responsive";

export const useResponsiveStyles = (styles: {
  readonly [key: string]: string;
}) => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 });
  const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 });
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });

  return {
    desktopOrLaptop: isDesktopOrLaptop ? styles["desktopOrLaptop"] : "",
    bigScreen: isBigScreen ? styles["bigScreen"] : "",
    mobile: isTabletOrMobile ? styles["mobile"] : "",
    tabletOrMobileDevice: isTabletOrMobileDevice
      ? styles["tabletOrMobileDevice"]
      : "",
    portrait: isPortrait ? styles["portrait"] : "",
  };
};
