import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const playerPokemonRef = useRef();
const enemyPokemonRef = useRef();
const enemyHpRef = useRef();
const playerHpRef = useRef();

export const Animate = (attack) => {
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
          gsap.to(enemyHpRef.current, {
            width: enemyPokemon.hp - this.damage + "%",
          });

          enemyPokemon.hp = enemyPokemon.hp - this.damage;

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
