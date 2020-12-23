import React, { useState } from "react";

import "../index.css";

export default () => {
  return (
    <div className="relative bg-black-900 w-full h-full min-h-screen overflow-hidden">
      <div className="relative z-30 bg-gray-800 w-full text-center overflow-y-auto min-h-screen h-full flex flex-col items-center justify-center m-auto p-4 sm:p-7 select-none">
        <div className="flex flex-col max-w-114 w-full m-auto text-left justify-center items-center h-full mx-auto select-none">
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
              Please enter your username
            </p>
            <p className="hidden px-4 mb-0.5 text-red-700 text-2xs sm:text-xs">
              Error message
            </p>
          </div>
          <div className="w-full mb-6 sm:mb-10">
            <div className="relative input-wrap">
              <input
                className="mb-1 w-full text-white text-sm sm:text-base rounded pl-4 pr-12 pt-6 pb-2 h-14 bg-black-100 outline-none border border-transparent focus:border-teal-700"
                type="password"
              />
              <label
                className="absolute text-white text-sm sm:text-base px-4"
                htmlFor=""
              >
                Password
              </label>
              <span className="icon-wrap w-6">
                <img src={require("../assets/images/check.svg")} alt="" />
              </span>
            </div>
            <p className="px-4 mb-0.5 text-gray-500 text-2xs sm:text-xs">
              Please enter your password
            </p>
            <p className="hidden px-4 mb-0.5 text-red-700 text-2xs sm:text-xs">
              Error message
            </p>
          </div>

          <button className="w-full bg-blue-400 mb-2 min-h-14 flex justify-center items-center text-white text-base h-14 rounded hover:bg-purple-700 active:bg-blue-400 focus:outline-none">
            Sign in
          </button>
          <button className="w-full bg-transparent min-h-14 flex justify-center items-center text-white text-base h-14 focus:outline-none hover:text-yellow-500">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
