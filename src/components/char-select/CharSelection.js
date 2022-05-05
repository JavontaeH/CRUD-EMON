import React, { useState, useEffect } from "react";
import Navigate, { useNavigate } from "react-router-dom";
import * as get from "../../modules/pokemonManager.js";
import * as fetch from "../../modules/movesManager.js";
import { SelectCard } from "./SelectCard.js";
import "./CharSelection.css";

export const CharSelection = () => {
  const [pokemon, setPokemon] = useState([]);
  const [playerPokemon, setPlayerPokemon] = useState();
  const [enemyPokemon, setEnemyPokemon] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  const getPokemon = () => {
    return get.allPokemon().then((pokemon) => {
      setPokemon(pokemon);
    });
  };

  const buttonCheck = () => {
    if (playerPokemon && enemyPokemon) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };
  const handlePokemonClick = (pokemon) => {
    // watching for pokemon click and if it was the one already clicked

    if (!playerPokemon) {
      setPlayerPokemon(pokemon);
    } else if (!enemyPokemon) {
      setEnemyPokemon(pokemon);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  // call buttonCheck everytime state of playerPokemon or enemyPokemon changes.
  useEffect(() => {
    buttonCheck();
  }, [playerPokemon, enemyPokemon]);

  const handlePlayClicked = () => {
    fetch
      .getPokemonAttacks(playerPokemon.id)
      .then((pokemonAttacks) => {
        let playerPokemonWithAttacks = { ...playerPokemon };
        let attacksArr = [];
        pokemonAttacks.forEach((attack) => {
          if (attack.attack) {
            attacksArr.push(attack.attack);
          }
        });
        playerPokemonWithAttacks.attacks = attacksArr;
        sessionStorage.setItem(
          "playerPokemon",
          JSON.stringify(playerPokemonWithAttacks)
        );
      })
      .then(() => {
        fetch.getPokemonAttacks(enemyPokemon.id).then((pokemonAttacks) => {
          let enemyPokemonWithAttacks = { ...enemyPokemon };
          let attacksArr = [];
          pokemonAttacks.forEach((attack) => {
            if (attack.attack) {
              attacksArr.push(attack.attack);
            }
          });
          enemyPokemonWithAttacks.attacks = attacksArr;
          sessionStorage.setItem(
            "enemyPokemon",
            JSON.stringify(enemyPokemonWithAttacks)
          );
        });
      })
      .then(() => {
        setTimeout(initiateBattle, 1000);
      });
  };

  const initiateBattle = () => {
    navigate("/battle");
  };

  return (
    <div className="char-select-page-wrapper">
      <div className="select-pokemon-wrapper">
        {pokemon.map((pokeman) => (
          <SelectCard
            pokemon={pokeman}
            key={pokeman.id}
            handlePokemonClick={handlePokemonClick}
            playerPokemon={playerPokemon}
            enemyPokemon={enemyPokemon}
            setPlayerPokemon={setPlayerPokemon}
            setEnemyPokemon={setEnemyPokemon}
          />
        ))}
      </div>
      <div className="select-text">
        {playerPokemon && enemyPokemon ? (
          <h1>Ready To Battle?</h1>
        ) : (
          <h1>Choose A Pokemon!</h1>
        )}
      </div>
      <button
        className="battle-button"
        onClick={() => handlePlayClicked()}
        disabled={buttonDisabled}
      >
        <h1>Play!</h1>
      </button>
    </div>
  );
};
