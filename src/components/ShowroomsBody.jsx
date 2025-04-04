import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
import { CarsListings } from "../consts/CarsLists";
import Button from "../utils/Button";

const ShowroomsBody = () => {
  const [grid, setGrid] = useState(false);

  return (
    <div className="">
      <div className="flex gap-1 justify-end items-center p-2  ">
        <button
          onClick={() => setGrid(true)}
          className={`flex items-center px-2 py-1 rounded-md border ${grid
            ? "bg-[#6b451a] hover:bg-[#47341d] text-white "
            : "bg-gray-200 text-gray-700  hover:bg-gray-300"}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={() => setGrid(false)}
          className={`flex items-center px-2 py-1 rounded-md border ${!grid
            ? "bg-[#6b451a] hover:bg-[#47341d] text-white "
            : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"}`}
        >
          <FaListUl />
        </button>
      </div>

      <div
        className={`grid gap-3 min-h-screen  ${grid
          ? `grid-cols-3 w-full max-sm:grid-cols-2`
          : `w-full grid-cols-1 max-w-screen max-sm:px-0 lg:px-8 px-2`}`}
      >
        {CarsListings.length > 0
          ? CarsListings.map(car =>
              <div
                key={car._id}
                className={`border border-gray-200  shadow-xl rounded-lg ${grid
                  ? `bg-white  bg-opacity-60 `
                  : `flex overflow-hidden gap-2`}`}
              >
                <div>
                  {car.images && car.images.length > 0
                    ? <img
                        className={` justify-self-center rounded-md  ${grid
                          ? `w-[90%] size-32 m-2`
                          : `m-2 flex-1 size-28 w-full `}`}
                        src={car.images}
                        alt={car.carName}
                      />
                    : <p
                        className={`flex items-center justify-center h-56 bg-gray-200 rounded-lg ${grid
                          ? ``
                          : ``}`}
                      >
                        No image available
                      </p>}
                </div>
                <div
                  className={`  justify-self-center ${grid
                    ? `w-[90%]`
                    : `flex flex-col w-full flex-2 pt-2 gap-3`}`}
                >
                  <h2
                    className={`flex   font-extrabold max-sm:text-md text-md text-gray-700  tracking-wide ${grid
                      ? `justify-center`
                      : ``}`}
                  >
                    {car.carMake} {car.carName}
                  </h2>

                  <div className="text-xs text-gray-600  ">
                    <div
                      className={`grid  gap-1 font-semibold  ${grid
                        ? ` place-items-start grid-cols-2`
                        : `grid-cols-3`}`}
                    >
                      <p className={`${grid ? `` : ``}`}>
                        {car.mileage} Km
                      </p>
                      <p className=" ">
                        {car.engineCapacity} CC
                      </p>

                      <p className="">
                        {car.color}
                      </p>
                      <p className={`${grid ? `col-span-2` : ``}`}>
                        {car.varients}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="flex-2 text-md max-sm:text-md font-bold text-gray-800 ">
                      {car.carPrice} PKR
                    </p>
                    <Button
                      className="transition duration-300 bg-white hover:bg-white ease-in-out transform hover:scale-110 p"
                      name={<FaLongArrowAltRight size={26} />}
                    />
                  </div>
                </div>
              </div>
            )
          : <p className="text-center text-gray-700 w-full">
              No car data found
            </p>}
      </div>
    </div>
  );
};

export default ShowroomsBody;
