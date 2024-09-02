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
            title="Developemer"
            subTitle="Developed a Netflix Clone"
            result="Success"
            des=" Successfully created a Netflix Clone from scratch, showcasing advanced skills in React.js, API integration, and responsive design, and garnering positive feedback from peers and mentors."
          />
          <ResumeCard
            title="Contributor"
            subTitle="Contributor to Open-Source Projects"
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
            title="Coding Challenge"
            subTitle="Top Performer in Coding Challenges."
            result="Success"
            des="Consistently ranked in the top percentile of participants in coding challenges on platforms like LeetCode and HackerRank, demonstrating strong problem-solving abilities and coding proficiency."
          />
          <ResumeCard
            title="Leadership"
            subTitle="NGO Educational Programs"
            result="Success"
            des="Played a key role in leading educational programs for underprivileged children through an NGO, designing and implementing a curriculum that has positively impacted the lives of many young learners."
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
