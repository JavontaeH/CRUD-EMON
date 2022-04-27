import React, { useState, useEffect } from "react";
import * as get from "../../modules/pokemonManager.js";
import { PokemonCard } from "./PokemonCard.js";
import Navigate, { useNavigate } from "react-router-dom";
import "./Selected.css";
import "./BoxDisplay.css";

export const Box = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const userId = parseInt(sessionStorage.getItem("poke_user"));
  const navigate = useNavigate();

  const getPokemon = () => {
    return get.AllPokemon().then((pokemon) => {
      setPokemon(pokemon);
    });
  };

  const deletePokemon = (id) => {
    get
      .deletePokemon(id)
      .then(() => get.AllPokemon().then(setPokemon).then(setSelectedPokemon));
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const handlePokemonClick = (pokemon) => {
    // watching for pokemon click and if it was the one already clicked
    if (pokemon !== selectedPokemon) {
      setSelectedPokemon(pokemon);
    } else {
      setSelectedPokemon({});
    }
  };

  const handleDeleteClick = (pokemon) => {
    setSelectedPokemon({});
    deletePokemon(pokemon.id);
  };

  return (
    <>
      <div className="box-page-wrapper">
        {selectedPokemon?.id ? (
          <>
            <div className="selected-wrapper">
              <div className="selected-top-box">
                <div className="pokemon-frame">
                  <img
                    src={selectedPokemon?.frontImg}
                    alt={selectedPokemon?.name}
                  />
                </div>
              </div>
              <div className="selected-bottom-box">
                <div className="pokemon-info">
                  <h3 className="pokemon-No">No:{selectedPokemon?.id}</h3>
                  <h3>Name:{selectedPokemon?.name}</h3>
                  <h3 className="selected-pokemon-type-img">
                    Type:
                    <img
                      src={`images/pokemon/types/${selectedPokemon.type}.png`}
                      alt={selectedPokemon?.type}
                    />
                  </h3>
                </div>
                <div className="pokemon-info-buttons">
                  {userId === selectedPokemon.userId ? (
                    <>
                      <div className="edit-button">
                        <h3>Edit</h3>
                      </div>
                      <div
                        className="delete-button"
                        onClick={() => handleDeleteClick(selectedPokemon)}
                      >
                        <h3>Delete</h3>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="selected-wrapper">
              <div className="selected-top-box">
                <div className="pokemon-frame">
                  <img
                    src={"/images/pokemon/local-mon/undefined.png"}
                    alt={"???"}
                  />
                </div>
              </div>
              <div className="selected-bottom-box">
                <div className="pokemon-info">
                  <h3 className="pokemon-No">No:???</h3>
                  <h3>Name:???</h3>
                  <h3 className="selected-pokemon-type-img">
                    Type:
                    <img
                      src={`images/pokemon/types/undefined.png`}
                      alt={"???"}
                    />
                  </h3>
                </div>
                <div className="pokemon-info-buttons">
                  {userId === selectedPokemon?.userId ? (
                    <>
                      <div className="edit-button">
                        <h3>Edit</h3>
                      </div>
                      <div className="delete-button">
                        <h3>Delete</h3>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        <div className="box-wrapper">
          <div className="box-buttons">
            <div className="create-button">
              <h3>Create</h3>
            </div>
            <div className="close-button" onClick={() => navigate("/menu")}>
              <h3>Close Box</h3>
            </div>
          </div>
          <div className="box-display">
            <div className="pokemon-list">
              {pokemon.map((pokeman) => (
                <PokemonCard
                  pokemon={pokeman}
                  key={pokeman.id}
                  handlePokemonClick={handlePokemonClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
