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
      <div className="flex h-16 w-[90%] max-sm:w-[100%] justify-self-center justify-between items-center p-3 text-sm text-white  sm:px-0 sm:py-1  relative ">
        <div className="text-center">
          <Link to="/">
            <p className="">AutoCorner</p>
            <p className="text-white text-[12px]">Let's Connect together</p>
          </Link>
        </div>
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
                      className="bg-[#4A3418] hover:bg-[#382713] text-gray-600 hover:text-gray-900"
                      name={<RxCross1 className="text-2xl" />}
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
