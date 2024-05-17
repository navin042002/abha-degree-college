import React from "react";
import { TeachersData } from "../constants/index";
import TeacherCard from "../components/shared/TeacherCard";
const Faculity = () => {
  return (
    <div className="my-[10%] ">
      <h1 className="text-center mx-auto max-w-[480px] tracking-wider text-3xl sm:text-5xl font-semibold text-black">
        Meet Our Qualified Teachers
      </h1>
      <p className="text-neutral-400 font-semibold text-3xl text-center">
        We have the best teacher in our insitute
      </p>
      <div className="px-0 sm:px-[10%] w-full grid grid-cols-1 sm:grid-cols-3 gap-20 my-10">
        {TeachersData.map((i) => (
          <TeacherCard
            index={i.id}
            name={i.name}
            subject={i.subject}
            qualification={i.qualification}
            pic={i.url}
            role={i.role}
          />
        ))}
      </div>
    </div>
  );
};

export default Faculity;
