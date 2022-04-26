import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { MainMenu } from "./components/main-menu/MainMenu.js";
import { Box } from "./components/box/Box";

export const ApplicationViews = ({
  isAuthenticated,
  setAuthUser,
  clearUser,
}) => {
  const PrivateOutlet = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/home" />;
  };

  console.log(isAuthenticated);

  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="box" element={<Box />} />
        </Route>

        <Route
          path="/home"
          element={
            <MainMenu isAuthenticated={isAuthenticated} clearUser={clearUser} />
          }
        />
        <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
