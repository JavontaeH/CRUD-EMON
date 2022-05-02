import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./Battle.css";

export const Battle = (props) => {
  const [attackType, setAttackType] = useState("Attack Type");
  const playerPokemonRef = useRef();
  const enemyPokemonRef = useRef();
  const enemyHpRef = useRef();
  const playerHpRef = useRef();
  // attacking pokemon obj
  const [playerPokemon, setPlayerPokemon] = useState({
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
        damage: 20,
      },
      {
        id: 2,
        name: "Thunder",
        type: "electric",
        damage: 35,
      },
    ],
  });
  // defending pokemon obj
  const [enemyPokemon, setEnemyPokemon] = useState({
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
        damage: 20,
      },
    ],
  });

  // function for animating each attack using gsap animations
  const animate = (attack) => {
    if (attack.name.toLowerCase() === "tackle") {
      const tl = gsap.timeline();
      tl.to(playerPokemonRef.current, {
        x: -60,
      })
        .to(playerPokemonRef.current, {
          x: +60,
          duration: 0.1,
          onComplete: () => {
            // enemy gets hit here
            if (enemyPokemon.hp - attack.damage < 0) {
              gsap.to(enemyHpRef.current, {
                width: 0 + "%",
              });
            } else {
              gsap.to(enemyHpRef.current, {
                width: enemyPokemon.hp - attack.damage + "%",
              });
            }

            // modify pokemon hp on attack hit during the animation
            enemyPokemon.hp = enemyPokemon.hp - attack.damage;
            setEnemyPokemon({ ...enemyPokemon });

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
    }
    if (attack.name.toLowerCase() === "thunder") {
      const tl = gsap.timeline();
      tl.to(playerPokemonRef.current, {
        x: -60,
      })
        .to(playerPokemonRef.current, {
          x: +60,
          duration: 0.1,
          onComplete: () => {
            // enemy gets hit here
            if (enemyPokemon.hp - attack.damage < 0) {
              gsap.to(enemyHpRef.current, {
                width: 0 + "%",
              });
            } else {
              gsap.to(enemyHpRef.current, {
                width: enemyPokemon.hp - attack.damage + "%",
              });
            }

            // modify pokemon hp on attack hit during the animation
            enemyPokemon.hp = enemyPokemon.hp - attack.damage;
            setEnemyPokemon({ ...enemyPokemon });
            console.log(enemyPokemon);

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
    }
  };

  // event handler for clicking pokemon attack
  const handleAttackClicked = (attack) => {
    animate(attack);
  };

  // event handlers for showing type when move is hovered
  const handleOnHover = (attackType) => {
    setAttackType(attackType);
  };

  const handleOnExit = () => {
    setAttackType("Attack Type");
  };

  return (
    <div className="battle-wrapper" id="header">
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
