import React, { useState, useEffect } from "react";
import * as get from "../../modules/pokemonManager.js";
import { addAnAttack, editPokemonAttack } from "../../modules/movesManager.js";
import { PokemonCard } from "./PokemonCard.js";
import Navigate, { useNavigate } from "react-router-dom";
import { CreatePokemonPopup } from "./CreatePokemonPopup.js";
import { EditPokemonPopup } from "./EditPokemonPopup.js";
import "./Selected.css";
import "./BoxDisplay.css";

export const Box = ({ isAuthenticated }) => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({});
  const userId = parseInt(sessionStorage.getItem("poke_user"));
  const navigate = useNavigate();
  const [showingUserMon, setShowingUserMon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);

  // fetch calls for CRUD w/ pokemon
  const getPokemon = () => {
    return get.allPokemon().then((pokemon) => {
      setPokemon(pokemon);
    });
  };

  const deletePokemon = (id) => {
    get
      .deletePokemon(id)
      .then(() => get.allPokemon().then(setPokemon).then(setSelectedPokemon));
  };

  const createPokemon = (pokemon, pokemonAttacks) => {
    let createPromArr = [];
    get
      .addPokemon(pokemon)
      .then((res) => {
        pokemonAttacks.forEach((attack) => {
          const pokemonAttacksObj = {
            pokemonId: res.id,
            attackId: attack.attackId,
          };
          createPromArr.push(addAnAttack(pokemonAttacksObj));
          return Promise.all(createPromArr);
        });
      })
      .then(() => get.allPokemon().then(setPokemon));
  };

  const editPokemon = (pokemon, pokemonAttacks) => {
    let editPromArr = [];
    get
      .editPokemon(pokemon)
      .then((res) => {
        pokemonAttacks.forEach((attack) => {
          if (!attack.id) {
            const pokemonAttacksObj = {
              pokemonId: res.id,
              attackId: attack.attackId,
            };
            addAnAttack(pokemonAttacksObj);
          } else {
            editPromArr.push(editPokemonAttack(attack));
            return Promise.all(editPromArr);
          }
        });
      })
      .then(() =>
        get
          .allPokemon()
          .then((pokemon) => {
            setPokemon(pokemon);
          })
          .then(() => setSelectedPokemon(pokemon))
      );
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

  // toggle for show user pokemon vs show all pokemon
  const handleUserPokemonClick = () => {
    if (showingUserMon === false) {
      get.allPokemon().then((pokemon) => {
        setPokemon(pokemon.filter((pokemon) => pokemon.userId === userId));
      });
      setShowingUserMon(true);
    }
    if (showingUserMon === true) {
      getPokemon();
      setShowingUserMon(false);
    }
  };

  // popup toggles
  const toggleCreatePopup = () => {
    setIsOpen(!isOpen);
  };

  const toggleEditPopup = () => {
    setEditIsOpen(!editIsOpen);
  };

  // event handler for create pokemon with conditionals, should be in the component tbh, but would require refactoring.
  const handleCreatePokemon = (pokemon, pokemonAttacks) => {
    const uniqueValues = new Set(pokemonAttacks.map((v) => v.attackId));
    let filteredPokemonAttacks = pokemonAttacks.filter(function (el) {
      return el.attackId !== 0;
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
    // if (
    //   pokemon.frontImg.startsWith("http") === false ||
    //   pokemon.backImg.startsWith("http") === false
    // ) {
    //   alert("Please input a valid URL starting with http or https");
    //   return;
    // }
    if (pokemon.name.length > 10) {
      alert("You are limited to 10 characters for a name, Gen 1 Baby.");
      return;
    } else {
      toggleCreatePopup();
      createPokemon(pokemon, pokemonAttacks);
    }
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
                      <div
                        className="edit-button"
                        onClick={() => toggleEditPopup()}
                      >
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
            {isAuthenticated ? (
              <div className="create-button" onClick={toggleCreatePopup}>
                <h3>Create</h3>
              </div>
            ) : (
              ""
            )}
            {showingUserMon === false ? (
              <div
                className="show-user-button"
                onClick={handleUserPokemonClick}
              >
                <h3>Show Your Pokemon</h3>
              </div>
            ) : (
              <div
                className="show-user-button"
                onClick={handleUserPokemonClick}
              >
                <h3>Show All Pokemon</h3>
              </div>
            )}
            <div className="close-button" onClick={() => navigate("/")}>
              <h3>Close Box</h3>
            </div>
          </div>
          {isOpen && (
            <CreatePokemonPopup
              handleClose={toggleCreatePopup}
              userId={userId}
              handleCreatePokemon={handleCreatePokemon}
            />
          )}
          {editIsOpen && (
            <EditPokemonPopup
              handleClose={toggleEditPopup}
              userId={userId}
              name={selectedPokemon.name}
              frontImg={selectedPokemon.frontImg}
              backImg={selectedPokemon.backImg}
              type={selectedPokemon.type}
              id={selectedPokemon.id}
              editPokemon={editPokemon}
            />
          )}
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
