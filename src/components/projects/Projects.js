import Title from '../layouts/Title'
import ProjectCarousel from './ProjectCarousel';

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
        {/* <ProjectsCard
          title="Vistagram : Social"
          des=" A Vite + React Instagram clone with Tailwind CSS. Focus: Context API for state, REST API integration, authentication, reusable components, and learning through iterative builds and real-world feature development."
          src={projectTwo}
          git="https://github.com/yoshjayn/Instagram-clone"
          live="https://instagram-clone-orcin-seven.vercel.app/"
        />
        <ProjectsCard
          title="VIDEO STREAMING CLONE"
          des=" Experience streaming like never before with my Netflix Clone – a fully responsive web app that replicates the sleek interface and seamless performance of the world's leading entertainment platform."
          src={project1} 
          git="https://github.com/yoshjayn/Netflix-React"
          live="https://netflix-react-pink.vercel.app/"
        />
        <ProjectsCard
          title="Weather App"
          des=" This project focuses on fetching and displaying weather information such as temperature, humidity, pressure, cloud cover, wind speed, and more,by parsing a JSON response from the API and displaying the relevant details"
          src={project3}
          git="https://github.com/yoshjayn/-Task2--Weather-App"
          live="https://task2-weather-app.vercel.app/"
        /> */}
        <ProjectCarousel />
        
      </div>
    </section>
  );
}

export default Projects