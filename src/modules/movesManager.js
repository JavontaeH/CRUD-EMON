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

export const getPokemonAttacks = (pokemonId) => {
  return fetch(
    `${remoteURL}/pokemonAttacks/?pokemonId=${pokemonId}&_expand=attack`
  ).then((res) => res.json());
};

export const editPokemonAttack = (obj) => {
  console.log(obj);
  return fetch(`${remoteURL}/pokemonAttacks/${obj.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((response) => response.json());
};
