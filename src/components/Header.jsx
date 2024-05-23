import React from "react";
import { Logo } from "../assets";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { navItem } from "../constants";

const Header = () => {
  const navigation = useNavigate();
  return (
    <div className="h-full  w-full  ">
      <TopHeader />
      <nav className="flex items-center justify-center py-3 bg-orange-700">
        <ul className="flex items-center gap-2 sm:gap-20">
          {navItem.map((item) => (
            <li
              className="text-[11px] hover:underline hover:text-sky-600 transition-colors cursor-pointer sm:text-xl text-white "
              key={item.id}
              onClick={() => navigation(item.slug)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const TopHeader = () => {
  return (
    <div className="w-full flex justify-between flex-col sm:flex-row items-center py-2 px-3 border border-y-slate-400">
      <div className="flex items-center flex-col sm:flex-row gap-2 ">
        <img src={Logo} alt="abha college logo" className=" h-14 sm:h-36" />
        <div>
          <h1 className="text-[13px]  text-center sm:text-3xl font-semibold text-slate-800 ">
            ABHA DEGREE COLLEGE , MUZAFFARPUR{" "}
          </h1>
          <h2 className="text-[11px] sm:text-xl font-semibold  text-center text-slate-600">
            An Affiliated College under B.R. Ambedkar Bihar University.
          </h2>
          <p className="text-[11px] sm:text-xl font-semibold  text-center text-slate-600">
            Dariyapur, Kafen , Bihar, India
          </p>
        </div>
      </div>
      <div className="flex w-full my-5 sm:my-0 sm:w-[50%] flex-col gap-10 items-center  sm:flex-row justify-bewteen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  items-center ">
          <p className="flex items-center gap-2 cursor-pointer underline text-sky-500 mx-1 text-[14px] sm:text-xl">
            <FaPhone /> 9334900239
          </p>
          <p className="flex items-center gap-2 cursor-pointer underline text-sky-500 mx-1  text-[14px] sm:text-xl">
            <FaPhone /> 7004699400
          </p>
          <p className="flex items-center gap-2 cursor-pointer underline text-sky-500 text-[10px] sm:text-xl">
            <FaEnvelope /> abhadegree@gmail.com
          </p>
        </div>
        <div className="flex justify-center    sm:my-0 my-5  items-center ">
          <FaFacebook
            onClick={() =>
              (window.location.href =
                "https://www.facebook.com/people/Abha-Degree-College/61559022300034/?mibextid=ZbWKwL")
            }
            className=" cursor-pointer underline text-sky-500 mx-5 text-4xl"
          />
          <FaInstagram
            onClick={() =>
              (window.location.href =
                "https://www.instagram.com/abhadegreecollege/?igsh=bXc1ajJzZHZjbW91")
            }
            className=" cursor-pointer underline text-sky-500 mx-5 text-4xl"
          />
          <FaWhatsapp className=" cursor-pointer underline text-sky-500 mx-5 text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
