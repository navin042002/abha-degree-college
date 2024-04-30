import React from "react";
import { NoticeData } from "../constants";

const Notification = () => {
  return (
    <div className="flex items-center flex-col gap-2 sm:flex-row justify-evenly px-20 my-20 ">
      {NoticeData.map((item) => (
        <div key={item.id} className="shadow-md bg-white w-[500px] px-20">
          <p className="text-xl sm:text-2xl font-bold">{item.title}</p>
          <hr className="w-full h-1 my-2 bg-orange-500" />
          <div className="noticeBox">
            <ul>
              {item.notices.map((i) => (
                <li key={i.id} className="">
                  <span className="bg-orange-400 rounded text-white">new</span>
                  {i.notice}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
