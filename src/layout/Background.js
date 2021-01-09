import React from "react";

function Background({ children }) {
  return (
    <body className="w-full h-full dark:bg-gray-900 dark:text-white font-body bg-gray-300 text-gray-800">
      {children}
    </body>
  );
}

export default Background;
