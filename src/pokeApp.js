import React, { useState } from "react";
import { ApplicationViews } from "./ApplicationViews";

const PokeApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("nutshell_user") !== null
  );

  const setAuthUser = (user) => {
    sessionStorage.setItem("poke_user", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null);
  };

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null);
  };

  return (
    <>
      <ApplicationViews
        setAuthUser={setAuthUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        clearUser={clearUser}
      />
    </>
  );
};

export default PokeApp;
