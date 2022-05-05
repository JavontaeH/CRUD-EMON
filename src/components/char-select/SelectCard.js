export const SelectCard = ({ pokemon, handlePokemonClick }) => {
  return (
    <div className="pokemon-card-container">
      <div
        className="select-card-wrapper"
        //   onClick={() => handlePokemonClick(pokemon)}
      >
        <img src={pokemon.frontImg} />
        <h2>{pokemon.name}</h2>
        <img
          src={`images/pokemon/types/${pokemon.type}.png`}
          alt={pokemon?.type}
        />
      </div>
    </div>
  );
};
