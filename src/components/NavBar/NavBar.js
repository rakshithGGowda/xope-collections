import React from "react"
import './NavBar.css'

const NavBar = function() {
    return(
    <div className="navbar">
        <h2 className="logo">Xopy</h2>
        <div className="nav-options" >
            <span className="nav-button animate__animated animate__fadeInUp "style={{animationDelay:"2.5s"}} >Contact</span>
            <span className="nav-button animate__animated animate__fadeInUp animate__delay-2s" >Store</span>
            <span className="nav-button animate__animated animate__fadeInUp " style={{animationDelay:"1.5s"}} >About</span>
            <span className="nav-button animate__animated animate__fadeInUp animate__delay-1s"  >Collection</span>
        </div>
    </div>
    )
}

export default NavBar