import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import NavbarCardsButton from "./NavbarCardsButton";
import { RxDragHandleHorizontal, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const Links = [
    { label: "Showrooms", to: "/marketplace" },
    { label: "Sell For me", to: "/sell-for-me" },
    { label: "Shop", to: "/ShopLayout" }
  ];

  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-72 "
      style={{
        backgroundImage: `url('/images/bg2.jpg')`
      }}
    >
      <div className="flex flex-col justify-between items-center w-[80%] max-sm:w-[100%] md:w-[95%] lg:w-[80%] justify-self-center">
        <div className="flex justify-between items-center p-3 text-sm text-white  sm:px-0 sm:py-1  relative w-full">
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
            <Button
              className="px-8 py-1 bg-indigo-400 rounded-sm"
              name="Login"
            />
          </div>
          <div className="sm:flex md:hidden">
            <button
              onClick={() => setToggle(!toggle)}
              className="sm:pr-3 focus:outline-none"
            >
              {toggle
                ? <RxCross1 className="text-xl" />
                : <RxDragHandleHorizontal className="text-2xl" />}
            </button>

            {toggle &&
              <div className="fixed bg-black inset-0 bg-opacity-50 z-50">
                <div className="absolute top-0 left-0 right-0 bg-white shadow-lg">
                  <div className="container mx-auto px-4 py-6">
                    <div className="flex justify-end mb-4">
                      <button
                        onClick={() => setToggle(false)}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <RxCross1 className="text-2xl" />
                      </button>
                    </div>

                    <nav className="space-y-4">
                      {Links.map(link =>
                        <Link
                          key={link.to}
                          to={link.to}
                          onClick={() => setToggle(false)}
                          className="block text-gray-800 text-lg py-2 hover:bg-gray-100 transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      )}

                      <Button
                        onClick={() => setToggle(false)}
                        className="w-full px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                        name="Login"
                      />
                    </nav>
                  </div>
                </div>
              </div>}
          </div>
        </div>
        <div />
        <div className="flex flex-col gap-2 w-full  items-center justify-center text-xs min-h-48 ">
          <h1 className="text-white md:text-3xl lg:text-4xl max-sm:text-xl ">
            Find Your Dream Car
          </h1>
          <div className="flex  gap-2 max-sm:flex-col ">
            <input
              className="flex-1 bg-white outline-0 text-black rounded-sm px-3 py-3 "
              placeholder="Search brand"
              type="text"
            />
            <div className="flex gap-2  ">
              <input
                className="flex-1 bg-white outline-0 text-black rounded-sm px-3 py-3 "
                placeholder="Cars"
                type="text"
              />
              <Button
                className=" bg-indigo-600 px-7 py-3 rounded-sm text-white "
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
