import React from "react";

export default (props) => {
  const { card = {} } = props;
  return (
    <div className="flex flex-col justify-between h-38 md:h-48 w-full overflow-hidden max-w-114 bg-black-200 p-4 md:p-6 rounded-md shadow card-item">
      <h2 className="text-lg md:text-xl text-white truncate font-manrope mb-4">
        {card.cardName}
      </h2>
      <div className="flex">
        <div className="flex flex-col max-w-6.5/10 md:max-w-5.5/10 w-full mr-4 balance-wrap">
          <p className="text-gray-500 text-2xs md:text-sm mb-1 md:mb-2">
            Balance / UFO
          </p>
          <div className="text-base sm:text-lg md:text-2xl text-white font-bold font-manrope leading-5 md:leading-6 flex items-center">
            <span className="truncate">{card.balance}</span>
            <button className="focus:outline-none">
              <img
                className="ml-2 w-3 sm:w-4 md:w-auto"
                src={require("../assets/images/refresh.svg")}
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col max-w-3.5/10 md:max-w-4.5/10 w-full address-wrap">
          <p className="text-gray-500 text-2xs md:text-sm mb-1 md:mb-2">
            Address
          </p>
          <div className="flex items-center">
            <div className="flex items-center text-white text-xs md:text-base mr-2">
              {card.addressStart}
              <div className="flex mx-1">
                <div className="inline-block w-1 h-1 md:w-2 md:h-2 opacity-50 rounded-full bg-white mx-0.5 md:mx-1"></div>
                <div className="inline-block w-1 h-1 md:w-2 md:h-2 opacity-50 rounded-full bg-white mx-0.5 md:mx-1"></div>
                <div className="inline-block w-1 h-1 md:w-2 md:h-2 opacity-50 rounded-full bg-white mx-0.5 md:mx-1"></div>
                <div className="inline-block w-1 h-1 md:w-2 md:h-2 opacity-50 rounded-full bg-white mx-0.5 md:mx-1"></div>
              </div>
              <span className="">{card.addressEnd}</span>
            </div>
            <button className="focus:outline-none relative w-6 h-6 copy-wrap">
              <span className="h-3.5 w-2.5 md:h-4 md:w-3 bg-gray-200 absolute shadow-wrap transform z-30  rounded inline-block origin-center -translate-x-1 top-0"></span>
              <span className="h-3.5 w-2.5 md:h-4 md:w-3 bg-gray-200 absolute z-25 shadow-wrap rounded bottom-0 -translate-x-2 transform inline-block"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
