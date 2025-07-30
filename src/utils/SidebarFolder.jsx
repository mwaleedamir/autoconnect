// import React, { useEffect, useState } from "react";
// import { FaChevronUp, FaChevronDown } from "react-icons/fa";
// import { Link } from "react-router-dom";
// // import ShowroomsName from "../consts/showroomsName.json"
// // import  CarsMake  from "../consts/carMake.json";
// // import CarCategories from "../consts/carCatogories.json";
// // import LocationShowrooms from "../consts/locationShowrooms.json";
// // import  from "../consts/carColors.json";
// // import CarEngineCapacities from "../consts/carEngineCapacity.json";
// import {v4 as uuidv4} from "uuid"
// import { get } from "../services/apiEndpoint";


// const SidebarFolder = ({ name }) => {
//   const [open, setOpen] = useState(false);
//   const [activeShowroom, setActiveShowroom] = useState(null);
//  const [year, setYear] = useState(1990); 
//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: currentYear - 1990 + 1 }, (_, index) => 1990 + index);
//   const [showroomNames, setShowroomNames] = useState([])
//   const [isLoadingOwner, setIsLoadingOwner] = useState(false)

//   const CarsMake = [
//     { "Name": "Honda","value": "honda" },
//     { "Name": "Suzuki", "value": "suzuki" },
//     { "Name": "Toyota", "value": "toyota" },
//     { "Name": "MG", "value": "mg" },
//     { "Name": "Nissan", "value": "nissan" },
//     { "Name": "Daihatsu", "value": "daihatsu" },
//     { "Name": "Hyundai", "value": "hyundai" },
//     { "Name": "Kia", "value": "kia" },
//     { "Name": "Changan", "value": "changan" },
//     { "Name": "FAW", "value": "faw" },
//     { "Name": "Chevrolet", "value": "chevrolet" },
//     { "Name": "Ford", "value": "ford" },
//     { "Name": "Mercedes-Benz", "value": "mercedes" },
//     { "Name": "BMW", "value": "bmw" },
//     { "Name": "Audi", "value": "audi" },
//     { "Name": "Jeep", "value": "jeep" },
//     { "Name": "Lexus", "value": "lexus" },
//     { "Name": "Subaru", "value": "subaru" },
//     { "Name": "Mitsubishi", "value": "mitsubishi" },
//     { "Name": "Peugeot", "value": "peugeot" }
//   ]
  
//   // const CarCategories = [
//   //   { "Name": "Sedan" },
//   //   { "Name": "Hatchback" },
//   //   { "Name": "SUV" },
//   //   { "Name": "Crossover" },
//   //   { "Name": "Coupe" },
//   //   { "Name": "Convertible" },
//   //   { "Name": "Pickup Truck" },
//   //   { "Name": "Van" },
//   //   { "Name": "Minivan" },
//   //   { "Name": "Wagon" },
//   //   { "Name": "Jeep" },
//   //   { "Name": "Electric" },
//   //   { "Name": "Hybrid" },
//   //   { "Name": "Luxury" },
//   //   { "Name": "Sports Car" },
//   //   { "Name": "Off-Road" }
//   // ]
  
// //   const CarColors = [
// //   { "name": "Attitude Black", "commonName": "Black", "hex": "#0C0C0C" },
// //   { "name": "Silver Metallic", "commonName": "Silver", "hex": "#C0C0C0" },
// //   { "name": "Super White", "commonName": "White", "hex": "#FDFDFD" },
// //   { "name": "White Pearl", "commonName": "Pearl White", "hex": "#F7F7F7" },
// //   { "name": "Graphite Gray", "commonName": "Gray", "hex": "#6E6E6E" },
// //   { "name": "Gun Metallic", "commonName": "Dark Gray", "hex": "#4B4B4B" },
// //   { "name": "Milano Red", "commonName": "Red", "hex": "#B22222" },
// //   { "name": "Wine Red", "commonName": "Maroon", "hex": "#800000" },
// //   { "name": "Urban Blue", "commonName": "Blue", "hex": "#1F3A93" },
// //   { "name": "Midnight Blue", "commonName": "Navy Blue", "hex": "#191970" },
// //   { "name": "Sand Beige", "commonName": "Beige", "hex": "#E4D6C8" },
// //   { "name": "Coffee Brown", "commonName": "Brown", "hex": "#8B4513" },
// //   { "name": "Jungle Green", "commonName": "Green", "hex": "#013220" },
// //   { "name": "Burnt Orange", "commonName": "Orange", "hex": "#CC5500" },
// //   { "name": "Champagne Gold", "commonName": "Golden", "hex": "#D4AF37" }
// // ]

