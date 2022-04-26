import React from "react";
import "./Box.css";
import tempImg from "../../images/pokemon/local-mon/ember/front.png";

export const Box = () => {
  const tempPokemon = {
    id: 1,
    userId: 1,
    name: "Ember",
    img: tempImg,
    type: "Fire",
  };

  return (
    <>
      <div className="box-page-wrapper">
        <div className="selected-wrapper">
          <div className="selected-top-box">
            <div className="pokemon-frame">
              <img src={tempPokemon.img} alt={tempPokemon.name} />
            </div>
          </div>
          <div className="selected-bottom-box">
            <div className="pokemon-info">
              <h3>No:{tempPokemon.id}</h3>
              <h3>Name:{tempPokemon.name}</h3>
              <h3 className="selected-pokemon-type-img">
                Type:
                <img
                  src={require(`../../images/pokemon/types/${tempPokemon.type}.png`)}
                  alt={tempPokemon.type}
                />
              </h3>
            </div>
            <div className="pokemon-info-buttons">
              <div className="edit-button"></div>
              <div className="delete-button"></div>
            </div>
          </div>
        </div>
        <div className="box-wrapper">
          <div className="box-buttons">
            <div className="create-button"></div>
            <div className="close-button"></div>
          </div>
          <div className="box-display">
            <div className="pokemon-cards"></div>
          </div>
        </div>
      </div>
    </>
  );
};
