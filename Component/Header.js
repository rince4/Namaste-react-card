import { useState } from "react";
import { BGLOGO } from "../Util/Constance";
import { Link } from "react-router-dom";

function Header() {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="Header-container">
      <div>
        <img className="bg-logo" src={BGLOGO}></img>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/connect"> Connect</Link>
          </li>

          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <button
            className="btnlogin"
            onClick={() => {
              console.log(btnName);
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
}
export default Header;
