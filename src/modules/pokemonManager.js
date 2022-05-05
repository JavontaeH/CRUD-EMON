const remoteURL = "http://localhost:8088";

export const allPokemon = (currentUserId) => {
  return fetch(`${remoteURL}/pokemon/`).then((res) => res.json());
};

export const deletePokemon = (id) => {
  return fetch(`${remoteURL}/pokemon/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

export const addPokemon = (newPokemon) => {
  return fetch(`${remoteURL}/pokemon/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPokemon),
  }).then((res) => res.json());
};

export const editPokemon = (editedPokemon) => {
  return fetch(`${remoteURL}/pokemon/${editedPokemon.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedPokemon),
  }).then((data) => data.json());
};
