import {useEffect} from 'react';
import Navbar from '../components/navbar';
import slidingTape from '../components/slidingTape';
import { motion, useInView, useAnimation} from "framer-motion";

const skills = [
    {title: "Core", elements: ["JavaScript", "Java", "Python"]},
    {title: "Frameworks", elements: ["React", "Node", "Flask"]},
    {title: "Database & Libraries", elements: ["MongoDB", "Mongoose", "Redux", "Framer"]},
    {title: "Tools & Platforms", elements: ["Git", "Github", "Postman", "AWS-Basic"]},
];

const skill = "SKILLS"

function Skills() {
    const controls = useAnimation();
    const { ref, inView } = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start(i => ({
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
            delay: i * 0.1 // Adjust the delay between each letter
          }
        }));
      }
    }, [controls, inView]);
    return(
        <>
        <div className='mx-10 my-20 flex flex-col'>
            <div className='flex justify-center' ref={ref}>
                <h1 className='text-amber-50 text-7xl sm:text-8xl md:text-9xl lg:text-name montserrat-title leading-tight'>{skill.split('').map((element, index) => (
                    <motion.span key={index} 
                    initial={{ opacity: 0, x: 20 }}
              animate={controls}
              style={{ display: 'inline-block', marginRight: '0.25rem' }}
                    viewport={{once: true}}
                    >
                    {element}
                    </motion.span>
                ))}</h1>
            </div>
            <div className='flex flex-wrap min-[425px]:mx-10 min-[510px]:mx-20 min-[570px]:mx-0 sm:flex-wrap lg:flex-row justify-around mt-20'>
            {skills.map((skill) => (
                <div className='text-amber-50 text-2xl flex flex-col md:    grow rounded-lg border-2 border-amber-50 min-[550px]:w-40 min-[800px]:w-60 lg:w-20 lg:h-100 mx-10 my-10 px-10 pt-5 pb-20 bg-background hover:bg-amber-50 hover:text-background'>
                    <h2 className='text-center' >{skill.title}</h2>
                    <h3 className='mt-10'>{skill.elements.map((element) => (
                        <li className='list-none'>{element}</li>
                    ))}</h3>
                </div>
            ))}

                {/* <div>
                    <h3 className='text-amber-50 text-2xl rounded-lg border-2 border-amber-50 mx-10 p-20 hover:bg-background'>Frameworks <br></br> React <br></br>Node.js <br></br>Flask</h3>
                </div>
                <div>
                    <h3 className='text-amber-50 text-2xl rounded-lg border-2 border-amber-50 mx-10 p-20'>Databases & Libraries <br></br> MongoDb <br></br> Mongoose <br></br>Redux<br></br>Framer</h3>
                </div>
                <div>
                    <h3 className='text-amber-50 text-2xl rounded-lg border-2 border-amber-50 mx-10 p-20'>Tools & Platforms <br></br> Git <br></br>Github <br></br>Postman<br></br>AWS-Basic</h3>
                </div> */}
            </div>
        </div>
        
        </>
    )
}

export default Skills;