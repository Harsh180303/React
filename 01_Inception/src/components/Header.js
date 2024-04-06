import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constents"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux"

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)
  
    return (
      <div className="flex justify-between px-8 items-center shadow-md rounded-b-lg mb-4">
        <div className="logo-container">
          <img className="w-24" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul className="flex gap-6 font-bold">
            <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
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

            <li className="cursor-pointer">
              <Link to="/cart">Cart - ({cartItems.length} items)</Link>
            </li>

            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
                // console.log(btnName);   //check
              }}
            >
              {btnName}
            </button>

            <li className="font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;