// const LocationShowrooms = [
//     {"Name":"Jail Road"},
//     {"Name":"JohrTown"},
//     {"Name":"TownShip"},
//     {"Name":"Samanabad"}
// ]

// const CarEngineCapacities =[
//     { "Name": "660 cc" },
//     { "Name": "800 cc" },
//     { "Name": "1000 cc" },
//     { "Name": "1200 cc" },
//     { "Name": "1300 cc" },
//     { "Name": "1500 cc" },
//     { "Name": "1600 cc" },
//     { "Name": "1800 cc" },
//     { "Name": "2000 cc" },
//     { "Name": "2400 cc" },
//     { "Name": "2500 cc" },
//     { "Name": "3000 cc" },
//     { "Name": "3500 cc" },
//     { "Name": "4000 cc" },
//     { "Name": "4500 cc" },
//     { "Name": "5000 cc" }
//   ]  


//   useEffect( () =>{
//     const fetchingOwners = async() =>{
//       try {
//         setIsLoadingOwner(true)
//         const Owners = await get("/auth/owner")
//         console.log("ShowroomsName",Owners.data)
//         setShowroomNames(Owners.data)
//       } catch (error) {
//         console.log("Error",error)
//       } finally {
//         setIsLoadingOwner(false)
//       }
//     }
//     fetchingOwners()
//   },[])



//   const handleShowroomClick = (showroomId) => {
//     setActiveShowroom(showroomId);
//   };

//   return (
//     <div className="w-full " >
//       <button className="w-full px-3" onClick={() => setOpen(!open)}>
//         {name &&
//           <div className="flex bg-white text-[#6b451a] justify-between p-2 rounded-md shadow-md items-center w-full ">
//             <h1>
//               {name}
//             </h1>
//             <p>
//               {open ? <FaChevronUp /> : <FaChevronDown />}
//             </p>
//           </div>}
//       </button>

//       {!open &&
//         name === "Showrooms" &&
//         <div className="flex flex-col text-white items-stretch justify-start px-2  my-2 w-[90%] max-h-64 overflow-y-auto scrollbar-hide justify-self-center text-xs space-y-1">
//          {isLoadingOwner ? (
//         <p>Loading please wait...</p>
//       ) : (
//         showroomNames.map((showroom) => (
//           <Link
//           key={showroom._id}
//           to={`/marketplace/${showroom._id}`}
//           className={`p-2 w-full flex justify-between items-center hover:text-white hover:bg-amber-950 rounded-md shadow-md transition-colors ${
//             activeShowroom === showroom._id
//               ? "bg-[#6b451a] text-white"
//               : "bg-white text-[#6b451a] hover:bg-opacity-90"
//           }`}
//           onClick={() => handleShowroomClick(showroom._id)}
//         >
//           <span className="truncate">{showroom.showroomName}</span>
//         </Link>
//       )))}
//       </div>
//       }

//       {open && 
//       name === "Price" && 
//       <div className="flex flex-col items-start justify-start justify-self-center gap-1 pt-3 px-2 my-2 w-[90%] ">
//         <p className=" text-white">From</p>
//         <input type="number" className="bg-white flex-1 outline-0 rounded-sm h-full p-2 " placeholder="min" />
//         <p className=" text-white">To</p>
//         <input type="number" className="bg-white flex-1 outline-0 rounded-sm  h-full p-2" placeholder="max" />
//         <button className="hover:text-xl cursor-pointer  w-full items-center text-white ">Go</button>
//       </div>
//       }

