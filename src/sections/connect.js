import React from 'react';
import Navbar from '../components/navbar';
import RocketSVG from '../assets/rocket1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Connect() {
    return(
        <>
        <div className='flex flex-row'>
        <div>
            <img className='size-3/4' src={RocketSVG} ></img>
        </div>
        <div className='flex flex-col mr-40'>
            <div className='whitespace-normal'>
                <h1 className='text-amber-50 montserrat text-8xl mb-0'>
                    Let's
                </h1>
                <h1 className='text-amber-50 montserrat text-8xl '>
                    Connect
                </h1>
            </div>
            <div className='flex flex-row list-none mt-20'>
                <li className='mr-10'><a href='#'><FontAwesomeIcon icon={faInstagram} style={{color: "#fffbeb",}} size='xl' bounce className='text-6xl' /></a></li>
                <li className='mr-10'><a href='#'><FontAwesomeIcon icon={faLinkedin} style={{color: "#fffbeb",}} size='xl' bounce className='text-6xl' /></a></li>
                <li className='mr-10'><a href='#'><FontAwesomeIcon icon={faGithub} style={{color: "#fffbeb",}} size='xl' bounce className='text-6xl' /></a></li>
                <li><a href='#'><FontAwesomeIcon icon={faEnvelope} style={{color: "#fffbeb",}} size='xl' className='text-6xl' /></a></li>
            </div>
        </div>

        </div>
        </>
    )
}

export default Connect;