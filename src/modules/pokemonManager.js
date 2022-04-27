const remoteURL = "http://localhost:8088";

export const AllPokemon = (currentUserId) => {
  return fetch(`${remoteURL}/pokemon/?_expand=user`).then((res) => res.json());
};

export const deletePokemon = (id) => {
  return fetch(`${remoteURL}/pokemon/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};
