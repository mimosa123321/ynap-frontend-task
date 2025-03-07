import { useState, useEffect, useCallback } from "react";

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const listener = useCallback(() => {
    setScrollPosition(window.scrollY);
  }, []);

  const addScrollHandler = () => {
    window.addEventListener("scroll", listener);
  };

  const removeScrollHandler = () => {
    window.removeEventListener("scroll", listener);
  };

  useEffect(() => () => removeScrollHandler(), [removeScrollHandler]);

  return {
    scrollPosition,
    removeScrollHandler,
    addScrollHandler,
  };
};
