import React, { useState, useEffect } from "react";
import "./Popup.css";

export const CreatePokemonPopup = (props) => {
  const [createdPokemon, setCreatedPokemon] = useState({
    userId: props.userId,
    name: "",
    frontImg: "",
    backImg: "",
    type: "fire",
  });

  const handleFieldChange = (evt) => {
    const stateToChange = { ...createdPokemon };
    stateToChange[evt.target.id] = evt.target.value;
    setCreatedPokemon(stateToChange);
  };

  return (
    <div className="popup-wrapper">
      <div className="popup-box">
        <div className="popup-input">
          <input
            type="text"
            required
            autoFocus
            className="popup-input"
            placeholder="Pokemon Name:"
            onChange={handleFieldChange}
            id="name"
            value={createdPokemon.name}
          />
          <input
            type="text"
            required
            autoFocus
            className="popup-input"
            placeholder="Pokemon Front Image Url (100x100 or smaller is best):"
            onChange={handleFieldChange}
            id="frontImg"
            value={createdPokemon.frontImg}
          />
          <input
            type="text"
            required
            autoFocus
            className="popup-input"
            placeholder="Pokemon Back Image Url (100x100 or smaller is best):"
            onChange={handleFieldChange}
            id="backImg"
            value={createdPokemon.backImg}
          />
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
