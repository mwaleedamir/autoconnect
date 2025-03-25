import React from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";


const Navbar = () => {
  const Links = [
    { label: "Showrooms", to: "/marketplace" },
    { label: "Sell For me", to: "/sell-for-me" },
    { label: "Assessories", to: "/assessories" }
  ];

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-72 "
      style={{
        backgroundImage: `url('/images/bg2.jpg')`
      }}
    >
      <div className="flex flex-col justify-between items-center">
        <div className="flex justify-between items-center p-3 text-sm text-white w-[80%] justify-self-center">
          <div className="text-center">
            <Link to="/">
              <p className="">AutoCorner</p>
              <p className="text-white text-[12px]">Let's Connect together</p>
            </Link>
          </div>
          <div className="hidden md:flex gap-3 items-center">
            {Links.map(link =>
              <Link key={link.to} to={link.to}>
                {" "}{link.label}{" "}
              </Link>
            )}
            <div>
              <Button
                className="px-8 py-1 bg-indigo-400 rounded-sm"
                name="Login"
              />
            </div>
          </div>
        </div>
        <div />
        <div className="flex flex-col gap-2  items-center justify-center justify-self-center w-[80%]  text-xs min-h-64 ">
          <h1 className="text-white md:text-3xl lg:text-4xl  ">
            Find Your Dream Car
          </h1>
          <div className="flex  gap-2 max-sm:flex-col ">
            <input
              className="flex-1 bg-white outline-0 text-black rounded-sm px-2 py-2 h-8 "
              placeholder="Search brand"
              type="text"
            />
            <div className="flex gap-2  ">
              <input
                className="flex-1 bg-white outline-0 text-black rounded-sm px-2 py-1 h-8"
                placeholder="Cars"
                type="text"
              />
              <Button
                className=" bg-indigo-600 px-7 py-2 rounded-sm text-white "
                name="Search"
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
