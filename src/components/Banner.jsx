import React from "react";
import vectorimage1 from "../assets/vector1.png";

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mt-6 md:mt-12">

      {/* LEFT CARD - IN PROGRESS */}
      <div className="relative w-full md:w-[535px] h-48 md:h-56  flex flex-col justify-center items-center rounded-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] overflow-hidden shadow-lg">

        {/* Background Images */}
        <img
          src={vectorimage1}
          className="absolute left-0 bottom-0 w-56 md:w-72 opacity-80"
          alt=""
        />
        <img
          src={vectorimage1}
          className="absolute right-0 top-0 w-56 md:w-72 scale-x-[-1] opacity-80"
          alt=""
        />

        {/* Content */}
        <div className="relative z-10 text-white text-center">
          <h3 className="text-lg md:text-xl font-medium">In-progress</h3>
          <h2 className="text-3xl md:text-4xl font-bold">{inProgress}</h2>
        </div>
      </div>

      {/* RIGHT CARD - RESOLVED */}
      <div className="relative w-full md:w-[535px] h-48 md:h-56 flex flex-col justify-center items-center rounded-xl bg-gradient-to-r from-[#54CF68] to-[#00827A] overflow-hidden shadow-lg">

        {/* Background Images */}
        <img
          src={vectorimage1}
          className="absolute left-0 bottom-0 w-56 md:w-72 opacity-80"
          alt=""
        />
        <img
          src={vectorimage1}
          className="absolute right-0 top-0 w-56 md:w-72 scale-x-[-1] opacity-80"
          alt=""
        />

        {/* Content */}
        <div className="relative z-10 text-white text-center">
          <h3 className="text-lg md:text-xl font-medium">Resolved</h3>
          <h2 className="text-3xl md:text-4xl font-bold">{resolved}</h2>
        </div>
      </div>

    </div>
  );
};

export default Banner;