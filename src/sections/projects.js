import React, { useState } from 'react';
import Divider from '../components/divider';
import StaggeredText from '../components/staggeredText';
import ProjectCard from '../components/projectCard';
import weConnectImage from '../assets/weconnect.jpeg';
import attendooImage from '../assets/attendoo.png';
import wekartImage from '../assets/wekart.png'
 
function Project() {
    const [projects, setProjects] = useState([        
        {
            title: "WeConnect",
            image: weConnectImage,
            content: "A MERN stack Social Media clone project made as a part of learning. You can make friends, post pictures, like posts and many more.",
            tStack: "React, Node, MongoDB, Redux, Express",
            github: "https://github.com/Shrivastava-Anurag/WeConnect",
            webLink: "https://connectwe.netlify.app",
            hover: false,
        },
        {
            title: "WeKart",
            image: wekartImage,
            content: "An Ecommerce website project made as a part of learning. Integrated product filters, admin side to handle orders, and add or remove products, along with payment integration.",
            tStack: "React, Node, MongoDB, Redux, Stripe",
            github: "https://github.com/Shrivastava-Anurag/WeKart",
            webLink: "",
            hover: false,
        },
        {
            title: "Attendoo",
            image: attendooImage,
            content: "A Personalised attendance product developed specifically for students working in RUBI for them to be able to check in only under certain conditions.",
            tStack: "React, Node, MongoDB, Redux",
            github: "https://github.com/Shrivastava-Anurag/Attendance-Manager",
            webLink: "https://attendoo.netlify.app/",
            hover: false,
        }
    ]);

    const toggleInfo = (index) => {
        const updatedProject = [...projects];
        updatedProject[index].hover = !updatedProject[index].hover;
        setProjects(updatedProject);
    };

    return(
        <>
            <div name="projects" className=' my-20'>
                <StaggeredText text='PROJECTS' />
                <div className='flex flex-col my-10'>
                    {projects.map((project, index) => (
                        <div key={index}>
                            <div className='flex justify-center'>
                                <div className='size-7/12'
                                    onMouseEnter={() => toggleInfo(index)}
                                    onMouseLeave={() => toggleInfo(index)}>
                                    <ProjectCard
                                        imageUrl={project.image}
                                        title={project.title}
                                        content={project.content}
                                        tStack={project.tStack}
                                        github={project.github}
                                        webLink={project.webLink}
                                        showInfo={project.hover}
                                    />
                                </div>
                            </div>
                            <div className=' px-10 md:px-64'>
                                <Divider />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Project;
