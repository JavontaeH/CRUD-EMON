import React, { useState, useEffect } from "react";
import "./Box.css";

export const Box = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const userId = parseInt(sessionStorage.getItem("poke_user"));

  useEffect(() => {
    const tempPokemon = {
      id: 1,
      userId: 1,
      name: "Ember",
      frontImg: "/images/pokemon/local-mon/ember/front.png",
      backImg: "/images/pokemon/local-mon/ember/back.png",
      type: "Fire",
    };
    setSelectedPokemon(tempPokemon);
  }, []);

  return (
    <>
      <div className="box-page-wrapper">
        {selectedPokemon.id ? (
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
                  <h3>No:{selectedPokemon?.id}</h3>
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
                      <div className="edit-button">Edit</div>
                      <div className="delete-button">Delete</div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="box-wrapper">
          <div className="box-buttons">
            <div className="create-button">Create</div>
            <div className="close-button">Delete</div>
          </div>
          <div className="box-display">
            <div className="pokemon-list"></div>
          </div>
        </div>
      </div>
    </>
  );
};
