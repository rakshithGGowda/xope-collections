import React from 'react'
import './Neckless.css'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const Neckless = () => {


    function parallax(event) {
        document.querySelectorAll(".image").forEach((shift) => {
          let position = shift.getAttribute("value");
          let x = (window.innerWidth - event.pageX * position) / 90;
          let y = (window.innerHeight - event.pageY * position) / 90;
            console.log(x,y)
          shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
      }


    return(
    <div className='container-neckless' >
      <MouseParallaxContainer resetOnLeave="true" >
      <MouseParallaxChild className = "image-wrapper-neckless" factorX={0.2} factorY={0.3} >
          <div className='image-neckless'></div>
        </MouseParallaxChild>
          <MouseParallaxChild  className='title-neckless' factorX={0.1} factorY={0.4} >
          <h2 >Neckless</h2>
        </MouseParallaxChild>
        </MouseParallaxContainer>
    </div>
    )
}


export default Neckless