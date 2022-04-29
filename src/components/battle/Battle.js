import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./Battle.css";

export const Battle = (props) => {
  const [attackType, setAttackType] = useState("Attack Type");
  const playerPokemonRef = useRef();
  const enemyPokemonRef = useRef();
  const enemyHpRef = useRef();
  const playerHpRef = useRef();

  const playerPokemon = {
    name: "Pikachu",
    frontImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif",
    backImg:
      "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif",
    hp: 100,
    attacks: [
      {
        id: 1,
        name: "Tackle",
        type: "normal",
        animation: function () {
          const tl = gsap.timeline();
          tl.to(playerPokemonRef.current, {
            x: -60,
          })
            .to(playerPokemonRef.current, {
              x: +60,
              duration: 0.1,
              onComplete: () => {
                // enemy gets hit here
                gsap.to(enemyHpRef.current, {
                  width: enemyPokemon.hp - this.damage + "%",
                });

                enemyPokemon.hp = enemyPokemon.hp - this.damage;
                console.log(enemyPokemon.hp);

                gsap.to(enemyPokemonRef.current, {
                  x: 15,
                  yoyo: true,
                  repeat: 5,
                  duration: 0.08,
                });

                gsap.to(enemyPokemonRef.current, {
                  opacity: 0,
                  repeat: 5,
                  yoyo: true,
                  duration: 0.08,
                });
              },
            })
            .to(playerPokemonRef.current, {
              x: +0,
            });
        },
        damage: 10,
      },
      {
        id: 2,
        name: "Thunder",
        type: "electric",
        damage: 50,
      },
    ],
  };
  const enemyPokemon = {
    name: "Charizard",
    frontImg:
      "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
    backImg:
      "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif",
    hp: 100,
    attacks: [
      {
        id: 1,
        name: "Tackle",
        type: "normal",
        damage: 10,
      },
    ],
  };

  const handleAttackClicked = (attack) => {
    attack.animation();
  };

  const handleOnHover = (attackType) => {
    setAttackType(attackType);
  };

  const handleOnExit = () => {
    setAttackType("Attack Type");
  };

  return (
    <div className="battle-wrapper">
      <div className="user-pokemon-wrapper">
        <div className="user-pokemon">
          <img ref={playerPokemonRef} src={`${playerPokemon.backImg}`} />
        </div>
      </div>
      <div className="enemy-pokemon-wrapper">
        <div className="enemy-pokemon">
          <img ref={enemyPokemonRef} src={`${enemyPokemon.frontImg}`} />
        </div>
      </div>
      <div className="enemy-health-interface-wrapper">
        <h2>{`${enemyPokemon.name}`}</h2>
        <div className="enemy-hp-wrapper">
          <div className="enemy-hp-grey"></div>
          <div className="enemy-hp-green" ref={enemyHpRef}></div>
        </div>
      </div>
      <div className="player-health-interface-wrapper">
        <h2>{`${playerPokemon.name}`}</h2>
        <div className="player-hp-wrapper">
          <div className="player-hp-grey"></div>
          <div className="player-hp-green" ref={playerHpRef}></div>
        </div>
      </div>
      <div className="attack-interface-wrapper">
        <div className="attack-options">
          {playerPokemon.attacks.map((attack) => (
            <button
              key={attack.id}
              onMouseEnter={() => handleOnHover(attack.type)}
              onMouseLeave={() => handleOnExit()}
              onClick={() => handleAttackClicked(attack)}
            >
              {attack.name}
            </button>
          ))}
        </div>
        <div className="attack-type">
          {attackType === "Attack Type" ? (
            <h1>{attackType}</h1>
          ) : (
            <img
              src={`/images/pokemon/types/${attackType}.png`}
              alt={"Attack Type"}
            />
          )}
        </div>
      </div>
    </div>
  );
};
