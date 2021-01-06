/** @jsxImportSource @emotion/react */

import React from "react";
import Input from "./Input";
import Edit from "../../assets/edit.svg";
import Delete from "../../assets/delete.svg";
import "twin.macro";

function TodoComponent({ todos = "Todo" }) {
  return (
    <div className="group flex justify-between rounded bg-gray-200 dark:bg-gray-800 p-4 cursor-pointer overflow-hidden">
      <div className="flex items-center">
        <Input type="checkbox" className="check" />
        <h4 className="ml-2">{todos}</h4>
      </div>
      <div tw="transition-transform duration-300 transition-width  duration-200 ease-in-out translate-x-32 flex items-center w-0 transform group-hover:translate-x-0 group-hover:w-14">
        <img
          src={Edit}
          alt="edit"
          className="transition duration-300 ease-in-out mr-1 transform hover:scale-110 motion-reduce:transition-none motion-reduce:transform-none w-6 h-6"
        />
        <img
          src={Delete}
          alt="delete"
          className="transition duration-300 ease-in-out mr-2 transform hover:scale-110 motion-reduce:transition-none motion-reduce:transform-none w-6 h-6"
        />
      </div>
    </div>
  );
}

export default TodoComponent;