//       {open && 
//       name === "Make" && 
//       <div className="flex flex-col items-center w-[90%] gap-1 pt-3   jusitfy-center justify-self-center ">
//         <select name="make" id="make" size={8} multiple className=" text-white flex-2 scrollbar-hide overflow-y-auto outline-0 w-full">
//           {CarsMake.map((car) => 
//           <option key={uuidv4()} value={car.value} className="flex bg-white text-[#6b451a] relative px-3 rounded-md my-1 mx-3 py-1 hover:bg-amber-950 hover:text-white ">  {car.Name} </option>
//           )}
//         </select>
//         <button className="hover:text-xl cursor-pointer w-full text-white flex-1 ">Go</button>
//       </div>
//       }

//       {open && 
//       name === "Model" && 
//       <div className="flex flex-col items-center text-white gap-1 pt-3  w-[90%] jusitfy-center justify-self-center ">
//        <select
//         value={year}
//         // onChange={(e) => setYear(Number(e.target.value))}
//         className="text-white flex-2 outline-0 w-full scrollbar-hide overflow-y-auto "
//         size={6}
//         multiple
//       >
//         {years.map((yr) => (
//           <option key={yr} value={yr} className="flex bg-white text-[#6b451a] relative px-3  rounded-md my-1 mx-3 py-1 hover:bg-amber-950 hover:text-white ">
//             {yr}
//           </option>
//         ))}
//       </select>
//       <button className="hover:text-xl w-full cursor-pointer text-white  flex-1 ">Go</button>
//       </div>
//       }


//       {open && 
//       name === "Catagories" && 
//       <div className="flex flex-col items-center text-white gap-1 pt-3   w-[90%] jusitfy-center justify-self-center ">
//        <select
//         value={year}
//         // onChange={(e) => setYear(Number(e.target.value))}
//         className="text-white flex-2 outline-0 w-full scrollbar-hide overflow-y-auto"
//         size={6}
//         multiple
//       >
//         { [
//     { "Name": "Sedan" },
//     { "Name": "Hatchback" },
//     { "Name": "SUV" },
//     { "Name": "Crossover" },
//     { "Name": "Coupe" },
//     { "Name": "Convertible" },
//     { "Name": "Pickup Truck" },
//     { "Name": "Van" },
//     { "Name": "Minivan" },
//     { "Name": "Wagon" },
//     { "Name": "Jeep" },
//     { "Name": "Electric" },
//     { "Name": "Hybrid" },
//     { "Name": "Luxury" },
//     { "Name": "Sports Car" },
//     { "Name": "Off-Road" }
//   ].map((yr) => (
//           <option key={yr} value={yr} className="flex bg-white text-[#6b451a] relative px-3 rounded-md my-1 mx-3 py-1 hover:bg-amber-950 hover:text-white ">
//             {yr.Name}
//           </option>
//         ))}
//       </select>
//       <button className="hover:text-xl w-full cursor-pointer text-white  flex-1 ">Go</button>
//       </div>
//       }


//       {open &&  
//       name === "Milage" && 
//       <div className="flex flex-col items-center text-white  gap-1 pt-3   w-[90%] jusitfy-center justify-self-center ">
//         <input type="range" className="w-full" />
//       </div>
//       }

//       {open &&  
//       name === "Location" && 
//       <div className="flex flex-col items-center text-white  gap-1 pt-3   w-[90%] jusitfy-center justify-self-center ">
//      <select
//         // value={year}
//         className="text-white flex-2 outline-0 w-full scrollbar-hide overflow-y-auto"
//         size={6}
//         multiple
//       >
//         {LocationShowrooms.map((yr) => (
//           <option key={yr} value={yr.Name} className="flex bg-white text-[#6b451a] relative px-3 rounded-md my-1 mx-3 py-1  hover:text-white hover:bg-amber-950 ">
//             {yr.Name}
//           </option>
//         ))}
//       </select>
//       </div>
//       }

