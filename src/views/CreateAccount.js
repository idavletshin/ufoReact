import React, { useState } from "react";

import "../index.css";

export default () => {
  return (
    <div className="relative z-20 flex flex-col justify-center items-center text-center container overflow-y-auto h-full mt-10 md:mt-20 xl:mt-32 mx-auto px-4 sm:px-7 select-none">
      <h1 className="font-sans text-white text-xl md:text-3xl xl:text-4.5xl mb-10 md:mb-14 xl:mb-16 flex flex-col">
        Create your UFO Account
        <small className="text-sm md:text-base xl:text-lg mt-3 md:mt-4 xl:mt-6">
          <a href="#">
            Already a member?
            <span className="text-yellow-500">Sign in instead</span>
          </a>
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
            Minimum length is 8 character but longer is better
          </p>
          <p className="hidden px-4 mb-0.5 text-red-700 text-2xs sm:text-xs">
            Error message
          </p>
        </div>

        <div className="w-full mb-6 sm:mb-10">
          <div className="relative input-wrap">
            <input
              className="mb-1 w-full text-white text-sm sm:text-base rounded pl-4 pr-12 pt-6 pb-2 h-14 bg-black-100 outline-none border border-transparent focus:border-red-700"
              type="password"
            />
            <label
              className="absolute text-white text-sm sm:text-base px-4"
              htmlFor=""
            >
              Confirm password
            </label>
            <span className="icon-wrap w-6">
              <img src={require("../assets/images/warning.svg")} alt="" />
            </span>
          </div>
          <p className="px-4 mb-0.5 text-gray-500 text-2xs sm:text-xs">
            Minimum length is 8 character but longer is better
          </p>
          <p className="hidden px-4 mb-0.5 text-red-700 text-2xs sm:text-xs">
            Error message
          </p>
        </div>

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
              Create PIN code
            </label>
            <span className="icon-wrap w-6">
              <img src={require("../assets/images/eye.svg")} alt="" />
            </span>
          </div>
          <p className="px-4 mb-0.5 text-gray-500 text-2xs sm:text-xs">
            Length must be 4-8 digits
          </p>
          <p className="hidden px-4 mb-0.5 text-red-700 text-2xs sm:text-xs">
            Error message
          </p>
        </div>

        <button className="w-full bg-blue-400 mb-2 flex justify-center items-center text-white text-base h-14 min-h-14 rounded hover:bg-purple-700 active:bg-blue-400 focus:outline-none">
          Create Account
        </button>
        <button className="w-full bg-transparent flex justify-center items-center text-white text-base h-14 min-h-14 focus:outline-none hover:text-yellow-500">
          Cancel
        </button>
      </div>
    </div>
  );
};
// export default App;
