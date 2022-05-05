export const SelectCard = ({
  pokemon,
  handlePokemonClick,
  playerPokemon,
  enemyPokemon,
}) => {
  if (pokemon !== playerPokemon && pokemon !== enemyPokemon) {
    return (
      <div
        className="pokemon-card-container"
        onClick={() => handlePokemonClick(pokemon)}
      >
        <div className="select-card-wrapper">
          <div className="pokemon-card-content">
            <img className="select-pkmn-image" src={pokemon.frontImg} />
            <h1>{pokemon.name}</h1>
          </div>
          <img
            className="select-pkmn-type"
            src={`images/pokemon/types/${pokemon.type}.png`}
            alt={pokemon.type}
          />
        </div>
      </div>
    );
  }
  if (pokemon === playerPokemon) {
    return (
      <div
        className="player-pokemon-card-container"
        onClick={() => handlePokemonClick(pokemon)}
      >
        <div className="select-card-wrapper">
          <div className="pokemon-card-content">
            <img className="select-pkmn-image" src={pokemon.frontImg} />
            <h1>{pokemon.name}</h1>
          </div>
          <img
            className="select-pkmn-type"
            src={`images/pokemon/types/${pokemon.type}.png`}
            alt={pokemon.type}
          />
        </div>
      </div>
    );
  }
  if (pokemon === enemyPokemon) {
    return (
      <div
        className="enemy-pokemon-card-container"
        onClick={() => handlePokemonClick(pokemon)}
      >
        <div className="select-card-wrapper">
          <div className="pokemon-card-content">
            <img className="select-pkmn-image" src={pokemon.frontImg} />
            <h1>{pokemon.name}</h1>
          </div>
          <img
            className="select-pkmn-type"
            src={`images/pokemon/types/${pokemon.type}.png`}
            alt={pokemon.type}
          />
        </div>
      </div>
    );
  }
};
