import React, { useState, useEffect } from "react";
import "./Popup.css";

export const CreatePokemonPopup = (props) => {
  const [createdPokemon, setCreatedPokemon] = useState({
    userId: props.userId,
    name: "",
    frontImg: "",
    backImg: "",
    type: "normal",
    hp: 100,
  });

  const arrOfTypes = [
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dark",
    "dragon",
    "steel",
    "fairy",
  ];

  const handleFieldChange = (evt) => {
    const stateToChange = { ...createdPokemon };
    stateToChange[evt.target.id] = evt.target.value;
    setCreatedPokemon(stateToChange);
  };

  return (
    <div className="popup-wrapper">
      <div className="popup-box">
        <div className="popup-input">
          <h2>Build a Pokemon!</h2>
          <label htmlFor="name">Pokemon Name:</label>
          <input
            type="text"
            required
            autoFocus
            className="popup-input"
            onChange={handleFieldChange}
            id="name"
            value={createdPokemon.name}
          />
          <label htmlFor="frontImg">
            Pokemon Front Image Url (Pixel Art is best):
          </label>
          <input
            type="text"
            required
            autoFocus
            className="popup-input"
            onChange={handleFieldChange}
            id="frontImg"
            value={createdPokemon.frontImg}
          />
          <label htmlFor="backImg">
            Pokemon Back Image Url (Pixel Art is best):
          </label>
          <input
            type="text"
            required
            autoFocus
            className="popup-input"
            onChange={handleFieldChange}
            id="backImg"
            value={createdPokemon.backImg}
          />
          <label htmlFor="type">Pokemon Type:</label>
          <select id="type" onChange={handleFieldChange} defaultValue="normal">
            {arrOfTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <div className="popup-buttons">
            <span
              className="create-popup-icon"
              onClick={() => props.handleCreatePokemon(createdPokemon)}
            >
              <h3>Create</h3>
            </span>
            <span className="close-popup-icon" onClick={props.handleClose}>
              <h3>Cancel</h3>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
