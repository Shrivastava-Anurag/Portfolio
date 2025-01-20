import {useState, useEffect} from 'react';
import Navbar from '../components/navbar';
import RocketSVG2 from '../assets/rocket2.svg'
import Top from '../components/top';
import SoundButton from '../components/SoundButton'
import RiveImage from '../components/riveImage';
import ScrollMagic from 'scrollmagic';

function About() {
  const [scrollX, setScrollX] = useState(0);
  const webDev = 'WEB-DEVELOPER';

  useEffect(() => {

    const controller = new ScrollMagic.Controller();

    // Create a scene
    const scene = new ScrollMagic.Scene({
      triggerElement: '#trigger', // The element that triggers the pinning
      duration: 850,
      offset: 300 // Duration for which the element is pinned
    })
      .setPin('#pin') // The element to pin
      .addTo(controller); // Add the scene to the controller


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
      controller.destroy();
    };
  }, []);
    return (
      <>
      <div id='about'>
          <Top/>
        </div>
        <div>
          <Navbar />
        </div>
        <div className=' overflow-hidden flex flex-col justify-center mb-20'>
        <div>
            <img src={RocketSVG2} className='rotate-180 absolute top-0 size-4/5 mx-10 sm:m-0 sm:mx-20 md:size-1/2 md:mx-60 md:top-20 lg:hidden'></img>
        </div>
        <div className='mx-3 mb-60 mt-60 text-5xl max-[400px]:text-4xl sm:text-7xl md:text-8xl md:mx-10 md:mb-40 lg:text-name lg:mt-3 flex flex-col items-center '>
          <h1 style={{
        // Apply the translation effect based on the scroll position
        transform: `translateX(${0 - scrollX/2}px)`,
        transition: 'transform 0.5s ease-out', // Add a smooth transition effect
      }} className='text-amber-50 montserrat leading-tight lg:mr-96'>
            ANURAG
          </h1>

          <h1  style={{
        // Apply the translation effect based on the scroll position
        transform: `translateX(${scrollX/2}px)`,
        transition: 'transform 0.5s ease-out', // Add a smooth transition effect
      }}
      className='text-amber-50 montserrat leading-tight'>
            SHRIVASTAVA
          </h1>
          <h3 className='text-amber-50 text-2xl text-left  sm:text-4xl md:text-4xl md:ml-40 lg:text-5xl max-[1300px]:lg:ml-60 lg:ml-96 lg:pl-20 montserrat-thin text-center mr-0 '>
            {webDev.split('').map((char, index) => (
              <span key={index} style={{
        // Apply the translation effect based on the scroll position
        display: 'inline-block',
        transform: `translateY(${((30 - 2*index) * (0-scrollX))/20}px) `, //perspective(500px) rotateX(${scrollX * -0.7}deg) rotateY(${scrollX * -0.4}deg) rotateZ(${scrollX * 0.4}deg)
        transition: 'transform 0.3s ease-out', // Add a smooth transition effect
        // transitionDelay: `${index * 0.01}s`, // Adjust the delay duration as needed
      }}>{char}</span>
              ))}
          </h3>
          {/* <SoundButton/> */}
        </div>
        <div className='mt-10 md:mt-40 mx-10 md:mx-20   flex flex-col justify-center'>
          {/* <img
            className='w-9/12 mb-20 md:w-6/5 max-[1300px]:lg:w-1/2 lg:w-2/5  h-auto mx-auto mb-8'
            src={require('../assets/anurag.jpg')}
            alt='Anurag Shrivastava'
          /> */}

          <div id='trigger' className=''></div>
          <div id="pin" className=' flex flex-col items-center justify-center '>
          <RiveImage />
          
          

          <p className='text-left text-xl md:text-left text-amber-50 text-lg md:text-2xl max-[1300px]:lg:text-3xl max-[1400px]:lg:mx-20 lg:mx-80 font-sans font-light'>
            "Hello, I am Anurag Shrivastava, a <span className='font-medium'>MERN Stack</span> Developer, a coding enthusiast,
            and I love to code. I have made multiple projects using HTML/CSS,
            JavaScript, React, Node.js, MongoDB. <br></br> Welcome to my <span className='font-medium'>Portfolio!</span>"
          </p>
          <p className='mt-10 text-left text-xl md:text-left text-amber-50 text-lg md:text-2xl max-[1300px]:lg:text-3xl max-[1400px]:lg:mx-20 lg:mx-80 font-sans font-light'>
            With 2 years of experience and a strong foundation in web development,
            I'm a dedicated developer. I'm skilled in languages like JavaScript, HTML and CSS. I'm also experienced with Python and Java,
            and I'm enthusiastic about staying informed on the latest
            trends while eagerly embracing new technologies and frameworks.
          </p>
          </div>
        </div>
        </div>

      </>
    );
  }
  
export default About;
  