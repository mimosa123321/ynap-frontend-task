import { useEffect, useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { isMobileView } from "../utils/utils";
import "../styles/styles.scss";

const Hero = () => {
  const { scrollPosition, addScrollHandler } = useScroll();
  const [positionY, setPositionY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [bgPosY, setBgPosY] = useState(1);

  useEffect(() => {
    addScrollHandler();
  }, []);

  useEffect(() => {
    const posY = parseFloat((scrollPosition * 0.2).toString());
    const opacity = parseFloat((1 / (scrollPosition * 0.02)).toString());
    setPositionY(posY > 30 ? 30 : posY);
    setOpacity(opacity > 1 ? 1 : opacity);
    setBgPosY(isMobileView() ? 0 : posY);
  }, [scrollPosition]);

  return (
    <div
      className="hero-container"
      style={{ backgroundPositionY: `-${bgPosY}px` }}
    >
      <div className="hero-container-cover" style={{ opacity: `${opacity}` }}>
        <div
          className="contents"
          style={{ transform: `translate3d(0, ${positionY}px, 0)` }}
        >
          <div className="type">cover story</div>
          <div className="title">standing strong</div>
          <div className="author">
            <i>
              with
              <br />
              Danal Gurlen
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
