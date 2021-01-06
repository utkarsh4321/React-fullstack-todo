import React from "react";
import Button from "./BaseCompenents/Button";
import Input from "./BaseCompenents/Input";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div class="flex flex-col flex-auto max-w-sm sm:max-w-md md:max-w-md lg:max-w-md xl:max-w-md mx-3">
      <h1 class="text-6xl text-gray-700 tracking-wide dark:text-darkSecondary mb-5 text-center font-bold">
        Sign Up
      </h1>
      <Input type="text" placeholder="Username" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Mobile" />

      <Button isSvg={true} btnText="Signup" />

      <div class="signup-link flex md:mt-8 mt-4 justify-center">
        <h4>Already have an account login here</h4>
        <NavLink to="/" class="ml-2 border-b-2 border-current">
          login
        </NavLink>
      </div>
    </div>
  );
}

export default Signup;
