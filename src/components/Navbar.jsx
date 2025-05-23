import React from "react";
import Button from "../utils/Button";
import NavbarCardsButton from "./NavbarCardsButton";
import TopNavbar from "./TopNavbar";
import NavbarCar from "./NavbarCar";
import gif from '/images/car-gif.gif'

const Navbar = () => {
  // bg-[url(/images/bg2.jpg)] bg-cover bg-center bg-no-repeat
  return (
    <div className="bg-radial-[at_50%_75%] from-[#bc9a71] via-[#3b270c] to-[#211b14] to-90% min-h-64 max-sm:min-h-72  bg-blend-lighten md:bg-blend-darken">
      <TopNavbar className="h-10"/>

      <div className="flex flex-col justify-between items-center w-[80%] max-sm:w-[100%] justify-self-center  ">
        <div className="flex flex-col gap-2 w-full items-center justify-center text-xs min-h-48 ">
          <h1 className="text-white text-3xl lg:text-4xl max-sm:text-xl ">
            Find Your Dream Car
          </h1>
          {/* <div className="flex w-full min-xl:w-[80%]  gap-2 max-sm:flex-col max-sm:w-[90%]">
            <input
              className="flex-1 w-[40%] max-sm:w-full bg-white outline-0 text-black rounded-sm px-3 py-3 "
              placeholder="Search Make, Model"
              type="text"
            />
            {/* min-lg:w-58 *
            <div className="flex gap-2 w-[60%] max-sm:container">
              <input
                className="flex-2  bg-white outline-0 text-black rounded-sm px-3 py-3 "
                placeholder="Cars"
                type="text"
              />
              <Button
                className="flex-1 flex justify-center overflow-none xs:px-4 max-sm:px-7 items-center px-7 py-3 rounded-sm text-white "
                name="Search"
              />
            </div>
          </div> */}
          <div className="flex w-full min-xl:w-[80%]  max-sm:flex-col max-sm:w-[90%]">
                    <div className="flex flex-wrap w-[100%] h-8 px-3 max-sm:container">
                      <input
                        className="flex-1 max-sm:w-full bg-white border-r h-10  outline-0 text-black rounded-l-lg px-3 py-3 "
                        placeholder="Car Make, Model, Milage"
                        type="text"
                      />
                      <input
                        className="flex-1  bg-white outline-0 text-black h-10  border-r   px-3  "
                        placeholder="Location"
                        type=""
                      />
                      <input
                        className="flex-1  bg-white outline-0 text-black h-10  border-r   px-3  "
                        placeholder="Showroom name"
                        type=""
                      />
                      {/* <input
                        className="flex-1  bg-white outline-0 text-black h-10  border-r   px-3  "
                        placeholder="Showroom name"
                        type=""
                      /> */}
                      <input
                        className="flex-1  bg-white outline-0 text-black h-10  px-3  "
                        placeholder="Car price"
                        type="number"
                      />
                      <Button
                        className="flex-1 p-3 flex justify-center overflow-none h-10 xs:px-4 max-sm:px-7 items-center  rounded-r-lg text-white "
                        name="Find"
                      />
                    </div>
                  </div>
          {/* <NavbarCardsButton /> */}
        </div>
      </div>
      {/* <div className="w-full flex justify-center justify-self-center">
        <img className="" src={gif} alt="gif" />
      </div> */}
      {/* <div className="flex  justify-center gap-2 justify-self-center items-center">
        <NavbarCar />
        <NavbarCar />
        <div className="flex max-md:hidden">
        <NavbarCar />

        <NavbarCar />
        </div>
      </div> */}
        </div>
  );
};

export default Navbar;
