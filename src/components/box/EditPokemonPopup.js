import React, { useState, useEffect } from "react";
import * as fetch from "../../modules/movesManager.js";
import "./Popup.css";

export const EditPokemonPopup = (props) => {
  const [editedPokemon, setEditedPokemon] = useState({
    id: props.id,
    userId: props.userId,
    name: props.name,
    frontImg: props.frontImg,
    backImg: props.backImg,
    type: props.type,
  });

  const [pokemonAttacks, setPokemonAttacks] = useState([{ attackId: 0 }]);
  const [attacks, setAttacks] = useState([]);

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

  useEffect(() => {
    let attackArr = [];
    fetch.getAllAttacks().then((attacks) => setAttacks(attacks));
    fetch.getPokemonAttacks(props.id).then((pokemonAttacks) =>
      pokemonAttacks.forEach((attack, index) => {
        attackArr[index] = {
          id: attack.id,
          attackId: attack.attackId,
        };
        setPokemonAttacks(attackArr);
      })
    );
  }, []);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...editedPokemon };
    stateToChange[evt.target.id] = evt.target.value;
    setEditedPokemon(stateToChange);
  };

  // dropdown attack event handler
  const handleAttacksChange = (evt) => {
    const stateToChange = [...pokemonAttacks];
    if (parseInt(evt.target.id) > pokemonAttacks.length - 1) {
      stateToChange[parseInt(evt.target.id)] = {
        attackId: parseInt(evt.target.value),
      };
    } else {
      stateToChange[parseInt(evt.target.id)] = {
        id: pokemonAttacks[evt.target.id].id,
        attackId: parseInt(evt.target.value),
      };
    }
    setPokemonAttacks(stateToChange);
  };

  const handleEditPokemon = () => {
    const uniqueValues = new Set(pokemonAttacks.map((v) => v.attackId));
    let filteredPokemonAttacks = pokemonAttacks.filter(function (el) {
      return el.attackId != 0;
    });

    if (filteredPokemonAttacks.length <= 0) {
      alert("You must choose at least one attack.");
      return;
    }
    if (uniqueValues.size < filteredPokemonAttacks.length) {
      alert(
        "You don't have to have 4 attacks, but you can only select the same attack once."
      );
      return;
    }
    if (
      editedPokemon.frontImg.startsWith("http") === false ||
      editedPokemon.backImg.startsWith("http") === false
    ) {
      alert("Please input a valid URL starting with http or https");
      return;
    }
    if (editedPokemon.name.length > 10) {
      alert("You are limited to 10 characters for a name, Gen 1 Baby.");
      return;
    } else {
      props.handleClose();
      props.editPokemon(editedPokemon, pokemonAttacks);
    }
  };

  return (
    <div className="popup-wrapper">
      <div className="popup-box">
        <div className="popup-input">
          <h2>Edit a Pokemon!</h2>
          <label htmlFor="name">Pokemon Name:</label>
          <input
            type="text"
            required
            autoFocus
            className="popup-input"
            placeholder="Pokemon Name:"
            onChange={handleFieldChange}
            id="name"
            value={editedPokemon.name}
          />

          <label htmlFor="backImg">
            Pokemon Front Image Url (Pixel Art is best):
          </label>
          <input
            type="text"
            required
            autoFocus
            className="popup-input"
            placeholder="Pokemon Front Image Url (100x100 or smaller is best):"
            onChange={handleFieldChange}
            id="frontImg"
            value={editedPokemon.frontImg}
          />

          <label htmlFor="backImg">
            Pokemon Back Image Url (Pixel Art is best):
          </label>
          <input
            type="text"
            required
            autoFocus
            className="popup-input"
            placeholder="Pokemon Back Image Url (100x100 or smaller is best):"
            onChange={handleFieldChange}
            id="backImg"
            value={editedPokemon.backImg}
          />

          <label htmlFor="type">Pokemon Type:</label>
          <select
            id="type"
            onChange={handleFieldChange}
            defaultValue={editedPokemon.type}
          >
            {arrOfTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <label htmlFor="type">Pokemon Attack 1:</label>
          <select
            key={`${Math.floor(Math.random() * 1000)}-min`}
            id="0"
            defaultValue={pokemonAttacks[0]?.attackId}
            onChange={handleAttacksChange}
          >
            <option value="0">N/A</option>
            {attacks.map((attack) => (
              <option
                key={attack.id}
                value={attack.id}
                id="type-dropdown-value"
              >
                {attack.name}
              </option>
            ))}
          </select>
          <label htmlFor="type">Pokemon Attack 2:</label>
          <select
            id="1"
            key={`${Math.floor(Math.random() * 1000)}-min`}
            defaultValue={pokemonAttacks[1]?.attackId}
            onChange={handleAttacksChange}
          >
            <option value={"0"}>N/A</option>
            {attacks.map((attack) => (
              <option
                key={attack.id}
                value={attack.id}
                id="type-dropdown-value"
              >
                {attack.name}
              </option>
            ))}
          </select>
          <label htmlFor="type">Pokemon Attack 3:</label>
          <select
            id="2"
            key={`${Math.floor(Math.random() * 1000)}-min`}
            defaultValue={pokemonAttacks[2]?.attackId}
            onChange={handleAttacksChange}
          >
            <option value={"0"}>N/A</option>
            {attacks.map((attack) => (
              <option
                key={attack.id}
                value={attack.id}
                id="type-dropdown-value"
              >
                {attack.name}
              </option>
            ))}
          </select>
          <label htmlFor="type">Pokemon Attack 4:</label>
          <select
            id="3"
            key={`${Math.floor(Math.random() * 1000)}-min`}
            defaultValue={pokemonAttacks[3]?.attackId}
            onChange={handleAttacksChange}
          >
            <option value={"0"}>N/A</option>
            {attacks.map((attack) => (
              <option
                key={attack.id}
                value={attack.id}
                id="type-dropdown-value"
              >
                {attack.name}
              </option>
            ))}
          </select>
          <div className="popup-buttons">
            <span
              className="create-popup-icon"
              onClick={() => handleEditPokemon(editedPokemon)}
            >
              <h3>Complete</h3>
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
