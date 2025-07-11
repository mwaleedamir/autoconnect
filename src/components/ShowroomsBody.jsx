import React, { useEffect, useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
// import { CarsListings } from "../consts/carsLists.js";
import Button from "../utils/Button";
import SaveButton from "./SaveButton";
import { Grid, List, Heart, MapPin, Fuel, Gauge, Car, Calendar } from 'lucide-react';
import { get } from "../services/apiEndpoint";


const ShowroomsBody = () => {
  const [grid, setGrid] = useState(false);
  const [carsData, setCarsData] = useState([])

  // const timeAndDate = carsData.time
  const dateObj = new Date(carsData.time);
  let date = "Invalid";
  let time = "Invalid";

if (!isNaN(dateObj.getTime())) {
  date = dateObj.toISOString().split("T")[0];
  time = dateObj.toISOString().split("T")[1].split("Z")[0];
}


  useEffect(()=>{
    const fetchCarsData = async () =>{
      try {
        const getCarsData = await get(`/api/create`)
        console.log("getCarsData",getCarsData.data)
        setCarsData(getCarsData.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCarsData()
  },[])
  
  return (
    <div>
  <div className="flex gap-1 justify-end items-center pb-2">
    <button
      onClick={() => setGrid(true)}
      className={`flex items-center px-2 py-1 rounded-md border ${grid
        ? "bg-[#6b451a] hover:bg-[#47341d] text-white"
        : "text-gray-700 hover:bg-gray-300"}`}
    >
      <BsFillGridFill />
    </button>
    <button
      onClick={() => setGrid(false)}
      className={`flex items-center px-2 py-1 rounded-md border ${!grid
        ? "bg-[#6b451a] hover:bg-[#47341d] text-white"
        : "text-gray-700 border-gray-300 hover:bg-gray-300"}`}
    >
      <FaListUl />
    </button>
  </div>

  <div
    className={`grid bg-white ${grid
      ? `grid-cols-4 gap-2 w-full max-sm:grid-cols-2`
      : `w-full grid-cols-1 gap-3 max-w-screen max-sm:px-0 lg:px-8`}`}
  >
    {carsData.length > 0
      ? carsData.map(car =>
          <div
            key={car._id}
            className={`group hover:shadow-card-hover transition-all duration-300 hover:scale-[1.02] bg-gradient-card border-0 shadow-card border border-gray-200 bg-white hover:border-2 shadow-xl hover:shadow-[#bc9a71] rounded-lg ${grid
              ? `bg-opacity-60 gap-2 flex-col`
              : `flex overflow-hidden h-52 items-center px-2 gap-3 flex-row`}`}
          >
            {/* Image Section */}
            <div className={`relative ${grid ? `w-full h-full ` : `w-1/3 h-full flex-1`}`}>
              {car.images ? (
                 <img
                 className={`w-full h-full object-cover justify-self-center rounded-md ${grid
                   ? `rounded-t-lg`
                   : `rounded-l-lg`}`}
                 src={`https://autoconnect-backend.onrender.com/images/${car.images[0]}`}
                 alt={`${car.carMake} ${car.carName}`}
               />
              ) : (
                <div
                  className={`w-full h-full bg-muted flex items-center justify-center ${grid
                    ? `rounded-t-lg`
                    : `rounded-l-lg`}`}
                >
                  <Car className="h-12 w-12 text-muted-foreground" />
                </div>
              )}
              <div className="absolute top-2 right-2">
                <SaveButton />
              </div>
            </div>

            {/* Content Section */}
            <div className={`p-4 ${grid ? `flex-1` : `flex-1 flex flex-col justify-between`}`}>
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-lg text-foreground leading-tight">
                    {car.carMake} {car.carName}
                  </h3>
                </div>

                {/* Specifications */}
                <div
                  className={`grid gap-2 text-sm text-muted-foreground ${grid
                    ? `grid-cols-2`
                    : `grid-cols-2 lg:grid-cols-4`}`}
                >
                  <div className="flex items-center gap-1">
                    <Gauge className="h-3 w-3" />
                    <span className="truncate">{car.mileage} km</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Fuel className="h-3 w-3" />
                    <span className="truncate">{car.engineCapacity} CC</span>
                  </div>
                  {(!grid || window.innerWidth >= 1024) && (
                    <>
                      <div className="flex items-center gap-1">
                        <div className="h-3 w-3 rounded-full border-2 border-current" />
                        <span className="truncate">{car.color}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Car className="h-3 w-3" />
                        <span className="truncate">{car.varients}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Updated info */}
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Updated <span>Updated on {date} at {time}</span> </span>
                </div>
              </div>

              {/* Footer */}
              <div className={`mt-4 ${grid ? `space-y-3` : `flex items-end justify-between`}`}>
                <div className="text-primary flex justify-start items-center gap-2">
                 <h1 className="text-xl font-bold ">{car.carPrice}  </h1><h2 className="text-sm" >lacs pkr</h2>
                </div>
                
                <button
                  variant="premium"
                  size={grid ? "default" : "sm"}
                  className={`transition p-1 text-white bg-[#6b451a] duration-300 rounded-md justify-items-center ease-in-out transform hover:scale-110 ${grid ? `w-full` : ``}`}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        )
      : <div className="col-span-full text-center py-12">
          <Car className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-lg text-muted-foreground">No cars available</p>
          <p className="text-sm text-muted-foreground">Check back later for new listings</p>
        </div>
    }
  </div>
</div>
  );
};

export default ShowroomsBody;
