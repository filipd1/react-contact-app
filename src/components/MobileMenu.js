import React from "react";
import { ReactComponent as ExitMenu } from "../images/exitMenu.svg";

export const MobileMenu = ({ onExitMenu, setForm }) => {
  return (
    <div className="mobile-menu">
      <ExitMenu
        className="hamburger-menu-icon exit-icon"
        onClick={onExitMenu}
      />
      <ul className="mobile-menu-list">
        <li className="mobile-menu-list-item">
          <a>Home</a>
        </li>
        <li className="mobile-menu-list-item">
          <a>Contacts</a>
        </li>
        <li className="mobile-menu-list-item">
          <a onClick={setForm}>Add Contact</a>
        </li>
        <li className="mobile-menu-list-item">
          <a>Help</a>
        </li>
        <li className="mobile-menu-list-item">
          <a>FAQ</a>
        </li>
      </ul>
    </div>
  );
};
