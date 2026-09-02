import { useState } from "react";
import { BGLOGO } from "../Util/Constance";
import { Link } from "react-router-dom";
import Online from "../Util/Online";

function Header() {
  const [btnName, setbtnName] = useState("Login");

  let onlineStatus = Online();

  return (
    <div className="flex justify-between bg-pink-50">
      <div>
        <img className="w-35" src={BGLOGO}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-3 py-2 px-4 rounded-full">
            <Link to="/"> Home</Link>
          </li>
          <li className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-3 py-2 px-4 rounded-full">
            <Link to="/about">About</Link>
          </li>
          <li className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-3 py-2 px-4 rounded-full">
            <Link to="/connect"> Connect</Link>
          </li>

          <li className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-3 py-2 px-4 rounded-full">
            <Link to="/careers">Careers</Link>
          </li>

          <li className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-3 py-2 px-4 rounded-full">
            Online Status {onlineStatus == true ? "on" : "off"}
          </li>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-3 py-2 px-4 rounded-full"
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
