/* eslint-disable no-unused-vars */
import React from "react";
import LeftSidebar from "../components/Sidebar/LeftSidebar";
import Feed from "../components/Feed/Feed";
import RightSidebar from "../components/Sidebar/RightSidebar";
// import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <Navbar /> */}

      <div className="flex justify-center gap-4 px-4 py-5">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Middle Feed */}
        <div className="w-full md:w-3/5 h-screen overflow-y-scroll no-scrollbar">
          <Feed />
        </div>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
