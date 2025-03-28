import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Carousel } from "react-responsive-carousel";
// import { get } from "../Services/ApiEndPoint";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa6";
import Carousel from "../utils/Carousel"

const ShowroomsBody = () => {
//   const userId = useSelector(state => state.auth.user);
  // const [heartStatus, setHeartStatus] = useState({});
  const [grid, setGrid] = useState(false);
  const [response, setResponse] = useState([]);
  const { id } = useParams();

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
//           setResponse(filterCars);
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
      <div className="flex gap-1 justify-end items-center px-4 py-2 ">
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

      {grid
        ? //grid
          <div className="min-h-screen max-w-[80rem] py-3 mx-3">
            <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {response.length > 0
                ? response.filter(car => car.userId === id).map(car =>
                    <div
                      key={car._id}
                      className="bg-white max-w-64  dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-60 backdrop-blur-md border border-gray-300 rounded-2xl shadow-xl"
                    >
                      <div className="relative mx-auto p-4 w-full">
                        {car.images && car.images.length > 0
                          ? <Carousel
                              showThumbs={false}
                              infiniteLoop={true}
                              className="rounded-lg overflow-hidden"
                            >
                              {car.images.map((image, index) =>
                                <div key={index}>
                                  <img
                                    className="h-40 object-cover rounded-xl"
                                    src={`http://localhost:8000/images/${image}`}
                                    alt={`${car.carName} - ${car.carMake}`}
                                  />
                                </div>
                              )}
                            </Carousel>
                          : <div className="flex items-center justify-center h-56 bg-gray-200 dark:bg-gray-700 rounded-lg">
                              <p className="text-gray-500 dark:text-gray-400">
                                No image available
                              </p>
                            </div>}
                      </div>
                      <div className="px-6 ">
                        <h2 className="flex justify-between font-extrabold text-xl text-gray-700 dark:text-gray-100 tracking-wide">
                          <span className="text-lg ">
                            {car.carMake} {car.carName}
                          </span>
                        </h2>

                        <div className="text-xs text-gray-600 dark:text-gray-300 ">
                          <div className="grid grid-cols-3 ">
                            <p className="font-semibold  py-2 ">
                              {car.mileage} Km
                            </p>
                            <p className="font-semibold  py-2">
                              {car.engineCapacity} CC
                            </p>

                            <p className="font-semibold py-2">
                              {car.color}
                            </p>
                            <p className="font-semibold py-2 dark:text-gray-300">
                              {car.varients}
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-xl font-bold text-gray-800 dark:text-gray-50">
                            {car.carPrice} PKR
                          </p>
                          <button className="  transition duration-300 ease-in-out transform hover:scale-110">
                            <FaLongArrowAltRight size={26} />
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                : <p className="text-center text-gray-700 dark:text-gray-300 w-full">
                    No car data found
                  </p>}
            </div>
          </div>
        : // list
          <div className="min-h-screen py-3 mx-3">
            <div className="grid grid-cols-1 gap-6 w-full max-w-screen sm:px-6 lg:px-8">
              {response.length > 0
                ? response.filter(car => car.userId === id).map(car =>
                    <div
                      key={car._id}
                      className="flex flex-col md:flex-row min-w-[46rem] dark:bg-gray-700 border border-gray-300 dark:border-gray-600 shadow-xl rounded-lg overflow-hidden mx-auto"
                    >
                      {/* Image Carousel */}
                      <div className="w-full lg:w-64 text-center p-3">
                        {car.images && car.images.length > 0
                          ? <Carousel showThumbs={false} infiniteLoop={true}>
                              {car.images.map((image, index) =>
                                <div key={index}>
                                  <img
                                    className="h-40 object-cover rounded-md"
                                    src={`http://localhost:8000/images/${image}`}
                                    alt={`${car.carName} - ${car.carMake}`}
                                  />
                                </div>
                              )}
                            </Carousel>
                          : <div className="flex items-center justify-center h-60 bg-gray-600 dark:bg-gray-600">
                              <p className="text-gray-500 dark:text-gray-400">
                                No image available
                              </p>
                            </div>}
                      </div>

                      {/* Car Details */}
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
          </div>}
    </div>
  );
};

export default ShowroomsBody;
