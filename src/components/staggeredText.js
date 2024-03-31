import {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation} from "framer-motion";


function StaggeredText(word) {
    const {text} = word;
    const ref = useRef();
    const isInView = useInView(ref, {amount: 0.5});
    const revealAnimation = {
        hidden: {opacity: 0, x:20},
        visible: {
            opacity: 1,
            x: 0,
        }
    }

    return(
        <>
            <div className='flex justify-center mb-20' >
                <motion.h1 
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{staggerChildren: 0.1}}
                className='text-amber-50 text-7xl sm:text-8xl md:text-9xl lg:text-name montserrat-title leading-tight'>
                {text.split('').map((char, index) => (
                    <motion.span className='inline-block' key={index} variants={revealAnimation}>
                    {char}
                    </motion.span>
                ))}
                </motion.h1>
            </div>
        </>
    )
}



export default StaggeredText;