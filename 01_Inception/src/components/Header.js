import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constents"

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>

            <button
              className="login"
              onClick={() => {
                  btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                // console.log(btnName);   //check
              }}
            >
              {btnName}
            </button>

            {/* <button
              className="login"
              onClick={() => {
                setBtnName("Logout")
              }}
            >
              {btnName}
            </button> */}
          </ul>
        </div>
      </div>
    );
  };

  export default Header;