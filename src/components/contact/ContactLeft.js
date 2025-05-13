import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Yashaswini Jain</h3>
        <p className="text-lg font-normal text-gray-400">
          Front-End Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        Let's connect! I'm open to new opportunities and collaborations. Reach out via email or LinkedIn for a chat.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">8307860958</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">aswiniy68@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        
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
    </div>
  );
}

export default ContactLeft