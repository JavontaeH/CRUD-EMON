export const PokemonCard = ({ pokemon, handlePokemonClick }) => {
  return (
    <div
      className="pokemon-card-wrapper"
      onClick={() => handlePokemonClick(pokemon)}
    >
      <img src={pokemon.frontImg} />
    </div>
  );
};
