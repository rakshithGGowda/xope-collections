/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import "./LeftBar.css"


const SideBar = () => {
    return ( 
        <div className = "sidebar" >
            <div className="side-button-container animate__animated animate__fadeInRight animate__delay-1s"><a href = "" className = "side-button" > Neckless </a></div>
            <div className="side-button-container animate__animated animate__fadeInRight"style={{animationDelay:"1.5s"}}><a href = "" className = "side-button" > Bangles </a></div>
            <div className="side-button-container animate__animated animate__fadeInRight animate__delay-2s"><a href = "" className = "side-button" > Earnings </a></div>
            <div className="side-button-container animate__animated animate__fadeInRight"style={{animationDelay:"2.5s"}}><a href = "" className = "side-button" > Rings </a></div>
    </div>
    )
}



export default SideBar