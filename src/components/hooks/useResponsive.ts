import * as React from "react";

type ScreenType = "INITIAL" | "DESKTOP" | "TABLET" | "MOBILE";

export default () => {
  const [windowWidth, setWindowWidth] = React.useState(0);
  const [screenType, setScreenType] = React.useState<ScreenType>("INITIAL");

  React.useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return function cleanup() {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, [window.innerWidth]);

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth > 1300) {
      setScreenType("DESKTOP");
    } else if (window.innerWidth <= 1300 && windowWidth > 800) {
      setScreenType("TABLET");
    } else {
      setScreenType("MOBILE");
    }
  };

  return {
    windowWidth,
    screenType,
  };
};