//       {open &&  
//       name === "Colors" && 
//       <div className="flex flex-col items-center text-white  gap-1 pt-3  w-[90%] jusitfy-center justify-self-center ">
//      <select
//         className="text-white flex-2 outline-0 w-full scrollbar-hide overflow-y-auto "
//         size={6}
//         multiple
//       >
//         { [
//   { "name": "Attitude Black", "commonName": "Black", "hex": "#0C0C0C" },
//   { "name": "Silver Metallic", "commonName": "Silver", "hex": "#C0C0C0" },
//   { "name": "Super White", "commonName": "White", "hex": "#FDFDFD" },
//   { "name": "White Pearl", "commonName": "Pearl White", "hex": "#F7F7F7" },
//   { "name": "Graphite Gray", "commonName": "Gray", "hex": "#6E6E6E" },
//   { "name": "Gun Metallic", "commonName": "Dark Gray", "hex": "#4B4B4B" },
//   { "name": "Milano Red", "commonName": "Red", "hex": "#B22222" },
//   { "name": "Wine Red", "commonName": "Maroon", "hex": "#800000" },
//   { "name": "Urban Blue", "commonName": "Blue", "hex": "#1F3A93" },
//   { "name": "Midnight Blue", "commonName": "Navy Blue", "hex": "#191970" },
//   { "name": "Sand Beige", "commonName": "Beige", "hex": "#E4D6C8" },
//   { "name": "Coffee Brown", "commonName": "Brown", "hex": "#8B4513" },
//   { "name": "Jungle Green", "commonName": "Green", "hex": "#013220" },
//   { "name": "Burnt Orange", "commonName": "Orange", "hex": "#CC5500" },
//   { "name": "Champagne Gold", "commonName": "Golden", "hex": "#D4AF37" }
// ].map((yr) => (
//           <option
//           key={uuidv4()}
//           value={yr.name}
//           className="flex justify-between bg-white text-[#6b451a] relative px-3 rounded-md my-1 mx-3 py-1 hover:text-white"
//           style={{ backgroundColor: undefined}} // default background
//           onMouseOver={(e) => e.currentTarget.style.backgroundColor = yr.hex}
//           onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
//         >
//           {yr.name}
//         </option>
//         ))}
//       </select>
//       </div>
//       }

//       {open &&  
//       name === "Engine Capacity" && 
//       <div className="flex flex-col items-center text-white  gap-1 pt-3   w-[90%] jusitfy-center justify-self-center ">
//      <select
//         className="text-white flex-2 outline-0 w-full scrollbar-hide overflow-y-auto"
//         size={6}
//         multiple
//       >
//         {CarEngineCapacities.map((yr) => (
//           <option
//           key={yr.Name}
//           value={yr.Name}
//           className="flex justify-between bg-white text-[#6b451a] relative px-3 rounded-md my-1 mx-3 py-1 hover:text-white hover:bg-amber-950 "
//         >
//           {yr.Name}
//         </option>
//         ))}
//       </select>
//       </div>
//       }
//     </div>
//   );
// };

// export default SidebarFolder;

