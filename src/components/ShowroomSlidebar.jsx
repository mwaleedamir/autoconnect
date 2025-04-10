import React, { useState } from "react";
import SidebarFolder from "../utils/SidebarFolder";
import { IoSearchOutline } from "react-icons/io5";

const ShowroomSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <aside className="min-h-screen">
      <div className="flex max-md:hidden flex-col gap-3 items-center min-h-screen py-2 max-w-58 shadow-lg rounded-l-lg">
        <div className="flex h-10 flex-row m-3 focus:outline-none shadow-lg rounded-lg overflow-hidden">
          <button className=" p-2  outline-0 flex justify-center items-center  transition-all duration-500">
            <IoSearchOutline />
          </button>
          <input
            type="text"
            className="container h-10 px-1 py-2   outline-0 transition-all duration-300"
            placeholder="Search..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <SidebarFolder name="Showrooms" />
        <SidebarFolder name="Price" />
        <SidebarFolder name="Make" />
        <SidebarFolder name="Model" />
        <SidebarFolder name="Catagories" />
        <SidebarFolder name="Milage" />
        <SidebarFolder name="Engine Capacity" />
        <SidebarFolder name="Location" />
      </div>
    </aside>
  );
};

export default ShowroomSidebar;
