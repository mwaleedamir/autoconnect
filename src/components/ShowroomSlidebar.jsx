import React, { useState } from "react";
import SidebarFolder from "../utils/SidebarFolder";
import { IoSearchOutline } from "react-icons/io5";

const ShowroomSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <aside className="min-h-screen  ">
      <div className="flex max-md:hidden  bg-gradient-to-t from-[#805f3a] via-[#3b270c] to-[#443626] [background-position:50%_75%]
  flex-col gap-3 items-center min-h-screen py-2 max-w-58 shadow-lg rounded-lg">
        <div className="flex h-10 bg-white  flex-row m-3 focus:outline-none shadow-lg rounded-lg overflow-hidden">
          <button className=" p-2 text-[#6b451a] outline-0 flex justify-center items-center  transition-all duration-500">
            <IoSearchOutline />
          </button>
          <input
            type="text"
            className="container bg-white h-10 px-1 py-2 outline-0 transition-all duration-300"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <SidebarFolder name="Showrooms" />
        <SidebarFolder name="Location" />
        <SidebarFolder name="Catagories" />
        <SidebarFolder name="Price" />
        <SidebarFolder name="Colors" />
        <SidebarFolder name="Make" />
        <SidebarFolder name="Model" />
        <SidebarFolder name="Milage" />
        <SidebarFolder name="Engine Capacity" />
      </div>
    </aside>
  );
};

export default ShowroomSidebar;
