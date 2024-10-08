import React, {useState} from "react";
import { LOGO_URL } from "../utils/constants";



export default function Header() {
const [btnLog, setBtnLog] = useState("Login");


    return (
      <div className = "header">
        <div id="logo-container">
            <img className = "logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login" onClick={()=> btnLog === "Login" ? setBtnLog("Logout") : setBtnLog("Login")}>{btnLog}</button>
              </ul>
        </div>
      </div>
    )
  }
  