import React, { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { get } from "../services/apiEndpoint";
import { setFilters } from "../features/filterSlice";

const SidebarFolder = ({ name }) => {
  const [open, setOpen] = useState(false);
  const [activeShowroom, setActiveShowroom] = useState(null);
  const [showroomNames, setShowroomNames] = useState([]);
  const [isLoadingOwner, setIsLoadingOwner] = useState(false);
  
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter?.filters || {});
  const showroomId = useParams()

  // Car data arrays
  const CarsMake = [
    { "Name": "Honda", "value": "honda" },
    { "Name": "Suzuki", "value": "suzuki" },
    { "Name": "Toyota", "value": "toyota" },
    { "Name": "MG", "value": "mg" },
    { "Name": "Nissan", "value": "nissan" },
    { "Name": "Daihatsu", "value": "daihatsu" },
    { "Name": "Hyundai", "value": "hyundai" },
    { "Name": "Kia", "value": "kia" },
    { "Name": "Changan", "value": "changan" },
    { "Name": "FAW", "value": "faw" },
    { "Name": "Chevrolet", "value": "chevrolet" },
    { "Name": "Ford", "value": "ford" },
    { "Name": "Mercedes-Benz", "value": "mercedes" },
    { "Name": "BMW", "value": "bmw" },
    { "Name": "Audi", "value": "audi" },
    { "Name": "Jeep", "value": "jeep" },
    { "Name": "Lexus", "value": "lexus" },
    { "Name": "Subaru", "value": "subaru" },
    { "Name": "Mitsubishi", "value": "mitsubishi" },
    { "Name": "Peugeot", "value": "peugeot" }
  ];

  const CarCategories = [
    { "Name": "Sedan" },
    { "Name": "Hatchback" },
    { "Name": "SUV" },
    { "Name": "Crossover" },
    { "Name": "Coupe" },
    { "Name": "Convertible" },
    { "Name": "Pickup Truck" },
    { "Name": "Van" },
    { "Name": "Minivan" },
    { "Name": "Wagon" },
    { "Name": "Jeep" },
    { "Name": "Electric" },
    { "Name": "Hybrid" },
    { "Name": "Luxury" },
    { "Name": "Sports Car" },
    { "Name": "Off-Road" }
  ];

  const CarColors = [
    { "name": "Attitude Black", "commonName": "Black", "hex": "#0C0C0C" },
    { "name": "Silver Metallic", "commonName": "Silver", "hex": "#C0C0C0" },
    { "name": "Super White", "commonName": "White", "hex": "#FDFDFD" },
    { "name": "White Pearl", "commonName": "Pearl White", "hex": "#F7F7F7" },
    { "name": "Graphite Gray", "commonName": "Gray", "hex": "#6E6E6E" },
    { "name": "Gun Metallic", "commonName": "Dark Gray", "hex": "#4B4B4B" },
    { "name": "Milano Red", "commonName": "Red", "hex": "#B22222" },
    { "name": "Wine Red", "commonName": "Maroon", "hex": "#800000" },
    { "name": "Urban Blue", "commonName": "Blue", "hex": "#1F3A93" },
    { "name": "Midnight Blue", "commonName": "Navy Blue", "hex": "#191970" },
    { "name": "Sand Beige", "commonName": "Beige", "hex": "#E4D6C8" },
    { "name": "Coffee Brown", "commonName": "Brown", "hex": "#8B4513" },
    { "name": "Jungle Green", "commonName": "Green", "hex": "#013220" },
    { "name": "Burnt Orange", "commonName": "Orange", "hex": "#CC5500" },
    { "name": "Champagne Gold", "commonName": "Golden", "hex": "#D4AF37" }
  ];

  const LocationShowrooms = [
    { "Name": "Jail Road" },
    { "Name": "JohrTown" },
    { "Name": "TownShip" },
    { "Name": "Samanabad" }
  ];

  const CarEngineCapacities = [
    { "Name": "660 cc" },
    { "Name": "800 cc" },
    { "Name": "1000 cc" },
    { "Name": "1200 cc" },
    { "Name": "1300 cc" },
    { "Name": "1500 cc" },
    { "Name": "1600 cc" },
    { "Name": "1800 cc" },
    { "Name": "2000 cc" },
    { "Name": "2400 cc" },
    { "Name": "2500 cc" },
    { "Name": "3000 cc" },
    { "Name": "3500 cc" },
    { "Name": "4000 cc" },
    { "Name": "4500 cc" },
    { "Name": "5000 cc" }
  ];

  // Generate years array
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1990 + 1 }, (_, index) => 1990 + index);

  // Filter handling functions
  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    dispatch(setFilters(newFilters));
  };

  const handleArrayFilterChange = (key, value) => {
    const currentArray = filters[key] || [];
    const newArray = currentArray.includes(value)
      ? currentArray.filter(v => v !== value)
      : [...currentArray, value];
    handleFilterChange(key, newArray);
  };

  const handleRangeFilterChange = (key, minValue, maxValue) => {
    handleFilterChange(key, { min: minValue, max: maxValue });
  };

  // Fetch showroom names
  useEffect(() => {
    const fetchingOwners = async () => {
      try {
        setIsLoadingOwner(true);
        const Owners = await get("/auth/owner");
        console.log("ShowroomsName", Owners.data);
        setShowroomNames(Owners.data);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setIsLoadingOwner(false);
      }
    };
    fetchingOwners();
  }, []);

  const handleShowroomClick = (showroomId) => {
    setActiveShowroom(showroomId);
  };

  const handlePriceSubmit = () => {
    const minPrice = document.querySelector('input[name="minPrice"]').value;
    const maxPrice = document.querySelector('input[name="maxPrice"]').value;
    
    if (minPrice || maxPrice) {
      handleRangeFilterChange('price', minPrice || 0, maxPrice || Infinity);
    }
  };

  const handleMileageChange = (value) => {
    handleFilterChange('mileage', value);
  };

  return (
    <div className="w-full">
      <button className="w-full px-3" onClick={() => setOpen(!open)}>
        {name && (
          <div className="flex bg-white text-[#6b451a] justify-between p-2 rounded-md shadow-md items-center w-full">
            <h1>{name}</h1>
            <p>{open ? <FaChevronUp /> : <FaChevronDown />}</p>
          </div>
        )}
      </button>

      {/* Showrooms Section */}
      {!open && name === "Showrooms" && (
        <div className="flex flex-col text-white items-stretch justify-start px-2 my-2 w-[90%] max-h-64 overflow-y-auto scrollbar-hide justify-self-center text-xs space-y-1">
          {isLoadingOwner ? (
            <p>Loading please wait...</p>
          ) : (
            showroomNames.map((showroom) => (
              <Link
                key={showroom._id}
                to={`/marketplace/${showroom._id}`}
                className={`p-2 w-full flex justify-between items-center hover:text-white hover:bg-amber-950 rounded-md shadow-md transition-colors ${
                  activeShowroom === showroom._id
                    ? "bg-[#6b451a] text-white"
                    : "bg-white text-[#6b451a] hover:bg-opacity-90"
                }`}
                onClick={() => handleShowroomClick(showroom._id)}
              >
                <span className="truncate">{showroom.showroomName}</span>
              </Link>
            ))
          )}
        </div>
      )}

      {/* Price Section */}
      {open && name === "Price" && (
        <div className="flex flex-col items-start justify-start justify-self-center gap-1 pt-3 px-2 my-2 w-[90%]">
          <p className="text-white">From</p>
          <input
            type="number"
            name="minPrice"
            className="bg-white flex-1 outline-0 rounded-sm h-full p-2 w-full"
            placeholder="min"
            defaultValue={filters.price?.min || ''}
          />
          <p className="text-white">To</p>
          <input
            type="number"
            name="maxPrice"
            className="bg-white flex-1 outline-0 rounded-sm h-full p-2 w-full"
            placeholder="max"
            defaultValue={filters.price?.max || ''}
          />
          <button
            className="hover:text-xl cursor-pointer w-full items-center text-white mt-2 bg-[#6b451a] p-2 rounded-md"
            onClick={handlePriceSubmit}
          >
            Apply
          </button>
        </div>
      )}

      {/* Make Section */}
      {open && name === "Make" && (
        <div className="flex flex-col items-start justify-start justify-self-center gap-2 pt-3 px-2 my-2 w-[90%] max-h-64 overflow-y-auto scrollbar-hide">
          {CarsMake.map((car) => (
            <label key={car.value} className="flex items-center gap-2 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={(filters.make || []).includes(car.value)}
                onChange={() => handleArrayFilterChange("make", car.value)}
                className="accent-[#6b451a]"
              />
              <span className="text-sm">{car.Name}</span>
            </label>
          ))}
        </div>
      )}

      {/* Model/Year Section */}
      {open && name === "Model" && (
        <div className="flex flex-col items-start justify-start justify-self-center gap-2 pt-3 px-2 my-2 w-[90%] max-h-64 overflow-y-auto scrollbar-hide">
          {years.map((year) => (
            <label key={year} className="flex items-center gap-2 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={(filters.year || []).includes(year)}
                onChange={() => handleArrayFilterChange("year", year)}
                className="accent-[#6b451a]"
              />
              <span className="text-sm">{year}</span>
            </label>
          ))}
        </div>
      )}

      {/* Categories Section */}
      {open && name === "Categories" && (
        <div className="flex flex-col items-start justify-start justify-self-center gap-2 pt-3 px-2 my-2 w-[90%] max-h-64 overflow-y-auto scrollbar-hide">
          {CarCategories.map((category) => (
            <label key={category.Name} className="flex items-center gap-2 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={(filters.categories || []).includes(category.Name)}
                onChange={() => handleArrayFilterChange("categories", category.Name)}
                className="accent-[#6b451a]"
              />
              <span className="text-sm">{category.Name}</span>
            </label>
          ))}
        </div>
      )}

      {/* Mileage Section */}
      {open && name === "Mileage" && (
        <div className="flex flex-col items-center text-white gap-3 pt-3 w-[90%] justify-self-center">
          <div className="w-full">
            <label className="block text-sm mb-2">Mileage: {filters.mileage || 0} km</label>
            <input
              type="range"
              className="w-full accent-[#6b451a]"
              min="0"
              max="500000"
              step="1000"
              value={filters.mileage || 0}
              onChange={(e) => handleMileageChange(parseInt(e.target.value))}
            />
            <div className="flex justify-between text-xs mt-1">
              <span>0 km</span>
              <span>500,000 km</span>
            </div>
          </div>
        </div>
      )}

      {/* Location Section */}
      {open && name === "Location" && (
        <div className="flex flex-col items-start justify-start justify-self-center gap-2 pt-3 px-2 my-2 w-[90%]">
          {LocationShowrooms.map((location) => (
            <label key={location.Name} className="flex items-center gap-2 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={(filters.location || []).includes(location.Name)}
                onChange={() => handleArrayFilterChange("location", location.Name)}
                className="accent-[#6b451a]"
              />
              <span className="text-sm">{location.Name}</span>
            </label>
          ))}
        </div>
      )}

      {/* Colors Section */}
      {open && name === "Colors" && (
        <div className="flex flex-col items-start justify-start justify-self-center gap-2 pt-3 px-2 my-2 w-[90%] max-h-64 overflow-y-auto scrollbar-hide">
          {CarColors.map((color) => (
            <label key={color.name} className="flex items-center gap-2 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={(filters.colors || []).includes(color.name)}
                onChange={() => handleArrayFilterChange("colors", color.name)}
                className="accent-[#6b451a]"
              />
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded border border-gray-300"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className="text-sm">{color.name}</span>
              </div>
            </label>
          ))}
        </div>
      )}

      {/* Engine Capacity Section */}
      {open && name === "Engine Capacity" && (
        <div className="flex flex-col items-start justify-start justify-self-center gap-2 pt-3 px-2 my-2 w-[90%] max-h-64 overflow-y-auto scrollbar-hide">
          {CarEngineCapacities.map((engine) => (
            <label key={engine.Name} className="flex items-center gap-2 text-white cursor-pointer">
              <input
                type="checkbox"
                checked={(filters.engineCapacity || []).includes(engine.Name)}
                onChange={() => handleArrayFilterChange("engineCapacity", engine.Name)}
                className="accent-[#6b451a]"
              />
              <span className="text-sm">{engine.Name}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarFolder;