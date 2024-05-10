import React from "react";

const TeacherCard = ({ index, name, subject, pic, qualification, role }) => {
  return (
    <div
      className="border shadow-md bg-white rounded p-5 py-10 m-10 flex 
      flex-col items-center hover:-translate-y-5  transition-all duration-300 hover:shadow-2xl"
      key={index}
    >
      <img src={pic} alt="teacher image" className="rounded-full h-28 w-28" />
      <p className="text-sky-500 font-semibold text-xl my-4">
        {name} -
        <span className="text-[18px] text-black font-thin">
          {qualification}
        </span>
      </p>
      <p className="text-[19px] text-neutral-600 font-semibold">
        {role} -<span>{subject}</span>
      </p>
    </div>
  );
};

export default TeacherCard;
