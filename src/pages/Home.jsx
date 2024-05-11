import React from "react";
import SlideShow from "../components/SlideShow";
import Notification from "../components/Notification";
import { chairman } from "../assets";
import { Link } from "react-router-dom";
import Stats from "../components/specific/Stats";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { chooseUsData, TeachersData } from "../constants";
import TeacherCard from "../components/shared/TeacherCard";
import { FaCheck } from "react-icons/fa";
import Contact from "../components/specific/Contact";
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full h-full">
      <SlideShow />
      <Notification />
      <div className="w-full ">
        <div></div>
      </div>
      <div className="flex px-10 sm:px-0  flex-col-reverse sm:flex-row justify-center gap-20 my-10">
        <div>
          <img
            src={chairman}
            className="w-[300px] rounded hover:scale-105 transition-all "
            alt="chairman"
          />
          <h1 className="my-2  text-2xl font-bold text-orange-700">
            Satish Kumar{" "}
          </h1>
        </div>

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
      <Stats />

      <div className="my-[10%] ">
        <h1 className="text-center mx-auto max-w-[480px] tracking-wider text-3xl sm:text-5xl font-semibold text-black">
          Meet Our Qualified Teachers
        </h1>
        <p className="text-neutral-400 font-semibold text-3xl text-center">
          We have the best teacher in our insitute
        </p>
        <div className="px-0 sm:px-[10%] w-full my-10">
          <Slider {...settings} autoplay arrows>
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
          </Slider>
        </div>
      </div>
      <div className="my-[10%] ">
        <h1 className="text-center mx-auto max-w-[480px] tracking-wider text-3xl sm:text-5xl font-semibold text-black">
          Why You Choose Us
        </h1>
        <p className="text-neutral-400 font-semibold text-xl my-10 text-center max-w-[600px] mx-auto">
          Choosing a college is a significant decision, and there are several
          compelling reasons why students opt for a particular institution.
        </p>
        <div className="px-10 mx-auto sm:px-[10%]  w-full my-10 grid grid-rows-1 sm:grid-cols-2 gap-7 gap-y-20">
          {chooseUsData.map((i) => (
            <div key={i.id} className="flex gap-10">
              <FaCheck className="text-sky-500 font-semibold text-7xl" />
              <div>
                <p className="text-2xl sm:text-5xl  text-neutral-950  tracking-widest">
                  {i.title}
                </p>
                <span className="text-neutral-400 w-full font-semibold">
                  {i.paragraph}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
