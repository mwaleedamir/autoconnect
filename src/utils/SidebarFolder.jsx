import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import {ShowroomsName} from "../consts/ShowroomsName"
import { Link } from "react-router-dom";
// import {v4 as uuidv4} from "uuid"

const SidebarFolder = ({ name }) => {
  const [open, setOpen] = useState(false);
  const [activeShowroom, setActiveShowroom] = useState(null);

  const filteredShowrooms = ShowroomsName.filter((showroom) =>
    showroom.showroomName.toLowerCase().includes()
  );
  console.log("ShowroomsName in",ShowroomsName);
  console.log("ShowroomsName filteres",filteredShowrooms);
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
          {filteredShowrooms.length === 0
            ? ShowroomsName.map(showroom =>
                <Link
                  key={showroom._id}
                  to={`/user/marketplace/${showroom._id}`}
                  className={`p-3 w-full flex justify-between items-center rounded-md shadow-md ${activeShowroom ===
                  showroom._id
                    ? "bg-[#1E3A8A] text-white"
                    : "text-black "} hover:bg-opacity-90 transition-colors`}
                  onClick={() => handleShowroomClick(showroom._id)}
                >
                  <span>
                    {showroom.showroomName}
                  </span>
                </Link>
              )
            : filteredShowrooms.map(showroom =>
                <Link
                  key={showroom._id}
                  to={`/user/marketplace/${showroom._id}`}
                  className={`p-3 w-full flex justify-between items-center rounded-md shadow-md ${activeShowroom ===
                  showroom._id
                    ? "bg-[#1E3A8A] text-white"
                    : "text-black "} hover:bg-opacity-90 transition-colors`}
                  onClick={() => handleShowroomClick(showroom._id)}
                >
                  <span>
                    {showroom.showroomName}
                  </span>
                </Link>
              )
              }
        </div>}

    </div>
  );
};

export default SidebarFolder;
