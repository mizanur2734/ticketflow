import React from "react";
import vectorimage1 from "../assets/vector1.png";
import vectorimage2 from "../assets/Group 2.png";

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:gap-16 gap-8 md:mt-12 mt-4">
      <div
        className="relative rounded-lg px-54 py-20 text-center bg-gradient-to-r from-[#632EE3]
       to-[#9F62F2] overflow-hidden"
      >
        {/* LEFT IMAGE */}
        <img
          src={vectorimage1}
          className="absolute left-0 bottom-0 w-72 "
          alt=""
        />

        {/* RIGHT IMAGE */}
        <img
          src={vectorimage1}
          className="absolute right-0 top-0 w-72 scale-x-[-1]"
          alt=""
        />

        {/* CONTENT */}
        <div className="relative z-10 text-white">
          <h3 className="text-xl">In-progress</h3>
          <h2 className="text-3xl">{inProgress}</h2>
        </div>
      </div>
      <div
        className="relative border-gray-300 rounded-lg px-54 py-20 text-center bg-gradient-to-r from-[#54CF68]
       to-[#00827A]"
      >
        {/* LEFT IMAGE */}
        <img
          src={vectorimage1}
          className="absolute left-0 bottom-0 w-72 "
          alt=""
        />
        {/* RIGHT IMAGE */}
        <img
          src={vectorimage1}
          className="absolute right-0 top-0 w-72 scale-x-[-1]"
          alt=""
        />
        <div className="text-white">
          <h3 className="text-xl">Resolved</h3>
          <h2 className="text-2xl">{resolved}</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
