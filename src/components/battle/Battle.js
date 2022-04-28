import React, { useRef, useEffect } from "react";
import "./Battle.css";

export const Battle = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;

    // background image
    const bgImage = new Image();
    bgImage.src = "images/battle/battleBackground.png";
    bgImage.onload = () => {
      c.drawImage(bgImage, 0, 0);
    };

    const pikaImg = new Image();
    pikaImg.src =
      "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif";

    const pikaBackImg = new Image();
    pikaBackImg.src =
      "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif";

    // animation loop
    function animateBattle() {
      c.drawImage(pikaImg, 1500, 200, pikaImg.width * 3, pikaImg.height * 3);
      c.drawImage(pikaBackImg, 600, 600, pikaImg.width * 3, pikaImg.height * 3);
      window.requestAnimationFrame(animateBattle);
    }
    animateBattle();
  }, []);

  return (
    <div className="battle-wrapper">
      <div className="attack-interface-wrapper">
        <div className="attack-options">
          <button>Attack 1</button>
          <button>Attack 2</button>
          <button>Attack 3</button>
          <button>Attack 4</button>
        </div>
        <div className="attack-type">
          <h1>Attack Type</h1>
        </div>
      </div>
      <canvas ref={canvasRef} />
    </div>
  );
};
