import React, { useState } from "react";

import Dashboard from "../views/myAccount/Dashboard";
import SendFunds from "../views/myAccount/SendFunds";
import History from "../views/myAccount/History";

import "../index.css";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="relative z-20 text-center max-w-172.5 w-full overflow-y-auto h-full flex flex-col items-center mt-10 md:mt-20 xl:mt-32 mx-auto px-4 sm:px-7 md:px-0 select-none">
      <div className="flex justify-between w-full md:justify-center">
        <button className="mb-auto mt-1.5 md:hidden focus:outline-none">
          <img src={require("../assets/images/back.svg")} alt="" />
        </button>
        <h1 className="font-sans text-white text-xl md:text-3xl xl:text-4.5xl mb-8 md:mb-12 xl:mb-16 flex flex-col">
          My UFO Account
          <small className="text-sm md:text-base xl:text-lg mt-3 md:mt-4 xl:mt-6">
            <a className="text-yellow-500" href="#">
              Logout
            </a>
          </small>
        </h1>
        <button className="mb-auto mt-1.5 md:hidden focus:outline-none">
          <img src={require("../assets/images/cross.svg")} alt="" />
        </button>
      </div>
      <div className="flex flex-col w-full text-left mx-auto mb-8 md:mb-10 xl:mb-12">
        <div className="flex justify-between text-base md:text-xl xl:text-2xl mb-8 text-gray-500">
          <button
            className={`focus:outline-none font-manrope ${
              page === "dashboard" ? "active-tab" : ""
            }`}
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`focus:outline-none font-manrope ${
              page === "sendFunds" ? "active-tab" : ""
            }`}
            onClick={() => setPage("sendFunds")}
          >
            Send funds
          </button>
          <button
            className={`focus:outline-none font-manrope ${
              page === "history" ? "active-tab" : ""
            }`}
            onClick={() => setPage("history")}
          >
            History
          </button>
        </div>
        <div className="flex flex-col">
          {page === "dashboard" && <Dashboard />}
          {page === "sendFunds" && <SendFunds />}
          {page === "history" && <History />}
        </div>
      </div>
    </div>
  );
}
export default App;
