import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { get } from "../Services/ApiEndPoint";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
import Carousel from "../utils/Carousel";
import { CarsListings } from "../consts/CarsLists";
import Button from "../utils/Button";

const ShowroomsBody = () => {
  //   const userId = useSelector(state => state.auth.user);
  // const [heartStatus, setHeartStatus] = useState({});
  const [grid, setGrid] = useState(false);
  // const [Cars, setCars] = useState();
  const { id } = useParams();
  // setCars(prev => ({...prev, CarsListings}))

  console.log("CarsListings", CarsListings);
  // console.log("Cars",Cars)
  // const handletoggleHeartColor = carId => {
  //   setHeartStatus(prevState => ({
  //     ...prevState,
  //     [carId]: !prevState[carId]
  //   }));
  // };

  //   useEffect(
  //     () => {
  //       const GetingData = async () => {
  //         try {
  //           const res = await get("/api/create");
  //           const filterCars = res.data.filter(usr => usr.userId);
  //           setCars(filterCars);
  //         } catch (error) {
  //           console.error("Error fetching data", error);
  //         }
  //       };
  //       GetingData();
  //     },
  //     [userId]
  //   );

  return (
    <div className="">
      <div className="flex gap-1 justify-end items-center p-2  ">
        <button
          onClick={() => setGrid(true)}
          className={`flex items-center px-2 py-1 rounded-md border ${grid
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={() => setGrid(false)}
          className={`flex items-center px-2 py-1 rounded-md border ${!grid
            ? "bg-blue-500 text-white border-blue-500"
            : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"}`}
        >
          <FaListUl />
        </button>
      </div>

      <div
        className={`grid gap-3 min-h-screen   ${grid
          ? `grid-cols-3 w-full max-sm:grid-cols-2`
          : `w-full grid-cols-1 max-w-screen max-sm:px-0 lg:px-8`}`}
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
                      className="transition duration-300  ease-in-out transform hover:scale-110 p"
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
      {/* </div> */}

      {/* <div className="min-h-screen py-3 mx-3">
            <div className="">
              {CarsListings.length > 0
                ? CarsListings.map(car =>
                    <div
                      key={car._id}
                      className="flex flex-col md:flex-row dark:bg-gray-700 border border-gray-300 dark:border-gray-600 shadow-xl rounded-lg overflow-hidden mx-auto"
                    >
                     
                      <div className="w-full container text-center p-3">
                        {car.images && car.images.length > 0
                          ? <img className="size-32" src={car.images} alt="" />
                              
                            
                          : <div className="flex items-center justify-center h-60 bg-gray-600 dark:bg-gray-600">
                              <p className="text-gray-500 dark:text-gray-400">
                                No image available
                              </p>
                            </div>}
                      </div>

                    
                      <div className="w-full p-3 flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                            {car.carMake} {car.carName}
                          </h2>
                          <p className="text-gray-700 dark:text-gray-300">
                            <span className="font-semibold">
                              {car.carPrice} PKR
                            </span>
                          </p>
                        </div>
                        <p className="font-semibold px-3 py-2">
                          {car.model}
                        </p>
                        <div className="mt-4 space-y-2">
                          <div className="flex gap-4">
                            <p className="font-semibold px-3 py-2">
                              {car.mileage} Km
                            </p>
                            <p className="font-semibold px-3 py-2">
                              {car.engineCapacity} CC
                            </p>

                            <p className="font-semibold px-3 py-2">
                              {car.color}
                            </p>
                            <p className="font-semibold px-3 py-2 dark:text-gray-300">
                              {car.varients}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                : <p className="text-center text-gray-700 dark:text-gray-300 col-span-2">
                    No car data found
                  </p>}
            </div>
          </div> */}
    </div>
  );
};

export default ShowroomsBody;

{
  /* {car.images.map((image, index) =>
                                <div key={index}>
                                  <img
                                    className="h-40 object-cover rounded-md"
                                    src={`http://localhost:8000/images/${image}`}
                                    alt={`${car.carName} - ${car.carMake}`}
                                  />
                                </div>
                              )} */
}
