import React from "react";
import imageBg from "../../images/menu/townBg-effects.png";
import playIcon from "../../images/menu/playPic.png";
import boxIcon from "../../images/menu/boxIcon.png";
import logoutIcon from "../../images/menu/logoutIcon.png";
import loginIcon from "../../images/menu/loginIcon.png";
import registerIcon from "../../images/menu/registerIcon.png";
import "./MainMenu.css";

export const MainMenu = ({ isAuthenticated, setAuthUser }) => {
  if (isAuthenticated) {
    return (
      <>
        <div className="page-wrapper">
          <div className="button-wrapper">
            <div className="button-wrapper-content">
              <h1>Battle Monsters</h1>
              <div className="top-menu-buttons">
                <div className="menu-button">
                  <div className="button-img-container">
                    <img
                      className="button-icon"
                      src={playIcon}
                      alt="Play Icon"
                    />
                  </div>
                  Play
                </div>
                <div className="menu-button">
                  <div className="button-img-container">
                    <img
                      className="button-icon"
                      src={logoutIcon}
                      alt="Box Icon"
                    />
                  </div>
                  Logout
                </div>
              </div>
              <div className="menu-button">
                <div className="button-img-container">
                  <img className="button-icon" src={boxIcon} alt="Box Icon" />
                </div>
                Box
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
