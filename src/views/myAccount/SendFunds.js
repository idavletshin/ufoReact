import React from "react";

import CardItem from "../../components/CardItem";

export default () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="mb-10 flex justify-center">
        <CardItem />
      </div>
      <div className="flex flex-col max-w-114 w-full text-left mx-auto mb-12">
        <div className="w-full mb-6 sm:mb-10">
          <div className="relative input-wrap">
            <input
              className="mb-1 w-full text-white text-sm sm:text-base rounded pl-4 pr-12 pt-6 pb-2 h-14 bg-black-100 outline-none border border-transparent focus:border-red-700"
              type="text"
            />
            <label
              className="absolute text-white text-sm sm:text-base px-4"
              htmlFor=""
            >
              Target address
            </label>
            <span className="icon-wrap w-6">
              <img src={require("../../assets/images/warning.svg")} alt="" />
            </span>
          </div>
          <p className="px-4 mb-0.5 text-gray-500 text-2xs sm:text-xs">
            Enter correct UFO address
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
              Amount to send
            </label>
            <span className="icon-wrap w-6">
              <img src={require("../../assets/images/eye.svg")} alt="" />
            </span>
          </div>
          <p className="px-4 mb-0.5 text-gray-500 text-2xs sm:text-xs">
            Be careful and input correct amount
          </p>
          <p className="hidden px-4 mb-0.5 text-red-700 text-2xs sm:text-xs">
            Error message
          </p>
        </div>

        <button className="w-full bg-blue-400 mb-2 flex justify-center items-center text-white text-base h-14 min-h-14 rounded hover:bg-purple-700 active:bg-blue-400 focus:outline-none">
          Create transaction
        </button>
        <button className="w-full bg-transparent flex justify-center items-center text-white text-base h-14 min-h-14 focus:outline-none hover:text-yellow-500">
          Cancel
        </button>
      </div>
    </div>
  );
};
