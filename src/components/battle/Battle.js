import React, { useRef, useEffect } from "react";
import "./Battle.css";

export const Battle = (props) => {
  const pokemon = {
    name: "pokemon",
    img: "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
  };
  const pokemon2 = {
    name: "pokemon",
    img: "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif",
  };

  return (
    <div className="battle-wrapper">
      <div className="user-pokemon-wrapper">
        <div className="user-pokemon">
          <img src={`${pokemon2.img}`} />
        </div>
      </div>
      <div className="enemy-pokemon-wrapper">
        <div className="enemy-pokemon">
          <img src={`${pokemon.img}`} />
        </div>
      </div>
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
    </div>
  );
};
