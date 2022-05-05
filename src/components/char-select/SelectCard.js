export const SelectCard = ({ pokemon, handlePokemonClick }) => {
  return (
    <div className="pokemon-card-container">
      <div
        className="select-card-wrapper"
        //   onClick={() => handlePokemonClick(pokemon)}
      >
        <div className="select-card-top-content">
          <img src={pokemon.frontImg} />
          <h2>{pokemon.name}</h2>
        </div>
        <div className="select-card-bottom-content">
          <img
            src={`images/pokemon/types/${pokemon.type}.png`}
            alt={pokemon?.type}
          />
        </div>
      </div>
    </div>
  );
};
