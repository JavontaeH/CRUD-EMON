import React, { useState, useEffect } from "react";
import * as get from "../../modules/pokemonManager.js";
import * as fetch from "../../modules/movesManager.js";
import { SelectCard } from "./SelectCard.js";
import "./CharSelection.css";

export const CharSelection = () => {
  const [pokemon, setPokemon] = useState([]);
  const [playerPokemon, setPlayerPokemon] = useState();
  const [enemyPokemon, setEnemyPokemon] = useState();

  const getPokemon = () => {
    return get.allPokemon().then((pokemon) => {
      setPokemon(pokemon);
    });
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
          />
        ))}
      </div>
    </div>
  );
};
