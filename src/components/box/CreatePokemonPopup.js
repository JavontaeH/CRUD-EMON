import React, { useState, useEffect } from "react";
import * as fetch from "../../modules/movesManager.js";
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

  const [attacks, setAttacks] = useState([]);

  const [pokemonAttacks, setPokemonAttacks] = useState([]);

  useEffect(() => {
    fetch.getAllAttacks().then((attacks) => setAttacks(attacks));
  }, []);

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

  const handleAttacksChange = (evt) => {
    console.log(evt);
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
              <option key={type} value={type} id="type-dropdown-value">
                {type}
              </option>
            ))}
          </select>
          <label htmlFor="type">Pokemon Attack 1:</label>
          <select id="attack" defaultValue="N/A" onChange={handleAttacksChange}>
            <option>N/A</option>
            {attacks.map((attack) =>
              createdPokemon.type === attack.type ||
              attack.type === "normal" ? (
                <option
                  key={attack.id}
                  value={attack.id}
                  id="type-dropdown-value"
                >
                  {attack.name}
                </option>
              ) : (
                ""
              )
            )}
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
