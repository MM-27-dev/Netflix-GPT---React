import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from-black mb-10">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4"> {overview}</p>
      <div>
        <button className="bg-gray-400 text-white p-4 px-10 text-xl rounded-lg inline-flex items-center gap-2">
          <CiPlay1 className="text-2xl" />
          Play
        </button>
        <button className="mx-2 bg-gray-400 text-white p-4 px-10 text-xl rounded-lg inline-flex items-center gap-2">
          <IoIosInformationCircleOutline className="text-2xl black"  /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
