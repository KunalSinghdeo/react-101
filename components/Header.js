import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
const Header = () => {
  const [login, setLogin] = useState("login");

  return (
    <div className="header">
      <div className="logo-container">
        <img src={`${LOGO_URL}`} alt="logo-icon" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="Login"
            onClick={() => {
              login == "login" ? setLogin("logout") : setLogin("login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
