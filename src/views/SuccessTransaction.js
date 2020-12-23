import React, { useState } from "react";

import "../index.css";

export default () => {
  return (
    <div className="relative z-20 text-center container overflow-y-auto h-full flex flex-col items-center justify-center m-auto p-4 sm:p-7 select-none">
      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 xl:w-30 xl:h-30 mb-4">
        <img src={require("../assets/images/check.svg")} alt="" />
      </div>
      <h1 className="font-sans text-white text-3xl sm:text-4xl leading-9 sm:leading-normal md:text-5xl lg:text-6xl font-bold xl:text-9xl mb-10 md:mb-14 xl:mb-16 flex flex-col">
        Transaction is done
        <small className="text-base mx-auto leading-5 sm:leading-normal md:text-lg font-light xl:text-2xl mt-3 md:mt-4 xl:mt-6 w-full sm:max-w-4/5 xl:max-w-7/10">
          Transactions in terms of sales between buyers and sellers are
          relatively straightforward.
        </small>
      </h1>
      <a className="text-sm sm:text-base text-yellow-400 mb-10" href="#">
        View Transaction History
      </a>
    </div>
  );
};
