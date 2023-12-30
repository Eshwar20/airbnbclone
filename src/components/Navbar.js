import React from "react";
import logo from "../images/airbnb.png"
import '../style.css'

function Navbar() {
    return(
        <nav>
            <img className="nav" src={logo} alt="Logo"/>
        </nav>
    )
}

 export default Navbar