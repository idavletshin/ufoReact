import React from "react";

export default () => {
  return (
    <div className="flex justify-between items-center mb-2 md:px-5 py-2.5 bg-black-250 rounded">
      <div className="text-2xs sm:text-sm md:text-base w-1/3 md:w-5/12 px-2.5 md:px-0 flex items-center text-white">
        <div className="w-3 mr-2 md:w-6 md:mr-7.5">
          <img
            className="w-full"
            src={require("../assets/images/tr1.svg")}
            alt=""
          />
          <img
            className="w-full hidden"
            src={require("../assets/images/tr2.svg")}
            alt=""
          />
          <img
            className="w-full hidden"
            src={require("../assets/images/tr3.svg")}
            alt=""
          />
        </div>
        03 June 2020, 00:40
      </div>
      <div className="text-base text-white flex items-center px-2.5 md:px-0 w-1/3 md:w-3.5/12">
        <div className="flex items-center mx-auto md:mx-0">
          <div className="flex items-center text-white text-2xs sm:text-sm md:text-base mr-2">
            2aEe
            <div className="flex mx-1">
              <div className="inline-block w-1 h-1 md:w-2 md:h-2 opacity-50 rounded-full bg-white mx-0.5 md:mx-1"></div>
              <div className="inline-block w-1 h-1 md:w-2 md:h-2 opacity-50 rounded-full bg-white mx-0.5 md:mx-1"></div>
              <div className="inline-block w-1 h-1 md:w-2 md:h-2 opacity-50 rounded-full bg-white mx-0.5 md:mx-1"></div>
              <div className="inline-block w-1 h-1 md:w-2 md:h-2 opacity-50 rounded-full bg-white mx-0.5 md:mx-1"></div>
            </div>
            <span className="hidden sm:text-sm md:text-base sm:inline-block">
              nMbP
            </span>
          </div>
          <button className="focus:outline-none relative w-6 h-6 copy-wrap">
            <span className="h-4 w-3 bg-gray-200 absolute shadow-wrap transform z-30  rounded inline-block origin-center -translate-x-1 top-0"></span>
            <span className="h-4 w-3 bg-gray-200 absolute z-25 shadow-wrap rounded bottom-0 -translate-x-2 transform inline-block"></span>
          </button>
        </div>
      </div>
      <div className="text-2xs sm:text-sm md:text-base text-white px-2.5 md:px-0 w-1/3 md:w-3.5/12 text-right">
        124.02350834 UFO
      </div>
    </div>
  );
};
