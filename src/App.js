import React, { useState } from "react";

import MyAccount from "./views/MyAccount";
import CreateAccount from "./views/CreateAccount";
import ChooseAccount from "./views/ChooseAccount";
import SignIn from "./views/SignIn";
import SuccessTransaction from "./views/SuccessTransaction";
import PopupSignIn from "./views/PopupSignIn";
import PopupPass from "./views/PopupPass";

import "./index.css";

function App() {
  return (
    <div className="relative flex flex-col bg-black-900 w-full h-full min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-10 bg-purple-500 opacity-10"></div>
      <a
        className="fixed top-0 mt-12 ml-12 z-25 hidden lg:inline-block cursor-pointer w-15 h-16"
        href="#"
      >
        <img
          className=""
          src={require("./assets/images/logo.svg")}
          alt=""
        ></img>
      </a>
      <img
        className="fixed w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 left-0 opacity-60 bottom-0 mt-64"
        src={require("./assets/images/half-moon@2x.png")}
        alt=""
      ></img>
      <MyAccount />
      {/* <CreateAccount /> */}
      {/* <ChooseAccount /> */}
      {/* <SignIn /> */}
      {/* <SuccessTransaction /> */}
      {/* <PopupSignIn /> */}
      {/* <PopupPass /> */}
    </div>
  );
}
export default App;
