import React from "react";
import SlideShow from "../components/SlideShow";
import Notification from "../components/Notification";
import { chairman } from "../assets";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="w-full h-full">
      <SlideShow />
      <Notification />
      <div className="flex px-10 sm:px-0  flex-col-reverse sm:flex-row justify-center gap-20 my-10">
        <img src={chairman} className="w-[300px] " alt="chairman" />
        <div className="w-full sm:w-[40%]">
          <p className="text-xl text-orange-600 sm:text-2xl font-bold">
            About Chairman
          </p>
          <hr className="w-full h-1 my-2 bg-orange-500" />
          <p className="text-xl text-slate-500 leading-8">
            This College belongs to the genre of new generation institutes of
            national importance in higher education in the domain of Technology
            and Management. Its aim is to build a sound foundation of knowledge,
            pursue excellence
          </p>
          <Link
            className="underline cursor-pointer text-blue-600 text-xl"
            to={"/"}
          >
            Read more
          </Link>
        </div>
      </div>
      
    </div>
  );
};


export default Home;
