import React from "react";

function Timing() {
  return (
    <div className="md:text-2xl dark:text-gray-400">
      <div className="inline">Today</div>
      <div className="sm:text-7xl text-5xl font-extrabold dark:text-darkSecondary">
        <span className="mr-3">Wed</span>
        <span className="mr-3">2</span>
        <span>Dec</span>
      </div>
      <div className="text-center">
        <span>10</span>:<span>15</span>am
      </div>
    </div>
  );
}

export default Timing;
