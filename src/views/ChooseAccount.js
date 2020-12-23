import React, { useState } from "react";

import "../index.css";

export default () => {
  return (
    <div className="relative z-20 text-center flex flex-col justify-center items-center container overflow-y-auto h-full mt-10 md:mt-20 mx-auto px-4 sm:px-7 select-none">
      <h1 className="font-sans text-white text-xl md:text-3xl xl:text-4.5xl mb-10 md:mb-14 xl:mb-16 flex flex-col">
        Choose your UFO Account
        <small className="text-sm md:text-base xl:text-lg mt-3 md:mt-4 xl:mt-6">
          <a href="#">Need more UFO Accounts? Add Account</a>
        </small>
      </h1>
      <div className="flex flex-col sm:flex-row max-w-114 w-full mx-auto items-center sm:justify-evenly mb-10">
        <button className="text-white mb-4 sm:mb-0 text-sm sm:text-base focus:outline-none flex items-center">
          <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-full mr-4">
            <span className="w-1 h-3 bg-white inline-block transform mb-1.5 -rotate-45"></span>
            <span className="w-1 h-3 bg-white inline-block transform mt-1.5 rotate-45 -ml-1"></span>
          </span>
          Import UFO Account
        </button>
        <button className="text-white text-sm sm:text-base focus:outline-none flex items-center">
          <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 bg-teal-400 rounded-full mr-4">
            <span className="w-1 h-4 bg-white inline-block transform -rotate-90"></span>
            <span className="w-1 h-4 bg-white inline-block -ml-1"></span>
          </span>
          Add UFO Account
        </button>
      </div>
      <div className="flex flex-col max-w-114 w-full mx-auto mb-12 shift-right-wrap">
        <div className="relative flex text-white rounded text-base p-4 h-14 bg-black-100 outline-none focus:border mb-6 cursor-pointer items-center">
          <p className="truncate mr-2 text-sm sm:text-base shift-right max-w-1/4 sm:max-w-2/5">
            Accountfsdffsd 1
          </p>
          <div className="ml-auto flex items-center">
            <div className="flex items-center text-sm sm:text-base mr-2 fade-wrap">
              2aEe
              <div className="flex mx-1">
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
              </div>
              <span className="hidden sm:inline-block">nMbP</span>
            </div>
            <div className="flex w-14 sm:w-18 justify-between items-center">
              <button className="focus:outline-none relative w-6 h-6 copy-wrap">
                <span className="h-4 w-3 bg-gray-200 absolute shadow-wrap transform z-30  rounded inline-block origin-center -translate-x-1 top-0"></span>
                <span className="h-4 w-3 bg-gray-200 absolute z-25 shadow-wrap rounded bottom-0 -translate-x-2 transform inline-block"></span>
              </button>
              <button className="p-1 focus:outline-none w-6 h-6 flex justify-center items-center">
                <span className="w-1 h-4 bg-gray-300 inline-block transform -rotate-45"></span>
                <span className="w-1 h-4 bg-gray-300 inline-block transform rotate-45 -ml-1"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex text-white rounded text-base p-4 h-14 bg-black-100 outline-none focus:border mb-6 cursor-pointer items-center">
          <p className="truncate mr-2 shift-right max-w-1/4 sm:max-w-2/5 text-sm sm:text-base">
            Account 1
          </p>
          <div className="ml-auto flex items-center">
            <div className="flex items-center mr-2 fade-wrap text-sm sm:text-base">
              2aEe
              <div className="flex mx-1">
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
              </div>
              <span className="hidden sm:inline-block">nMbP</span>
            </div>
            <div className="flex w-14 sm:w-18 justify-between items-center">
              <button className="focus:outline-none relative w-6 h-6 copy-wrap">
                <span className="h-4 w-3 bg-gray-200 absolute shadow-wrap transform z-30  rounded inline-block origin-center -translate-x-1 top-0"></span>
                <span className="h-4 w-3 bg-gray-200 absolute z-25 shadow-wrap rounded bottom-0 -translate-x-2 transform inline-block"></span>
              </button>
              <button className="p-1 focus:outline-none w-6 h-6 flex justify-center items-center">
                <span className="w-1 h-4 bg-gray-300 inline-block transform -rotate-45"></span>
                <span className="w-1 h-4 bg-gray-300 inline-block transform rotate-45 -ml-1"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex text-white rounded text-base p-4 h-14 bg-black-100 outline-none focus:border mb-6 cursor-pointer items-center">
          <p className="truncate mr-2 shift-right max-w-1/4 sm:max-w-2/5 text-sm sm:text-base">
            Accountsdfjsdfjslkdjfsdjfskdjflsjdf;ksdjlfsjd
          </p>
          <div className="ml-auto flex items-center">
            <div className="flex items-center mr-2 fade-wrap text-sm sm:text-base">
              2aEe
              <div className="flex mx-1">
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
              </div>
              <span className="hidden sm:inline-block">nMbP</span>
            </div>
            <div className="flex w-14 sm:w-18 justify-between items-center">
              <button className="focus:outline-none relative w-6 h-6 copy-wrap">
                <span className="h-4 w-3 bg-gray-200 absolute shadow-wrap transform z-30  rounded inline-block origin-center -translate-x-1 top-0"></span>
                <span className="h-4 w-3 bg-gray-200 absolute z-25 shadow-wrap rounded bottom-0 -translate-x-2 transform inline-block"></span>
              </button>
              <button className="p-1 focus:outline-none w-6 h-6 flex justify-center items-center">
                <span className="w-1 h-4 bg-gray-300 inline-block transform -rotate-45"></span>
                <span className="w-1 h-4 bg-gray-300 inline-block transform rotate-45 -ml-1"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex text-white rounded text-base p-4 h-14 bg-black-100 outline-none focus:border mb-6 cursor-pointer items-center">
          <p className="truncate mr-2 shift-right max-w-1/4 sm:max-w-2/5 text-sm sm:text-base">
            Accfsdfsdfsdfsdfsdfsdfount 1
          </p>
          <div className="ml-auto flex items-center">
            <div className="flex items-center mr-2 fade-wrap text-sm sm:text-base">
              2aEe
              <div className="flex mx-1">
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
              </div>
              <span className="hidden sm:inline-block">nMbP</span>
            </div>
            <div className="flex w-14 sm:w-18 justify-between items-center">
              <button className="focus:outline-none relative w-6 h-6 copy-wrap">
                <span className="h-4 w-3 bg-gray-200 absolute shadow-wrap transform z-30  rounded inline-block origin-center -translate-x-1 top-0"></span>
                <span className="h-4 w-3 bg-gray-200 absolute z-25 shadow-wrap rounded bottom-0 -translate-x-2 transform inline-block"></span>
              </button>
              <button className="p-1 focus:outline-none w-6 h-6 flex justify-center items-center">
                <span className="w-1 h-4 bg-gray-300 inline-block transform -rotate-45"></span>
                <span className="w-1 h-4 bg-gray-300 inline-block transform rotate-45 -ml-1"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex text-white rounded text-base p-4 h-14 bg-black-100 outline-none focus:border mb-6 cursor-pointer items-center">
          <p className="truncate text-sm sm:text-base mr-2 shift-right max-w-1/4 sm:max-w-2/5">
            Accofsdfsdfunt 1
          </p>
          <div className="ml-auto flex items-center">
            <div className="flex items-center mr-2 fade-wrap text-sm sm:text-base">
              2aEe
              <div className="flex mx-1">
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
                <div className="inline-block w-2 h-2 opacity-50 rounded-full bg-white mx-1"></div>
              </div>
              <span className="hidden sm:inline-block">nMbP</span>
            </div>
            <div className="flex w-14 sm:w-18 justify-between items-center">
              <button className="focus:outline-none relative w-6 h-6 copy-wrap">
                <span className="h-4 w-3 bg-gray-200 absolute shadow-wrap transform z-30  rounded inline-block origin-center -translate-x-1 top-0"></span>
                <span className="h-4 w-3 bg-gray-200 absolute z-25 shadow-wrap rounded bottom-0 -translate-x-2 transform inline-block"></span>
              </button>
              <button className="p-1 focus:outline-none w-6 h-6 flex justify-center items-center">
                <span className="w-1 h-4 bg-gray-300 inline-block transform -rotate-45"></span>
                <span className="w-1 h-4 bg-gray-300 inline-block transform rotate-45 -ml-1"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
