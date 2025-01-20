import React, { useEffect, useState, useRef} from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
import Anurag from "../components/portfolio.riv";

const RiveImage = () => {
    // Initialize Rive with the animation and state machine
    const { rive, RiveComponent } = useRive({
      src: Anurag,
      stateMachines: 'State Machine 1', // replace with your state machine name
      autoplay: true,
    });

    const componentRef = useRef(null);
  
    // Access the Scrollpct input
    const scrollInput = useStateMachineInput(rive, 'State Machine 1', 'Scrollpct', 0);

    const debounce = (func, wait) => {
      let timeout;
      return function (...args) {
        const context = this;
    
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
      };
    }
  
    useEffect(() => {
      if (scrollInput) {
        // Define the debounced scroll handler
        const handleScroll = debounce(() => {
        const scrollY = window.scrollY;
        scrollInput.value = (scrollY - 700) / 8;
        }, 10); // Adjust the debounce delay as needed (100ms in this example)
  
        // Attach the scroll event listener
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              window.addEventListener('scroll', handleScroll);
            } else {
              window.removeEventListener('scroll', handleScroll);
            }
          },
          { threshold: 0.1 } // Adjust threshold as needed
        );
    
        if (componentRef.current) {
          observer.observe(componentRef.current);
        }
  
        // Clean up the event listener on component unmount
        return () => {
          observer.disconnect();
          window.removeEventListener('scroll', handleScroll);
        };
      }
    }, [scrollInput]);
  
    return (
      <div className="" style={{ width: '80%', height: '80vh' }}  ref={componentRef}>
        <RiveComponent 
        />
      </div>
    );
  };

export default RiveImage;