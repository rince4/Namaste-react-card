import { useState } from "react";
import { BGLOGO } from "../Util/Constance";

function Header() {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="Header-container">
      <div>
        <img className="bg-logo" src={BGLOGO}></img>
      </div>
      <div className="nav-bar">
        <ul>
          <li> About</li>
          <li> Connect</li>
          <li> Careers</li>
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
