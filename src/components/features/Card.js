import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({item:{title, tagline, des, cta, icon}}) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-8 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-blue-600">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-blue-600 inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-blue-600 inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-blue-600 inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-blue-600 inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-blue-400 font-semibold">{tagline}</p>
            <p className="base">{des}</p>
            <p className="text-sm text-green-400 font-medium">{cta}</p>
            <span className="text-2xl text-blue-600">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Card