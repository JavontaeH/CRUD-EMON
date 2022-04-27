import React from "react";
import Navigate, { useNavigate } from "react-router-dom";
import "./MainMenu.css";

export const MainMenu = ({ isAuthenticated, clearUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearUser();
    navigate("/menu");
  };

  // ternary shows diff buttons if not logged in
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
                      src="images/menu/playPic.png"
                      alt="Play Icon"
                    />
                  </div>
                  <div className="button-text">Play</div>
                </div>
                <div className="menu-button" onClick={handleLogout}>
                  <div className="button-img-container">
                    <img
                      className="button-icon"
                      src="images/menu/logoutIcon.png"
                      alt="Logout Icon"
                    />
                  </div>
                  Logout
                </div>
              </div>
              <div className="bottom-menu-buttons">
                <div className="menu-button" onClick={() => navigate("/box")}>
                  <div className="button-img-container">
                    <img
                      className="button-icon"
                      src="images/menu/boxIcon.png"
                      alt="Box Icon"
                    />
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
                      src="images/menu/loginIcon.png"
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
                      src="images/menu/registerIcon.png"
                      alt="Register Icon"
                    />
                  </div>
                  <div className="button-text">Register</div>
                </div>
              </div>
              <div className="bottom-menu-buttons">
                <div className="menu-button" onClick={() => navigate("/box")}>
                  <div className="button-img-container">
                    <img
                      className="button-icon"
                      src="images/menu/boxIcon.png"
                      alt="Box Icon"
                    />
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
