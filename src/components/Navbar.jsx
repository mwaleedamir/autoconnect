import React from "react";
import Button from "../utils/Button";
import NavbarCardsButton from "./NavbarCardsButton";
import TopNavbar from "./TopNavbar";

const Navbar = () => {
 

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-64 max-sm:min-h-72"
      style={{
        backgroundImage: `url('/images/bg2.jpg')`
      }}
    >
        <TopNavbar/>

      <div className="flex flex-col justify-between items-center w-[80%] max-sm:w-[100%] md:w-[95%] lg:w-[80%] justify-self-center  ">
        <div className="flex flex-col gap-2 w-full items-center justify-center text-xs min-h-48 ">
          <h1 className="text-white md:text-3xl lg:text-4xl max-sm:text-xl ">
            Find Your Dream Car
          </h1>
          <div className="flex  gap-2 max-sm:flex-col ">
            <input
              className="flex-1 min-lg:w-58 bg-white outline-0 text-black rounded-sm px-3 py-3 "
              placeholder="Search brand"
              type="text"
            />
            <div className="flex gap-2  ">
              <input
                className="flex-1 min-lg:w-54 bg-white outline-0 text-black rounded-sm px-3 py-3 "
                placeholder="Cars"
                type="text"
              />
              <Button
                className=" bg-indigo-600 flex justify-center items-center min-lg:w-36 px-7 py-3 rounded-sm text-white "
                name="Search"
              />
            </div>
          </div>
          <NavbarCardsButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
