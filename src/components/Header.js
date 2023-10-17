import { ReactComponent as HamburgerMenu } from "../images/hamburgerMenu.svg";
import { Link } from "react-router-dom";

export const Header = ({ title, onClick }) => {
  return (
    <div className="header-wrapper">
      <h1>
        <Link to="/">{title}</Link>
      </h1>

      <HamburgerMenu className="hamburger-menu-icon" onClick={onClick} />
    </div>
  );
};
