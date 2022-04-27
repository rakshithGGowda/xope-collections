import React from 'react'
import './Bangles.css'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const Bangles = () => {


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
    <div className='container-bangles' >
      <MouseParallaxContainer resetOnLeave="true" >
      <MouseParallaxChild className = "image-wrapper-bangles" factorX={0.2} factorY={0.3} >
          <div className='image-bangles'></div>
        </MouseParallaxChild>
          <MouseParallaxChild  className='title-bangles' factorX={0.1} factorY={0.4} >
          <h2 >Bangles</h2>
        </MouseParallaxChild>
        </MouseParallaxContainer>
    </div>
    )
}



export default Bangles