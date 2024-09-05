import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm tracking-[4px]"></p> */}
          <h2 className="text-4xl font-bold">Technical Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Certification"
            subTitle="React.js "
            result="Success"
            des="Earned a professional certification in React.js, demonstrating proficiency in building dynamic and responsive web applications using one of the most popular JavaScript libraries."
          />
          <ResumeCard
            title="Software"
            subTitle="Developed a Netflix Clone"
            result="Success"
            des=" Successfully created a Netflix Clone from scratch, showcasing advanced skills in React.js, API integration, and responsive design, and garnering positive feedback from peers and mentors."
          />
          <ResumeCard
            title="Contributor"
            subTitle="Open-Source Projects"
            result="Success"
            des="Actively contributed to several open-source projects, including bug fixes and feature enhancements, gaining recognition in the developer community and expanding my technical expertise."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm tracking-[4px]">:D</p> */}
          <h2 className="text-4xl font-bold">Recognition and Leadership</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Leadership"
            subTitle="NCC(2018-2021)"
            result="Success"
            des="Served as a cadet in the National Cadet Corps, participating in various training programs and camps, and receiving accolades for discipline, leadership, and teamwork."
          />
          <ResumeCard
            title="Service"
            subTitle="National Service Scheme"
            result="Success"
            des="Volunteered for the National Service Scheme, participating in community service activities, awareness campaigns, and social initiatives, and contributing to the welfare of society."
          />
          <ResumeCard
            title="Graduation"
            subTitle="Graduated with Honors in Mathematics."
            result="Success"
            des="Graduated with honors in Information Technology, achieving high academic distinction and laying a strong foundation for a successful career in software development."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
