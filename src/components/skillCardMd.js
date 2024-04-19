import StaggeredText from '../components/staggeredText';
import {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation} from "framer-motion";


const skills = [
    {title: "Core", elements: ["JavaScript", "Java", "Python"]},
    {title: "Frameworks", elements: ["React.Js", "Node.Js", "Flask","Next.Js"]},
    {title: "Database & Libraries", elements: ["MongoDB", "Mongoose", "Redux", "Framer"]},
    {title: "Tools & Platforms", elements: ["Git", "Github", "Postman", "AWS-Basic"]},
];

function SkillCardMd() {
    const ref = useRef();
    const isInView = useInView(ref, {amount: 1,});


    return(
        <>
<div className=''>
        <motion.div 
                className='hidden md:flex min-[570px]:mx-0 sm:flex-wrap lg:flex-row justify-around'
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{staggerChildren: 0.2}}
                ref={ref}
                >
                {skills.map((skill, index) => {
                    const revealAnimation = {
                    hidden: {opacity: 1, x:0, y:0},
                    visible: {
                        opacity: 1,
                        x: (index % 2 == 0 ? 200 : -200),
                        y: ((index < 2 ? 0 : 1) * 350),
                        },
                    transition: {
                        duration: 1000,
                    }
                    }
                    return (<motion.div
                    key={index - 4}
                    className={`inline-block md:flex-none md:absolute text-amber-50 text-2xl flex flex-col grow rounded-lg border-2 border-amber-50 min-[550px]:w-40 md:w-64 mx-10 my-10 px-10 pt-5 pb-20 bg-background hover:bg-amber-50 hover:text-background`}
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



export default SkillCardMd;