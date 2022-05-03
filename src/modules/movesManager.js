const remoteURL = "http://localhost:8088";

export const getAllAttacks = () => {
  return fetch(`${remoteURL}/attacks`).then((res) => res.json());
};

export const addAnAttack = (newPokemonAttack) => {
  return fetch(`${remoteURL}/pokemonAttacks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPokemonAttack),
  }).then((response) => response.json());
};
