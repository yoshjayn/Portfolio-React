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
          title="Social Media WebApp"
          des=" Vistagram : A Vite + React Instagram clone with Tailwind CSS. Focus: Context API for state, REST API integration, and learning through iterative builds."
          src={projectTwo}
        />
        <ProjectsCard
          title="VIDEO STREAMING CLONE"
          des=" Experience streaming like never before with my Netflix Clone – a fully responsive web app that replicates the sleek interface and seamless performance of the world's leading entertainment platform."
          src={project1} 
        />
        <ProjectsCard
          title="Weather App"
          des=" This project focuses on fetching and displaying weather information for a specific location and handles various weather data points such as temperature, humidity, pressure, cloud cover, wind speed, and more,by parsing a JSON response from the API and displaying the relevant details"
          src={project3}
        />
        
      </div>
    </section>
  );
}

export default Projects