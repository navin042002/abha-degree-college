import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { footerLinks } from "../constants";
//import { styles } from "../../styles";

import { Logo } from "../assets";
const Footer = () => (
  <section className={`flex  flex-col  bg-sky-700`}>
    <div className={`flex md:flex-row  flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10 px-4">
        <h3
          className={`
            text-gradient font-poppins sm:text-[30px]
            text-[24px]
                lg:text-[53px]
               sm`}
        >
          <img src={Logo} height={40} width={180} className="mr-20" />
        </h3>
        <p className={`text-white mt-4 max-w-[312px] px-4`}>
          Keeping in view the excellent performance of the College in all
          aspects, the State Government and the University
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerItem) => (
          <div
            key={footerItem.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerItem.title}
            </h4>
            <ul className="list-none mt-4">
              {footerItem.links.map((a, index) => (
                <li
                  key={a.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer ${
                    index !== footerItem.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {a.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-around items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2024 Abha Degree collge. All Rights Reserved.
      </p>

      <div className="flex flex-row gap-5 md:mt-0 mt-6">
        <a
          href="www.instagram.com"
          className="cursor-pointer text-[26px] text-white"
        >
          <FaInstagram />
        </a>
        <a
          href="www.twitter.com"
          className="cursor-pointer text-[26px] text-white"
        >
          <FaTwitter />
        </a>
        <a
          href="www.facebook.com"
          className="cursor-pointer text-[26px] text-white"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  </section>
);

export default Footer;
