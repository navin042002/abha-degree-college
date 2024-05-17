import React from "react";
import { gallaryImage } from "../../constants";

const Gallary = () => {
  return (
    <div className="px-[25] sm:px-[10%] my-20 ">
      <h1 className="text-4xl text-center font-semibold text-blue-500 ">
        Our Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-2 my-20 items-center h-full">
        {gallaryImage.map((i) => (
          <div key={i.id}>
            <img
              src={i.imgUrl}
              alt={i.text}
              className=" hover:-translate-y-2 rounded 
             transition-all duration-300 h-[250px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
