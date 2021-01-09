import React from "react";
import "./Modal.css";
function Modal({ openModal, op }) {
  return (
    <div
      className={`overflow-div fixed inset-0 bg-black bg-opacity-75 z-10 flex justify-center items-center ${
        op ? "open" : ""
      }`}
      onClick={openModal}
    >
      <div
        className={`todo__form flex flex-col w-96 lg:w-1/4 md:max-w-4xl todo__form--content px-3 py-4 rounded text-current dark:bg-gray-700 bg-gray-200 z-10 ${
          op ? "form__active" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          placeholder="Your todo"
          className="todo-input dark:bg-gray-800"
        />
        <input
          type=" text"
          placeholder="Todo reward"
          className="todo-input dark:bg-gray-800 mt-3"
        />
        <button className="mt-4 px-4 py-2 rounded dark:bg-darkSecondary bg-gray-800 text-white">
          Add
        </button>
      </div>
    </div>
  );
}

export default Modal;
