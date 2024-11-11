import React, { useState } from "react";
import Style from './HomePage.module.css';

const HomePage = () => {
  const [parallaxStyle, setParallaxStyle] = useState("50%, 50%, 50%");
  const [isMoving, setIsMoving] = useState(false);
  const _w = window.innerWidth/2;  // Window width center (can adjust)
  const _h = window.innerHeight/2; // Window height center (can adjust)

  function moveParallax(ev) {
    setIsMoving(true);
    const _mouseX = ev.clientX;
    const _mouseY = ev.clientY;

    const _depth1 = `${50 - (_mouseX - _w) * -0.003}% ${50 - (_mouseY - _h) * -0.003}%`;
    const _depth2 = `${50 - (_mouseX - _w) * -0.02}% ${50 - (_mouseY - _h) * -0.02}%`;
    const _depth3 = `${50 - (_mouseX - _w) * -0.06}% ${50 - (_mouseY - _h) * -0.06}%`;

    setParallaxStyle(`${_depth3}, ${_depth2}, ${_depth1}`);
  };

  const resetParallax = () => {
    setIsMoving(false);
    setParallaxStyle("50%, 50%, 50%");
  };

  return (
    <div
      className={`${Style.HomepageBackground} ${isMoving ? "" : Style.transition}`}
      onMouseMove={(ev)=> moveParallax(ev)}
      onMouseLeave={resetParallax}
      style={{ backgroundPosition: parallaxStyle }}
    ></div>
  );
};

export default HomePage;
