import React from "react";
import imageBg from "../../images/menu/townBg-effects.png";
import "./MainMenu.css";

export const MainMenu = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="button-wrapper">
          <h1>Battle Monsters</h1>
          <div className="top-buttons">
            <button>Hi</button>
            <button>Hi</button>
          </div>
          <button>Hi</button>
        </div>
        <img className="background-image" src={imageBg} alt="town background" />
      </div>
    </>
  );
};
