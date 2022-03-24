import React from "react"
import "./Hero.css"

const Hero = () => {
    return(
        <div className="hero">
            <div className="title-container">
                <div className="X animate__animated animate__fadeInUp animate__delay-1s">X</div><div style={{fontSize:"4vw",animationDelay:"1.7s"}} className="animate__animated animate__fadeIn">OPY</div>
                <div className="C animate__animated animate__fadeInUp" style={{marginLeft:"1.2vw",animationDelay:"2.5s"}} >C</div><div style={{fontSize:"4vw",animationDelay:"3.2s",animationDuration:"2s"}} className="animate__animated animate__fadeIn"> OLLECTION</div></div>
            <div>
                <img></img>
            </div>
        </div>
    )
}


export default Hero