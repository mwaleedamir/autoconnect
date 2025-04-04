import React from "react";
// import Navbar from "../components/Navbar";
import ShowroomSidebar from "../components/ShowroomSlidebar";
import ShowroomsBody from "../components/ShowroomsBody";
import TopNavbar from "../components/TopNavbar";

const Showrooms = () => {
  return (
    <div className="">
      <TopNavbar/>
      <div className="w-[80%] justify-self-center my-20 gap-3 max-sm:w-full max-sm:gap-0 max-sm:my-2 flex">
        <ShowroomSidebar />
        <div className="flex-1">
          <ShowroomsBody />
        </div>
      </div>
    </div>
  );
};

export default Showrooms;
