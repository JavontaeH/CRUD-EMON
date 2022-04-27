import React, { useState, useEffect } from "react";
import "./Selected.css";
import "./BoxDisplay.css";

export const Box = () => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const userId = parseInt(sessionStorage.getItem("poke_user"));

  useEffect(() => {
    const ember = {
      id: 1,
      userId: 1,
      name: "Ember",
      frontImg: "/images/pokemon/local-mon/ember/front.png",
      backImg: "/images/pokemon/local-mon/ember/back.png",
      type: "Fire",
    };
    setSelectedPokemon(ember);
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
                  {userId === selectedPokemon.userId ? (
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
            <div className="close-button">
              <h3>Close Box</h3>
            </div>
          </div>
          <div className="box-display">
            <div className="pokemon-list"></div>
          </div>
        </div>
      </div>
    </>
  );
};
