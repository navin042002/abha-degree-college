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
import Gallary from "../components/shared/Gallary";
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
            pursue excellence.We invite you to join us at Abha Degree College
            and embark on a transformative educational journey. Whether you are
            interested in Arts, Science, or Commerce, our college offers a
            supportive and enriching environment where you can pursue your
            passions, achieve your goals, and make lasting memories
          </p>
          <Link
            className="underline cursor-pointer text-blue-600 text-xl"
            to={"/"}
          >
            Read more
          </Link>
        </div>
      </div>

      <div className="my-[10%] flex flex-col items-center gap-10">
        <h1 className="text-center mx-auto max-w-[480px] tracking-wider text-3xl sm:text-5xl font-semibold text-black">
          Our Best Courses
        </h1>
        <p className="text-neutral-400 max-w-[780px] font-semibold my-4 text-xl text-center">
          Abha Degree College, a distinguished institution dedicated to
          providing quality education in the fields of Arts, Science, and
          Commerce.
        </p>
        <div className="px-0 sm:px-[10%] w-full my-10 flex gap-10">
          <div className="w-[450px] flex flex-col gap-4 px-10 py-10 border  border-sky-300 rounded-md  hover:-translate-y-5 transition-all duration-300">
            <h3 className="text-xl font-semibold text-sky-500">
              Comprehensive Arts Program
            </h3>
            <p className="text-[18px] font-thin tracking-wider">
              Our Arts program is designed to cultivate a deep understanding of
              humanities and social sciences. Students can explore subjects like
              History, Political Science, Sociology, and Literature, which
              provide a broad perspective on human culture and society
            </p>
          </div>
          <div className="w-[450px] flex flex-col gap-4 px-10 py-10 border  border-sky-300 rounded-md  hover:-translate-y-5 transition-all duration-300">
            <h3 className="text-xl font-semibold text-sky-500">
              Science Department Excellence
            </h3>
            <p className="text-[18px] font-thin tracking-wider">
              We offer courses in Physics, Chemistry, Biology, and Mathematics,
              among others. Our rigorous academic program is complemented by
              hands-on laboratory work, research projects, and seminars,
              ensuring that students gain practical experience and a thorough
              understanding of scientific principles.
            </p>
          </div>
          <div className="w-[450px] flex flex-col gap-4 px-10 py-10 border  border-sky-300 rounded-md  hover:-translate-y-5 transition-all duration-300">
            <h3 className="text-xl font-semibold text-sky-500">
              Commerce and Business Studies
            </h3>
            <p className="text-[18px] font-thin tracking-wider">
              Our Commerce program is tailored to meet the demands of the
              dynamic business world. Courses in Accounting, Finance, Marketing,
              and Business Management are designed to provide students with a
              solid foundation in business principles and practices. The
              curriculum includes practical training, internships, and case
              studies, enabling students to apply theoretical knowledge to
              real-world business scenarios and preparing them for successful
              careers in commerce and industry.
            </p>
          </div>
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
      <Gallary />
      <Contact />
    </div>
  );
};

export default Home;
