import React, { useEffect } from "react";
import "./App.css";
import Main from "./layout/main";

function App() {
  useEffect(() => {
    const rot = window.document.documentElement;
    rot.classList.add("dark");
  }, []);
  return (
    <div className="w-full h-full dark:bg-gray-900 dark:text-white font-body bg-gray-300 text-gray-800">
    <h1>RAKA</h1>
      <Main />
    </div>
  );
}

export default App;
