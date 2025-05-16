import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDragHandleHorizontal, RxCross1 } from "react-icons/rx";
import Button from "../utils/Button";
import { FaCarSide } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";

const TopNavbar = ({ className }) => {
  const [toggle, setToggle] = useState(false);
  const Links = [
    { svg: <FaCarSide />, label: "Showrooms", to: "/marketplace" },
    { svg: <FaCarSide />, label: "Sell", to: "/sell-for-me" },
    { svg: <AiOutlineShop />, label: "Shop", to: "/shop" },
    { svg: <MdOutlinePersonOutline />, label: "Login", to: "/login" }
  ];

  return (
    <div className={` ${className}`}>
      <div className="flex h-16 w-[80%] max-sm:w-[100%] overflow-none justify-self-center justify-between items-center p-3 text-sm text-white  sm:px-0 sm:py-1  relative ">
        <div className="text-center">
          <Link to="/">
            <p className="">AutoCorner</p>
            <p className="text-white text-[12px]">Let's Connect together</p>
          </Link>
        </div>
        {/* <div className="flex w-full min-xl:w-[80%]  max-sm:flex-col max-sm:w-[90%]">
          <div className="flex flex-wrap w-[100%] h-8 px-3 max-sm:container">
            <input
              className="flex-1  max-sm:w-full bg-white border-r  outline-0 text-black rounded-l-sm px-3 py-3 "
              placeholder="car Make, Model,"
              type="text"
            />
            <input
              className="flex-1  bg-white outline-0 text-black  border-r   px-3  "
              placeholder="Location"
              type=""
            />
            <input
              className="flex-1  bg-white outline-0 text-black  border-r   px-3  "
              placeholder="Showroom"
              type=""
            />
            <input
              className="flex-1  bg-white outline-0 text-black  px-3  "
              placeholder="Cars price"
              type="number"
            />
            <Button
              className="flex-1 p-3 flex justify-center overflow-none xs:px-4 max-sm:px-7 items-center  rounded-r-sm text-white "
              name="Find"
            />
          </div>
        </div> */}
        <div className="hidden min-md:flex gap-3 items-center">
          {Links.map(link =>
            <Link
              className="flex gap-1 items-center "
              key={link.to}
              to={link.to}
            >
              {link.svg} {link.label}{" "}
            </Link>
          )}
        </div>
        <div className="sm:flex min-md:hidden">
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
                    <Button
                      onClick={() => setToggle(false)}
                      // className=""
                      name={<RxCross1 className="text-2xl text-[#4A3418] hover:text-[#382713]" />}
                    />
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
                      className="w-full px-4 py-2 text-white transition-colors duration-300"
                      name="Login"
                    />
                  </nav>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
