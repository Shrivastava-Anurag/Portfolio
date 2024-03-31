import {useState, useEffect} from 'react';
import styled from 'styled-components'
import ReactCurvedText from 'react-curved-text'
import Skull from '../assets/skull.svg'
import { motion, useScroll } from "framer-motion"


const Top = () => {
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Update scrollX based on the scroll position
      const scrollPosition = window.scrollY;
      setScrollX(scrollPosition);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <motion.div  style={{
        // Apply the translation effect based on the scroll position
        transform: `rotate(${scrollX * 0.2}deg)`,
        transition: 'transform 0.3s ease-out', // Add a smooth transition effect
      }} className='fixed -bottom-20 -right-20 h-[290px] w-[290px]'>
    <ReactCurvedText
      width={370}
      height={300}
      cx={145}
      cy={145}
      rx={57}
      ry={57}
      startOffset={0}
      text="THINK 💀 DESIGN 💀 DEVELOP 💀 "
      textProps={{style: {fontSize: 22}}}
      reversed={true}
      svgProps={{className: ''}}
      tspanProps={{"dy": "-70"}}
      textPathProps={{"fill": "#fffbeb"}}
    />
    </motion.div>
    <a className='fixed w-72 -bottom-2 -right-[65px] hoverable' href='/Home'>
    <img className='' src={Skull}></img>
    </a>
     
{/* <ReactCurvedText
      width={370}
      height={300}
      cx={190}
      cy={120}
      rx={100}
      ry={100}
      startOffset={100}
      text="Design  Develop"
      textProps={{style: {fontSize: 25}}}
      svgProps={{className: 'absolute bottom-10 right-5'}}
      textPathProps={{"fill": "#fffbeb"}}
    /> */}
    </>

  )
}

export default Top;