import React, { useState, useEffect } from "react";
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

  const handleFieldChange = (evt) => {
    const stateToChange = { ...editedPokemon };
    stateToChange[evt.target.id] = evt.target.value;
    setEditedPokemon(stateToChange);
  };

  const handleEditPokemon = () => {
    if (
      editedPokemon.frontImg.startsWith("http") === false ||
      editedPokemon.backImg.startsWith("http") === false
    ) {
      alert("Please input a valid URL starting with http or https");
    }
    if (editedPokemon.name.length > 10) {
      alert("You are limited to 10 characters for a name, Gen 1 Baby.");
    } else {
      props.handleClose();
      props.editPokemon(editedPokemon);
    }
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
            value={editedPokemon.name}
          />
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
