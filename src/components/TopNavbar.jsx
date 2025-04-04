import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDragHandleHorizontal, RxCross1 } from "react-icons/rx";
import Button from "../utils/Button";

const TopNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const Links = [
    { label: "Showrooms", to: "/marketplace" },
    { label: "Sell For me", to: "/sell-for-me" },
    { label: "Shop", to: "/ShopLayout" }
  ];

  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/bg2.jpg')`
      }}
    >
      <div className="flex w-[80%] max-sm:w-[100%] justify-self-center justify-between items-center p-3 text-sm text-white  sm:px-0 sm:py-1  relative ">
        <div className="text-center">
          <Link to="/">
            <p className="">AutoCorner</p>
            <p className="text-white text-[12px]">Let's Connect together</p>
          </Link>
        </div>
        <div className="hidden min-md:flex gap-3 items-center">
          {Links.map(link =>
            <Link key={link.to} to={link.to}>
              {" "}{link.label}{" "}
            </Link>
          )}
          <Button className="px-8 py-1 bg-indigo-400 rounded-sm" name="Login" />
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
    </div>
  );
};

export default TopNavbar;
