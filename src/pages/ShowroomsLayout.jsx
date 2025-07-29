import React from "react";
// import Navbar from "../components/Navbar";
import ShowroomSidebar from "../components/ShowroomSlidebar";
// import ShowroomsBody from "../components/ShowroomsBody";
import TopNavbar from "../components/TopNavbar";
import {Outlet} from "react-router"

const Showrooms = () => {
  return (
    <div>
      <TopNavbar className="bg-radial-[at_50%_75%] from-[#bc9a71] via-[#3b270c] to-[#211b14] to-90% "/>
      <div className="w-[90%] justify-self-center my-20 gap-3 max-sm:w-full max-sm:gap-0 max-sm:my-2 flex">
        <ShowroomSidebar />
        
        <main className="flex-2">
            <Outlet />
          </main>
        
      </div>
    </div>
  );
};

export default Showrooms;
