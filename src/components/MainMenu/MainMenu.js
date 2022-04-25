import React from "react";
import imageBg from "../../images/menu/townBg-effects.png";
import "./MainMenu.css";

export const MainMenu = ({ isAuthenticated, setAuthUser }) => {
  if (isAuthenticated) {
    return (
      <>
        <div className="page-wrapper">
          <div className="button-wrapper">
            <div className="button-wrapper-content">
              <h1>Battle Monsters</h1>
              <div className="menu-buttons">
                <div className="play-button">
                  <button>Play</button>
                </div>
                <div className="logout-button">
                  <button>Logout</button>
                </div>
                <div className="box-button">
                  <button>Box</button>
                </div>
              </div>
            </div>
          </div>
          <img
            className="background-image"
            src={imageBg}
            alt="town background"
          />
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="page-wrapper">
          <div className="button-wrapper">
            <div className="button-wrapper-content">
              <h1>Battle Monsters</h1>
              <div className="menu-buttons">
                <div className="login-button">
                  <button>Login</button>
                </div>
                <div className="register-button">
                  <button>Register</button>
                </div>
                <div className="box-button">
                  <button>Box</button>
                </div>
              </div>
            </div>
          </div>
          <img
            className="background-image"
            src={imageBg}
            alt="town background"
          />
        </div>
      </>
    );
};
