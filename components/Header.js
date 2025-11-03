import { LOGO_URL } from "../utils/constants";
const Header = () => {

  return (
    <div className="header">
      <div className="logo-container">
        <img src={`${LOGO_URL}`} alt="logo-icon" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="Login">Login</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
