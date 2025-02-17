import React, {useState} from 'react';
import RocketSVG from '../assets/rocket1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}





function Connect() {
    // const [isHover, setIsHover] = useState(false);

    const [icons, setIcons] = useState([
        { title: faInstagram, hover: false, link: 'https://www.instagram.com/anurag._.shrivastava/'},
        { title: faLinkedin, hover: false, link: 'https://www.linkedin.com/in/shriv-anurag/' },
        { title: faGithub, hover: false, link: 'https://github.com/Shrivastava-Anurag'},
        { title: faEnvelope, hover: false, link: 'mailto:anuragbd28012003@gmail.com' },
        { title: faXTwitter, hover: false, link: 'https://twitter.com/shriv_anurag'}
      ]);

    const toggleHover = (index) => {
        const updatedIcons = [...icons];
        updatedIcons[index].hover = !(updatedIcons[index].hover );
        setIcons(updatedIcons);
      };
    

    return(
        <>
        <div name='contact' className='flex flex-col items-center md:items-extend mt-20 md:flex-row'>
        <div className='mx-20 mb-20'>
            <img className=' h-90 w-auto min-[550px]:w-80 md:w-auto' src={RocketSVG} ></img>
        </div>
        <div className='flex flex-col items-center md:mr-10'>
            <div className='whitespace-normal leading-none text-4xl sm:text-5xl md:text-8xl md:px-10'>
                <h1 className='text-amber-50 montserrat mb-0'>
                    Let's
                </h1>
                <h1 className='text-amber-50 hover:-rotate-12 montserrat'>
                    Connect!!!
                </h1>
            </div>
            <div className='flex flex-row list-none my-10'>
            {icons.map((element, index) => (
                <li key={index} className='mx-5 hoverable'>
                <a href={element.link} target="_blank" rel="noopener noreferrer" onMouseEnter={() => toggleHover(index)} onMouseLeave={() => toggleHover(index)}>
                <FontAwesomeIcon icon={element.title} style={{color: "#fffbeb",}} className={classNames(element.hover ? 'fa-bounce' : '', 'text-3xl', 'md:text-5xl')} />
                </a>
                </li>   
            ))}
            </div>

            {/* <div className='flex flex-row list-none mt-10 mx-10'>
                <li className='mr-10'><a href='#' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}><FontAwesomeIcon icon={faInstagram} style={{color: "#fffbeb",}} className={classNames(isHover ? 'fa-bounce' : '')} /></a></li>
                <li className='mr-10'><a href='#' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}><FontAwesomeIcon icon={faLinkedin} style={{color: "#fffbeb",}} className={classNames(isHover ? 'fa-bounce' : '')} /></a></li>
                <li className='mr-10'><a href='#'><FontAwesomeIcon icon={faGithub} style={{color: "#fffbeb",}} className='text-2xl' /></a></li>
                <li><a href='#'><FontAwesomeIcon icon={faEnvelope} style={{color: "#fffbeb",}} className='text-2xl' /></a></li>
            </div> */}
        </div>

        </div>
        </>
    )
}

export default Connect;