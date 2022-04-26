import React from "react";
import Navigate, { useNavigate } from "react-router-dom";
import imageBg from "../../images/menu/townBg-effects.png";
import playIcon from "../../images/menu/playPic.png";
import boxIcon from "../../images/menu/boxIcon.png";
import logoutIcon from "../../images/menu/logoutIcon.png";
import loginIcon from "../../images/menu/loginIcon.png";
import registerIcon from "../../images/menu/registerIcon.png";
import "./MainMenu.css";

export const MainMenu = ({ isAuthenticated, clearUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser();
    navigate("/home");
  };

  if (isAuthenticated) {
    return (
      <>
        <div className="menu-page-wrapper">
          <div className="button-wrapper">
            <div className="button-wrapper-content">
              <h1 className="menu-title">Battle Monsters</h1>
              <div className="top-menu-buttons">
                <div
                  className="menu-button"
                  onClick={() => navigate("/select")}
                >
                  <div className="button-img-container">
                    <img
                      className="button-icon"
                      src={playIcon}
                      alt="Play Icon"
                    />
                  </div>
                  <div className="button-text">Play</div>
                </div>
                <div className="menu-button" onClick={handleLogout}>
                  <div className="button-img-container">
                    <img
                      className="button-icon"
                      src={logoutIcon}
                      alt="Logout Icon"
                    />
                  </div>
                  Logout
                </div>
              </div>
              <div className="bottom-menu-buttons">
                <div className="menu-button" onClick={() => navigate("/box")}>
                  <div className="button-img-container">
                    <img className="button-icon" src={boxIcon} alt="Box Icon" />
                  </div>
                  Box
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="menu-page-wrapper">
          <div className="button-wrapper">
            <div className="button-wrapper-content">
              <h1 className="menu-title">Battle Monsters</h1>
              <div className="top-menu-buttons">
                <div className="menu-button" onClick={() => navigate("/login")}>
                  <div className="button-img-container">
                    <img
                      className="button-icon"
                      src={loginIcon}
                      alt="Login Icon"
                    />
                  </div>
                  <div className="button-text">Login</div>
                </div>
                <div
                  className="menu-button"
                  onClick={() => navigate("/register")}
                >
                  <div className="button-img-container">
                    <img
                      className="button-icon"
                      src={registerIcon}
                      alt="Register Icon"
                    />
                  </div>
                  <div className="button-text">Register</div>
                </div>
              </div>
              <div className="bottom-menu-buttons">
                <div className="menu-button" onClick={() => navigate("/box")}>
                  <div className="button-img-container">
                    <img className="button-icon" src={boxIcon} alt="Box Icon" />
                  </div>
                  <div className="button-text">Box</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};
