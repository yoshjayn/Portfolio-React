import React from 'react'
import Title from '../layouts/Title'
import { projectTwo, project1, project3  } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="VIDEO STREAMING CLONE"
          des=" Experience streaming like never before with my Netflix Clone – a fully responsive web app that replicates the sleek interface and seamless performance of the world's leading entertainment platform."
          src={project1} 
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Revolutionizing online shopping with a dynamic, user-friendly E-commerce Platform – optimized for performance, scalability, and a frictionless shopping experience from browse to checkout."
          src={projectTwo}
        />
        <ProjectsCard
          title="Ticket Booking App"
          des=" Showcasing creativity and code in perfect harmony – my Portfolio Website blends aesthetic design with cutting-edge development, serving as a gateway to my professional journey."
          src={project3}
        />
        
      </div>
    </section>
  );
}

export default Projects