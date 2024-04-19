import StaggeredText from '../components/staggeredText';
import {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation} from "framer-motion";
import SkillCardLg from '../components/skillCardLg';
import SkillCardMd from '../components/skillCardMd';


const skills = [
    {title: "Core", elements: ["JavaScript", "Java", "Python"]},
    {title: "Frameworks", elements: ["React", "Node", "Flask", "Next"]},
    {title: "Database & Libraries", elements: ["MongoDB", "Mongoose", "Redux", "Framer"]},
    {title: "Tools & Platforms", elements: ["Git", "Github", "Postman", "AWS-Basic"]},
];

function Skills() {
    // const ref = useRef(); // same as below
    // const isInView = useInView(ref, {amount: 1}); not used here because I've made components for the cards animation


    return(
        <>
        <div id='skills' className='mx-10 mt-0 mb-0 md:my-20 flex flex-col md:mb-[700px] lg:mb-[600px]'>

            <StaggeredText text='SKILLS' />

            <div className='md:hidden flex flex-wrap min-[425px]:mx-10 min-[510px]:mx-20 min-[570px]:mx-0 sm:flex-wrap lg:flex-row justify-around mt-0 md:mt-20'>
            {skills.map((skill) => (
                <div className='text-amber-50 text-2xl flex flex-col md: grow rounded-lg border-2 border-amber-50 min-[550px]:w-40 min-[800px]:w-60 lg:w-20 lg:h-100 mx-10 my-10 px-10 pt-5 pb-20 bg-background hover:bg-amber-50 hover:text-background'>
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
            
            {/* for medium screens */}
            <div className='hidden min-[1280px]:block'>
            <SkillCardLg />
            </div>
            {/* for large screens */}
            <div className='hidden md:block min-[1280px]:hidden'>
                <SkillCardMd />
            </div>  

        </div>

        
        
        </>
    )
}



export default Skills;