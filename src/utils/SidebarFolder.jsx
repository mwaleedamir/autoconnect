import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import ShowroomsName from "../consts/showroomsName.json"
import  CarsMake  from "../consts/carMake.json";
import CarCategories from "../consts/carCatogories.json";
import LocationShowrooms from "../consts/locationShowrooms.json";
import CarColors from "../consts/carColors.json";
import CarEngineCapacities from "../consts/carEngineCapacity.json";
import {v4 as uuidv4} from "uuid"

const SidebarFolder = ({ name }) => {
  const [open, setOpen] = useState(false);
  const [activeShowroom, setActiveShowroom] = useState(null);
 const [year, setYear] = useState(1990); // Selected year
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1990 + 1 }, (_, index) => 1990 + index);

  const filteredShowrooms = ShowroomsName.filter((showroom) =>
    showroom.showroomName.toLowerCase().includes()
  );

  const handleShowroomClick = (showroomId) => {
    setActiveShowroom(showroomId);
  };

  return (
    <div className="w-full " >
      <button className="w-full px-3" onClick={() => setOpen(!open)}>
        {name &&
          <div className="flex bg-white text-[#6b451a] justify-between p-2 rounded-md shadow-md items-center w-full ">
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
        <div className="flex flex-col text-white items-stretch justify-start px-2  my-2 w-[90%] max-h-64 overflow-y-auto scrollbar-hide justify-self-center text-xs space-y-1">
        {(filteredShowrooms.length === 0 ? ShowroomsName : filteredShowrooms).map(showroom => (
          <Link
            key={showroom._id}
            to={`/user/marketplace/${showroom._id}`}
            className={`p-2 w-full flex justify-between items-center hover:text-white hover:bg-amber-950 rounded-md shadow-md transition-colors ${
              activeShowroom === showroom._id
                ? "bg-[#6b451a] text-white"
                : "bg-white text-[#6b451a] hover:bg-opacity-90"
            }`}
            onClick={() => handleShowroomClick(showroom._id)}
          >
            <span className="truncate">{showroom.showroomName}</span>
          </Link>
        ))}
      </div>
      }

      {open && 
      name === "Price" && 
      <div className="flex flex-col items-start justify-start justify-self-center gap-1 pt-3 px-2 my-2 w-[90%] ">
        <p className=" text-white">From</p>
        <input type="number" className="bg-white flex-1 outline-0 rounded-sm h-full p-2 " placeholder="min" />
        <p className=" text-white">To</p>
        <input type="number" className="bg-white flex-1 outline-0 rounded-sm  h-full p-2" placeholder="max" />
        <button className="hover:text-xl cursor-pointer  w-full items-center text-white ">Go</button>
      </div>
      }

      {open && 
      name === "Make" && 
      <div className="flex flex-col items-center w-[90%] gap-1 pt-3   jusitfy-center justify-self-center ">
        <select name="make" id="make" size={8} multiple className=" text-white flex-2 scrollbar-hide overflow-y-auto outline-0 w-full">
          {CarsMake.map((car) => 
          <option key={uuidv4()} value={car.value} className="flex bg-white text-[#6b451a] relative px-3 rounded-md my-1 mx-3 py-1 hover:bg-amber-950 hover:text-white ">  {car.Name} </option>
          )}
        </select>
        <button className="hover:text-xl cursor-pointer w-full text-white flex-1 ">Go</button>
      </div>
      }

      {open && 
      name === "Model" && 
      <div className="flex flex-col items-center text-white gap-1 pt-3  w-[90%] jusitfy-center justify-self-center ">
       <select
        value={year}
        // onChange={(e) => setYear(Number(e.target.value))}
        className="text-white flex-2 outline-0 w-full scrollbar-hide overflow-y-auto "
        size={6}
        multiple
      >
        {years.map((yr) => (
          <option key={yr} value={yr} className="flex bg-white text-[#6b451a] relative px-3  rounded-md my-1 mx-3 py-1 hover:bg-amber-950 hover:text-white ">
            {yr}
          </option>
        ))}
      </select>
      <button className="hover:text-xl w-full cursor-pointer text-white  flex-1 ">Go</button>
      </div>
      }


      {open && 
      name === "Catagories" && 
      <div className="flex flex-col items-center text-white gap-1 pt-3   w-[90%] jusitfy-center justify-self-center ">
       <select
        value={year}
        // onChange={(e) => setYear(Number(e.target.value))}
        className="text-white flex-2 outline-0 w-full scrollbar-hide overflow-y-auto"
        size={6}
        multiple
      >
        {CarCategories.map((yr) => (
          <option key={yr} value={yr} className="flex bg-white text-[#6b451a] relative px-3 rounded-md my-1 mx-3 py-1 hover:bg-amber-950 hover:text-white ">
            {yr.Name}
          </option>
        ))}
      </select>
      <button className="hover:text-xl w-full cursor-pointer text-white  flex-1 ">Go</button>
      </div>
      }


      {open &&  
      name === "Milage" && 
      <div className="flex flex-col items-center text-white  gap-1 pt-3   w-[90%] jusitfy-center justify-self-center ">
        <input type="range" className="w-full" />
      </div>
      }

      {open &&  
      name === "Location" && 
      <div className="flex flex-col items-center text-white  gap-1 pt-3   w-[90%] jusitfy-center justify-self-center ">
     <select
        // value={year}
        className="text-white flex-2 outline-0 w-full scrollbar-hide overflow-y-auto"
        size={6}
        multiple
      >
        {LocationShowrooms.map((yr) => (
          <option key={yr} value={yr.Name} className="flex bg-white text-[#6b451a] relative px-3 rounded-md my-1 mx-3 py-1  hover:text-white hover:bg-amber-950 ">
            {yr.Name}
          </option>
        ))}
      </select>
      </div>
      }

      {open &&  
      name === "Colors" && 
      <div className="flex flex-col items-center text-white  gap-1 pt-3  w-[90%] jusitfy-center justify-self-center ">
     <select
        className="text-white flex-2 outline-0 w-full scrollbar-hide overflow-y-auto "
        size={6}
        multiple
      >
        {CarColors.map((yr) => (
          <option
          key={yr.Name}
          value={yr.Name}
          className="flex justify-between bg-white text-[#6b451a] relative px-3 rounded-md my-1 mx-3 py-1 hover:text-white"
          style={{ backgroundColor: undefined}} // default background
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = yr.hex}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
        >
          {yr.Name}
        </option>
        ))}
      </select>
      </div>
      }

      {open &&  
      name === "Engine Capacity" && 
      <div className="flex flex-col items-center text-white  gap-1 pt-3   w-[90%] jusitfy-center justify-self-center ">
     <select
        className="text-white flex-2 outline-0 w-full scrollbar-hide overflow-y-auto"
        size={6}
        multiple
      >
        {CarEngineCapacities.map((yr) => (
          <option
          key={yr.Name}
          value={yr.Name}
          className="flex justify-between bg-white text-[#6b451a] relative px-3 rounded-md my-1 mx-3 py-1 hover:text-white hover:bg-amber-950 "
        >
          {yr.Name}
        </option>
        ))}
      </select>
      </div>
      }



    </div>
  );
};

export default SidebarFolder;
