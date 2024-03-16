import React, { useEffect, useState } from 'react';
import '../index.css'; // Import your CSS file
import Octopus from '../assets/octopus.gif';

const CustomCursor = () => {
    useEffect(() => {
      const cursorRounded = document.querySelector('.rounded');
      const cursorPointed = document.querySelector('.pointed');
  
      const moveCursor = (e) => {
        const mouseY = e.clientY;
        const mouseX = e.clientX;
  
        cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      };
  
      window.addEventListener('mousemove', moveCursor);
  
      return () => {
        window.removeEventListener('mousemove', moveCursor);
      };
    }, []);
  
    return (
      <div>
        <img src={Octopus} className='cursor rounded'></img>
        <div className="cursor pointed"></div>
      </div>
    );
  };
  
  export default CustomCursor;
