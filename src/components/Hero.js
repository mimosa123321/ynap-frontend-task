import React from "react";
import { useEffect, useState, useRef } from "react";
import { isMobileView } from "../utils/utils";
import "../styles/styles.scss";

const Hero = (props) => {
  const { scrollPosition } = props;
  const [positionY, setPositionY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [bgPosY, setBgPosY] = useState(1);
  const heroContainer = useRef(null);

  useEffect(() => {
    const speed = 0.2;
    const maxPosOffset = 30;
    const posY = parseFloat((scrollPosition * speed).toString());
    let opacity = 1;
    if (heroContainer.current) {
      const diff = scrollPosition - heroContainer.current.offsetTop;
      if (diff > 0) {
        opacity = 1 - diff * (1 / (heroContainer.current.offsetHeight * speed));
      }
    }
    setPositionY(posY > maxPosOffset ? maxPosOffset : posY);
    setOpacity(opacity < 0 ? 0 : opacity);
    setBgPosY(isMobileView() ? 0 : posY);
  }, [scrollPosition]);

  return (
    <div
      className="hero-container"
      style={{ backgroundPositionY: `-${bgPosY}px` }}
      ref={heroContainer}
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
