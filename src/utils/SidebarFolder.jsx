import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import {ShowroomsName} from "../consts/ShowroomsName"

const SidebarFolder = ({ name }) => {
  const [open, setOpen] = useState(false);
  const [activeShowroom, setActiveShowroom] = useState(null);

  const filteredShowrooms = ShowroomsName.filter((showroom) =>
    showroom.showroomName.toLowerCase().includes()
  );
  // searchTerm.toLowerCase()

  const handleShowroomClick = (showroomId) => {
    setActiveShowroom(showroomId);
  };

  return (
    <div className="w-full" >
      <button className="w-full px-3 " onClick={() => setOpen(!open)}>
        {name &&
          <div className="flex justify-between p-2 rounded-md shadow-md items-center w-full ">
            <h1>
              {name}
            </h1>
            <p>
              {open ? <FaChevronUp /> : <FaChevronDown />}
            </p>
          </div>}
      </button>

      {open &&
        name === "Showrooms" &&
        <div className="flex flex-col items-center justify-center py-2 w-full text-xs">
          {filteredShowrooms.length > 0
            ? filteredShowrooms.map(showroom =>
                <Link
                  key={showroom._id}
                  href={`/user/marketplace/${showroom._id}`}
                  className={`p-3 w-full flex justify-between items-center rounded-md shadow-md ${activeShowroom ===
                  showroom._id
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-black dark:text-white"} hover:bg-opacity-90 transition-colors`}
                  onClick={() => handleShowroomClick(showroom._id)}
                >
                  <span>
                    {showroom.showroomName}
                  </span>
                  <AiOutlineEnter
                    size={20}
                    className="text-[#1E3A8A] dark:text-[#FACC15]"
                  />
                </Link>
              )
            : <p className="text-gray-500 dark:text-gray-400">
                No showrooms found
              </p>}
        </div>}

    </div>
  );
};

export default SidebarFolder;
