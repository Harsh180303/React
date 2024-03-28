import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constents"
import { Link } from "react-router-dom";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  // console.log("Header Rendered")      //This shows whole Header component was reRendered when we click on login/logout button

  useEffect(() => {
    console.log("useEffect Called")
  }, [btnName])
  
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
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
            <Link to="/contact">Contact Us</Link>
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