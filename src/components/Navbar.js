import React from "react";
import Moon from "../assets/moon.svg";
import UserImg from "../assets/user.svg";

const Navbar = () => {
  return (
    <header className="flex-shrink-0">
      <div className="p-5 flex justify-between align-center">
        <h1 className="text-2xl font-weight-semibold dark:text-darkSecondary">
          Todo
        </h1>

        <div className="flex">
          <button className="md:mr-20 mr-8">
            <img src={UserImg} alt="user" className="w-6 h-6" />
          </button>
          <button
            className="dark:bg-gray-700 border-0 bg-darkSecondary rounded-full h-10 w-10 flex items-center justify-center focus:outline-none"
            id="toogleBtn"
          >
            <img src={Moon} alt="moon" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
