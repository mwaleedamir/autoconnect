import React from "react";
// import Navbar from "../components/Navbar";
import ShowroomSidebar from "../components/ShowroomSlidebar";
import ShowroomsBody from "../components/ShowroomsBody";
import TopNavbar from "../components/TopNavbar";

const Showrooms = () => {
  return (
    <div className="">
      <TopNavbar/>
      <div className="w-[80%] justify-self-center my-20 flex">
        <ShowroomSidebar />
        <div className="flex-1">
          <ShowroomsBody />
        </div>
      </div>
    </div>
  );
};

export default Showrooms;
