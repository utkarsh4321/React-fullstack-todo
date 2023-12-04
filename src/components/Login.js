import React from "react";
import GoogleLogo from "../assets/google.svg";
import GithubLogo from "../assets/github.svg";
import Input from "./BaseCompenents/Input";
import { NavLink } from "react-router-dom";

import "./Login.css";
import Button from "./BaseCompenents/Button";

const Login = () => {
  console.log('login file');
  return (
    <div className="flex flex-col flex-auto max-w-sm sm:max-w-md md:max-w-md lg:max-w-md xl:max-w-md mx-3">
      <h1
        className="text-6xl text-gray-700 tracking-wide dark:text-darkSecondary mb-5
         text-center font-bold"
      >
        Sign In
      </h1>

      <Input placeholder="Email" type="email" value="" />
      <Input placeholder="Password" type="password" value="" />

      <Button isSvg={true} btnText="Login" />

      <div className="signup-link flex md:mt-8 mt-4 items-center flex-col">
        <NavLink
          to="/forgetPassword"
          className="dark:text-gray-500 border-b-1 border-current"
        >
          Forget Password
        </NavLink>
        <div className="flex">
          <h4 className="dark:text-gray-500">
            Don't have account register here
          </h4>
          <NavLink to="/signup" className="ml-2 border-b-2 border-current">
            signup
          </NavLink>
        </div>
      </div>
      <div className="mt-6 flex justify-around">
        <button className="flex transition-colors duration-300 ease-in justify-center items-center px-4 py-2 dark:hover:bg-gray-700 hover:bg-gray-400">
          SigIn with{" "}
          <span className="ml-2">
            <img src={GoogleLogo} alt="google" className="w-8 h-8" />
          </span>
        </button>
        <button className="flex transition-colors duration-300 ease-in justify-center items-center px-4 py-2 dark:hover:bg-gray-700 bg-dark hover:bg-gray-400">
          SigIn with
          <span className="ml-2">
            <img src={GithubLogo} alt="google" className="w-8 h-8" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Login;
