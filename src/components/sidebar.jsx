import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { myContext } from "../App";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { showSidebar, setShowSidebar } = useContext(myContext);

  console.log(showSidebar);

  return (
    <div
      className={` ${
        showSidebar
          ? "w-[30%] p-2 flex-col gap-2 text-white hidden lg:flex md:w-[21%]"
          : "hidden"
      }`}
    >
      {/* ---------------------------- A --------------------------- */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-evenly ">
        <div
          className="flex items-center gap-3 pl-6 cursor-pointer hover:bg-[#ffffff26] p-4 hover:rounded"
          onClick={() => navigate("/")}
        >
          <img src={assets.home_icon} alt="None" className="w-6" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-6 cursor-pointer p-4 hover:bg-[#ffffff26] hover:rounded">
          <img src={assets.search_icon} alt="None" className="w-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      {/* ---------------------------- B --------------------------- */}

      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="None" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={assets.arrow_icon}
              alt="None"
              className="w-5 cursor-pointer"
              onClick={() => setShowSidebar(!showSidebar)}
            />
            <img src={assets.plus_icon} alt="None" className="w-5" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1 className="">Create your first playlist</h1>
          <p className="font-light">its easy we will help you</p>
          <button className="px-4 py-2 bg-white text-[15px] text-black rounded-full mt-4 hover:bg-gradient-to-r from-green-600 to-green-800">
            Create playlist
          </button>
        </div>

        <div className=" p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1 className="">Lets findsome podcast to follow</h1>
          <p className="font-light">we'll keep you update on new episodess</p>
          <button className="px-4 py-2 bg-white text-[15px] text-black rounded-full mt-4 hover:bg-gradient-to-r from-green-600 to-green-800">
            Browse podcasts
          </button>
        </div>
      </div>
      {/* ---------------------------- C --------------------------- */}
    </div>
  );
};

export default Sidebar;
