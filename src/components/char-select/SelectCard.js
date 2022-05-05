export const SelectCard = ({ pokemon, handlePokemonClick }) => {
  return (
    <div className="pokemon-card-container">
      <div
        className="select-card-wrapper"
        //   onClick={() => handlePokemonClick(pokemon)}
      >
        <div className="pokemon-card-content">
          <img className="select-pkmn-image" src={pokemon.frontImg} />
          <h1>{pokemon.name}</h1>
        </div>
        <img
          className="select-pkmn-type"
          src={`images/pokemon/types/${pokemon.type}.png`}
          alt={pokemon?.type}
        />
      </div>
    </div>
  );
};
