import React, { useState } from "react";

import "../index.css";

export default () => {
  return (
    <div className="relative z-20 text-center container overflow-y-auto h-full flex flex-col items-center justify-center m-auto p-4 sm:p-7 select-none">
      <h1 className="font-sans text-white text-5xl md:text-6xl font-bold xl:text-9xl mb-10 md:mb-14 xl:mb-16 flex flex-col">
        100%
        <small className="text-base mx-auto md:text-lg font-light xl:text-2xl mt-3 md:mt-4 xl:mt-6 w-full sm:max-w-4/5 xl:max-w-7/10">
          If we can figure out a way to spin the propellers, we can generate
          enough electricity to cool the lab, correct?
        </small>
      </h1>
      <div className="flex flex-col max-w-114 w-full text-left mx-auto mb-12">
        <div className="w-full mb-6 sm:mb-10">
          <div className="relative input-wrap">
            <input
              className="mb-1 w-full text-white text-sm sm:text-base rounded pl-4 pr-12 pt-6 pb-2 h-14 bg-black-100 outline-none border border-transparent focus:border-purple-900"
              type="text"
            />
            <label
              className="absolute text-white text-sm sm:text-base px-4"
              htmlFor=""
            >
              Username
            </label>
            <span className="icon-wrap w-6">
              <div className="p-1 w-6 h-6 flex justify-center items-center">
                <span className="w-1 h-4 bg-gray-300 inline-block transform -rotate-45"></span>
                <span className="w-1 h-4 bg-gray-300 inline-block transform rotate-45 -ml-1"></span>
              </div>
            </span>
          </div>
          <p className="px-4 mb-0.5 text-gray-500 text-2xs sm:text-xs">
            Minimum length is 8 character but longer is better
          </p>
          <p className="hidden px-4 mb-0.5 text-red-700 text-2xs sm:text-xs">
            Error message
          </p>
        </div>

        <button className="w-full bg-blue-400 mb-2 flex justify-center items-center text-white text-base h-14 min-h-14 rounded hover:bg-purple-700 active:bg-blue-400 focus:outline-none">
          Sign in
        </button>
        <button className="w-full bg-transparent flex justify-center items-center text-white text-base h-14 min-h-14 focus:outline-none hover:text-yellow-500">
          Cancel
        </button>
      </div>
    </div>
  );
};
