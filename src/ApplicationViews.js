import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { MainMenu } from "./components/MainMenu/MainMenu.js";

export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
  //   const PrivateOutlet = () => {
  //     return isAuthenticated ? <Outlet /> : <Navigate to="" />;
  //   };

  return (
    <>
      <Routes>
        <Route
          path=""
          element={
            <MainMenu
              isAuthenticated={isAuthenticated}
              setAuthUser={setAuthUser}
            />
          }
        />
      </Routes>
    </>
  );
};
