import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const ProjectCard = ({ imageUrl, showInfo, title, content, tStack, github, webLink }) => {
    // const zIndex = showInfo ? 'z-10' : '-z-10';


  return (
    <>
    <div className="relative w-full hidden md:flex">
      <div
        className={`absolute top-0  bg-black bg-opacity-75 text-white p-4 w-80 h-full transition-transform duration-500 transform-gpu ${
          showInfo ? 'lg:translate-x-[690px] md:translate-x-[350px]' : 'translate-x-0'
        }`}
      >
        <div>
            <h1 className='text-2xl montserrat text-amber-50'>{title}</h1>
            <div className='mt-5 montserrat-thin'>
                <p>
                {content}
                </p>
            </div>
            <div className='absolute bottom-5 montserrat-thin'>
                <h2>Tech Stack :</h2>
                <p>{tStack}</p>
                <div className='flex flex-row mt-5'>
                <li className='list-none hoverable mr-10'><a target="_blank" rel="noopener noreferrer"  href={github}><FontAwesomeIcon icon={faGithub} style={{color: "#fffbeb",}} className='text-3xl' /></a></li>
                <li className='list-none hoverable'><a target="_blank" rel="noopener noreferrer"  href={webLink}><FontAwesomeIcon icon={faUpRightFromSquare} style={{color: "#fffbeb",}} className='text-3xl' /></a></li>
                </div>               
            </div>
        </div>
      </div>
      <div
        className={`w-full h-full rounded-lg overflow-hidden  transition-transform duration-500 transform-gpu ${showInfo ? '-translate-x-[200px]' : 'translate-x-0'}`}

      >
        <img className="" src={imageUrl}></img>
      </div>
    </div>

    <div className='relative md:hidden -z-10'>
    <div
// Image which will be above
  className={`w-full h-full rounded-lg overflow-hidden`}
>
      <img className="" src={imageUrl}></img>
      </div>
      <div
        className={`bg-black text-white p-4 w-full`}
      >
        {/* content to be shown below the image */}
        <div>
            <h1 className='text-xl montserrat text-amber-50'>{title}</h1>
            <div className='mt-2 text-sm montserrat-thin'>
                <p>
                {content}
                </p>
            </div>
            <div className='mt-2 text-md montserrat-thin'>
                <h2>Tech Stack :</h2>
                <p className='text-sm'>{tStack}</p>
                <div className='flex flex-row mt-5'>
                <li className='list-none hoverable mr-10'><a target="_blank" rel="noopener noreferrer"  href={github}><FontAwesomeIcon icon={faGithub} style={{color: "#fffbeb",}} className='text-xl' /></a></li>
                <li className='list-none hoverable'><a target="_blank" rel="noopener noreferrer"  href={webLink}><FontAwesomeIcon icon={faUpRightFromSquare} style={{color: "#fffbeb",}} className='text-xl' /></a></li>
                </div>               
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProjectCard;
