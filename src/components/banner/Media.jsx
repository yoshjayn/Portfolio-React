import React from 'react'
import { FaLinkedinIn, FaReact, FaGithub, FaTwitter } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiHtml5 } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base text-blue-200 uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://github.com/yoshjayn"
                target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </span>
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/yashaswinijain/"
                target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a
              href="https://x.com/yashaswineeJain"
              target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base text-blue-200 uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media