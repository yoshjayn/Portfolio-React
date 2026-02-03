import Slider from "react-slick";
import { projectTwo, project1, project3 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCarousel = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">

      <div
        style={{
          width: 1300 + 'px',
        }}
      >
        <Slider {...settings}>
          <ProjectsCard
            title="Vistagram : Social"
            des=" A Vite + React Instagram clone with Tailwind CSS. Focus: Context API for state, REST API integration, authentication, reusable components, and learning through iterative builds and real-world feature development."
            src={projectTwo}
            git="https://github.com/yoshjayn/Instagram-clone"
            live="https://instagram-clone-upup.vercel.app/"
          />
          <ProjectsCard
            title="NOTES APP"
            des="Stay organized with my Notes App – a clean, intuitive platform for creating, editing, and managing notes. Enjoy seamless syncing, search functionality, and a distraction-free interface for productivity."
            src={project3}
            git="https://github.com/yoshjayn/Notes-Canvas"
            live="https://notes-canvas-puce.vercel.app/"
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
            src={projectTwo}
            git="https://github.com/yoshjayn/-Task2--Weather-App"
            live="https://task2-weather-app.vercel.app/"
          />
          
        </Slider>
      </div>
    </div>
  )
}

export default ProjectCarousel