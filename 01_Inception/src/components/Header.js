import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constents"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

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
              Online Status: {onlineStatus ? "🟢" : "🔴" }
            </li>
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
            <Link to="/grocery">Grocery</Link>
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

          </ul>
        </div>
      </div>
    );
  };

  export default Header;