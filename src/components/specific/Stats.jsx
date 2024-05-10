import React from "react";
import { FaSmile, FaUniversity, FaUserTie, FaUsers } from "react-icons/fa";

const Stats = () => {
  return (
    <div className="sm:px-[10%] my-20 px-0 flex items-center gap-20 sm:gap-0 sm:items-start flex-col sm:flex-row sm:justify-around">
      <div className="flex gap-3 items-start ">
        <FaUsers className="text-sky-500 font-semibold text-7xl" />
        <div>
          <p className="text-5xl  text-neutral-950  tracking-widest">1000</p>
          <span className="text-neutral-400 font-semibold">
            Student Enrolled
          </span>
        </div>
      </div>
      <div className="flex gap-3 items-start">
        <FaUserTie className="text-sky-500 font-semibold text-7xl" />
        <div>
          <p className="text-5xl  text-neutral-950  tracking-widest">100</p>
          <span className="text-neutral-400 font-semibold">Teachers</span>
        </div>
      </div>
      <div className="flex gap-3 items-start">
        <FaUniversity className="text-sky-500 font-semibold text-7xl" />
        <div>
          <p className="text-5xl  text-neutral-950  tracking-widest">90%</p>
          <span className="text-neutral-400 font-semibold">
            Passing to Universites
          </span>
        </div>
      </div>
      <div className="flex gap-3 items-start">
        <FaSmile className="text-sky-500 font-semibold text-7xl" />
        <div>
          <p className="text-5xl  text-neutral-950  tracking-widest">100%</p>
          <span className="text-neutral-400 font-semibold">
            Parents Satisfaction
          </span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
