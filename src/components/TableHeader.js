import React from "react";

export default () => {
  return (
    <div className="flex mb-5 items-center md:px-5">
      <div className="flex items-center text-base text-gray-500 w-1/3 md:w-5/12 mr-1 md:pr-0 md:mr-0 p-2.5 bg-black-250 md:bg-transparent rounded md:pl-13.5 cursor-pointer">
        Date
        <button className="focus:outline-none ml-2">
          <img
            className="w-2.5"
            src={require("../assets/images/arrow.svg")}
            alt=""
          />
        </button>
      </div>
      <div className="text-base text-gray-500 md:w-3.5/12 w-1/3 p-2.5 mx-1 md:px-0 md:mx-0 bg-black-250 md:bg-transparent rounded text-center md:text-ledt">
        Address
      </div>
      <div className="flex items-center text-base text-gray-500 w-1/3 p-2.5 md:px-0 ml-1 md:ml-0 md:w-3.5/12 text-right bg-black-250 md:bg-transparent rounded cursor-pointer">
        <button className="focus:outline-none ml-auto mr-2">
          <img
            className="w-2.5"
            src={require("../assets/images/arrow.svg")}
            alt=""
          />
        </button>
        Amount
      </div>
    </div>
  );
};
