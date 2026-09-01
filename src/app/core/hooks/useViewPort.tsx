import { useEffect, useState } from "react";
const useViewPort = () => {
  const [screen, setScreen] = useState("mobile");

  useEffect(() => {
    const updateScreen = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setScreen("xl");
      } else if (width >= 1024) {
        setScreen("lg");
      } else if (width >= 768) {
        setScreen("md");
      } else if (width >= 640) {
        setScreen("sm");
      } else {
        setScreen("mobile");
      }
    };

    updateScreen();

    window.addEventListener("resize", updateScreen);

    return () => {
      window.removeEventListener("resize", updateScreen);
    };
  }, []);

  return { screen };
};

export default useViewPort;
