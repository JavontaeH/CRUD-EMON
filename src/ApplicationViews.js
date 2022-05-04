import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { MainMenu } from "./components/main-menu/MainMenu.js";
import { Box } from "./components/box/Box";
import { Battle } from "./components/battle/Battle";

export const ApplicationViews = ({
  isAuthenticated,
  setAuthUser,
  clearUser,
}) => {
  const PrivateOutlet = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/menu" />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="battle" element={<Battle />} />
        </Route>

        <Route
          path="/menu"
          element={
            <MainMenu isAuthenticated={isAuthenticated} clearUser={clearUser} />
          }
        />
        <Route
          path="/box"
          element={<Box isAuthenticated={isAuthenticated} />}
        />
        <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route
          path="/register"
          element={<Register setAuthUser={setAuthUser} />}
        />
      </Routes>
    </>
  );
};
