import StaggeredText from '../components/staggeredText';
import {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation} from "framer-motion";


const skills = [
    {title: "Core", elements: ["JavaScript", "Java", "Python"]},
    {title: "Frameworks", elements: ["React", "Node", "Flask"]},
    {title: "Database & Libraries", elements: ["MongoDB", "Mongoose", "Redux", "Framer"]},
    {title: "Tools & Platforms", elements: ["Git", "Github", "Postman", "AWS-Basic"]},
];

function SkillCardLg() {
    const ref = useRef();
    const isInView = useInView(ref, {amount: 1, once: true});


    return(
        <>
        <div className=''>
        <motion.div 
                className=' lg:flex min-[570px]:mx-0 sm:flex-wrap lg:flex-row justify-around mt-20'
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{staggerChildren: 0.2}}
                ref={ref}
                >
                {skills.map((skill, index) => {
                    const revealAnimation = {
                    hidden: {opacity: 1, x:0,},
                    visible: {
                        opacity: 1,
                        x: (index * 350) - 500 ,
                        },
                    transition: {
                        duration: 500,
                    }
                    }
                    return (<motion.div
                    key={index - 4}
                    className={`inline-block md:flex-none md:absolute text-amber-50 text-2xl flex flex-col grow rounded-lg border-2 border-amber-50 md:w-64 md:h-96 mx-10 my-10 px-10 pt-5 pb-20 bg-background hover:bg-amber-50 hover:text-background`}
                    variants={revealAnimation}
                    >
                        <h2 className='text-center' >{skill.title}</h2>
                        <h3 className='mt-10'>{skill.elements.map((element) => (
                            <li className='list-none'>{element}</li>
                        ))}</h3>
                    </motion.div>
                )})}
                </motion.div>
        </div>

        
        
        </>
    )
}



export default SkillCardLg;