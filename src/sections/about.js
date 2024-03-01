import React from 'react';
import Navbar from '../components/navbar';

function About() {
    return (
      <>
        <div>
          <Navbar />
        </div>
        <div className='mx-6 md:mx-40 my-20'>
          <h1 className='text-amber-50 text-name montserrat text-center md:text-left leading-tight'>
            ANURAG SHRIVASTAVA
          </h1>
          <h3 className='text-amber-50 text-3xl md:text-5xl montserrat-thin text-center md:text-right mr-0 md:mr-20'>
            WEB DEVELOPER
          </h3>
        </div>
        <div className='mt-10 md:mt-40 mx-6 md:mx-96 flex flex-col justify-center'>
          <img
            className='w-full md:w-2/4 h-auto mx-auto mb-8'
            src={require('../assets/anurag_pic.jpeg')}
            alt='Anurag Shrivastava'
          />
          <p className='text-center md:text-left text-amber-50 text-lg md:text-2xl mb-10 font-sans font-light'>
            Hello, I am Anurag Shrivastava, a MERN Stack Developer, a coding enthusiast,
            and I love to code. I have made multiple projects using HTML/Css,
            JavaScript, React, Node.js, MongoDB.
          </p>
          <p className='text-center md:text-left text-amber-50 text-lg md:text-2xl font-sans font-light'>
            With 4 years of experience and a strong foundation in web development,
            I'm a dedicated developer. I'm skilled in languages like JavaScript,
            TypeScript, and CSS, and I'm enthusiastic about staying informed on the latest
            trends while eagerly embracing new technologies and frameworks.
          </p>
        </div>
      </>
    );
  }
  
export default About;
  
