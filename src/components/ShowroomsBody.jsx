import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
import { CarsListings } from "../consts/carsLists";
import Button from "../utils/Button";
import SaveButton from "./SaveButton";

const ShowroomsBody = () => {
  const [grid, setGrid] = useState(false);

  return (
    <div className="">
      <div className="flex gap-1 justify-end items-center pb-2  ">
        <button
          onClick={() => setGrid(true)}
          className={`flex items-center px-2 py-1 rounded-md border ${grid
            ? "bg-[#6b451a] hover:bg-[#47341d] text-white "
            : " text-gray-700  hover:bg-gray-300"}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={() => setGrid(false)}
          className={`flex items-center px-2 py-1 rounded-md border ${!grid
            ? "bg-[#6b451a] hover:bg-[#47341d] text-white "
            : " text-gray-700 border-gray-300 hover:bg-gray-300"}`}
        >
          <FaListUl />
        </button>
      </div>

      <div
        className={`grid bg-white ${grid
          ? `grid-cols-4 gap-2 w-full max-sm:grid-cols-2`
          : `w-full grid-cols-1 gap-3  max-w-screen max-sm:px-0 lg:px-8 `}`}
      >
        {CarsListings.length > 0
          ? CarsListings.map(car =>
              <div
                key={car._id}
                className={`border border-gray-200 bg-white hover:border-2 shadow-xl hover:shadow-[#bc9a71] rounded-lg ${grid
                  ? ` bg-opacity-60 gap-2`
                  : `flex overflow-hidden h-48 items-center px-2 gap-3`}`}
              >
                <div className={`  ${grid
                          ? ``
                          : `flex-1`}`}>
                  {car.images && car.images.length > 0
                    ? <img
                        className={` justify-self-center rounded-md  ${grid
                          ? `w-[90%] size-44 m-2`
                          : `m-2  h-40 w-full `}`}
                        src={car.images}
                        alt={car.carName}
                      />
                    : <p
                        className={` items-center justify-center h-56  rounded-lg ${grid
                          ? ``
                          : ``}`}
                      >
                        No image available
                      </p>}
                </div>
                <div
                  className={`flex items-center justify-center bg-white ${grid
                    ? `flex  `
                    : `flex-2 h-full`}`}
                >
                  <div
                    className={`bg-white flex-col justify-self-center ${grid
                      ? ` w-[90%] gap-3 space-y-3`
                      : `flex  w-full flex-1 gap-3 `}`}
                  >
                    <div
                      className={`flex max-sm:text-md text-md text-gray-700 justify-between tracking-wide ${grid
                        ? ``
                        : ``}`}
                    >
                      <h1 className="font-extrabold flex items-center">
                        {car.carMake} {car.carName}
                      </h1>
                      <p>
                        <SaveButton />
                      </p>
                    </div>

                      <div
                        className={`grid  gap-1 font-semibold text-xs text-gray-600 bg-white  ${grid
                          ? ` place-items-left grid-cols-2 `
                          : `grid-cols-4 justify-items-center h-full `}`}
                      >
                        <p className={`${grid ? `` : ``}`}>
                          {car.mileage} Km
                        </p>
                        <p className=" ">
                          {car.engineCapacity} CC
                        </p>
                        {!grid &&
                          <p className="">
                            {car.color}
                          </p>}
                        {!grid &&
                          <p className={`${grid ? `col-span-2` : ``}`}>
                            {car.varients}
                          </p>}
                      </div>
                      <div>
                      <p className="text-sm ">
                         updated {car.engineCapacity} days
                        </p>
                      </div>
                  </div>

                  </div>
                  <div
                    className={`flex bg-white ${grid
                      ? `justify-center p-3  items-center`
                      : `flex-col items-center justify-center flex-1 h-[60%]`}`}
                  >
                    <p className="flex-2 text-md  max-sm:text-md font-bold text-gray-800 ">
                      {car.carPrice} PKR
                    </p>
                    <Button
                      className="transition p-1  text-white bg-[#6b451a] duration-300 rounded-md justify-items-center  ease-in-out transform hover:scale-110"
                      name="More detail"
                    />
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
