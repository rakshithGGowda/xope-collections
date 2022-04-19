import React from 'react'
import './Neckless.css'


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
    <div className='container' >
        <div className = "image-wrapper" onMouseMove={parallax}>
            <div className='image'></div>
        </div>
        <h2 className='title'>Neckless</h2>
    </div>)
}


export default Neckless