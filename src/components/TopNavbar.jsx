import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDragHandleHorizontal, RxCross1 } from "react-icons/rx";
import { FaCarSide, FaHome } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { useSelector } from "react-redux";
// import {ownerAuth} from "../app/store"

const TopNavbar = ({ className }) => {
  const [toggle, setToggle] = useState(false);
  const Links = [
    { svg: <FaHome />, label: "Home", to: "/" },
    { svg: <FaCarSide />, label: "Showrooms", to: "/marketplace" },
    // { svg: <FaCarSide />, label: "Sell", to: "/sell-for-me" },
    // { svg: <AiOutlineShop />, label: "Shop", to: "/shop" },
  ];

  const { isloadingOwner, errorOwner, owner } = useSelector((state) => state.ownerAuth)
  const { isloadingUser, errorUser, user } = useSelector((state) => state.userAuth)
  const OwnerId = owner?.owners?._id;
  console.log("OwnerId",OwnerId)
  return (
    <div className={` ${className}`}>
      <div className="flex h-16 w-[80%] max-sm:w-[100%] overflow-none justify-self-center justify-between items-center p-3 text-sm text-white  sm:px-0 sm:py-1  relative ">
        <div className="text-center">
          <Link to="/">
            <p className="">AutoConnect</p>
            <p className="text-white text-[12px]">Let's Connect for the future</p>
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

          {owner ?
            <Link to={`/owner/dashboard/${OwnerId}`}>
              <div className="flex gap-1 items-center">
                <MdSpaceDashboard /> Portal
              </div></Link>
            :
            <Link to="/login">
              <div className="flex gap-1 items-center">
                <MdOutlinePersonOutline /> Login
              </div></Link>
          }

          {owner ?
            <Link to={`/owner/dashboard/${OwnerId}`}>
              <div className="flex gap-1 items-center">
                
              </div></Link>
            :
            <Link to="/signup">
              <div className="flex gap-1 items-center">
                <MdOutlinePersonOutline /> Signup
              </div></Link>
          }
        </div>

        <div className="sm:flex min-md:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="sm:pr-3 focus:outline-none"
          >
            {toggle
              ? <RxCross1 className="text-xl bg-white" />
              : <RxDragHandleHorizontal className="text-2xl" />}
          </button>

          {toggle &&
            <div className="fixed inset-0 bg-opacity-50 z-50">
              <div className="absolute top-0 left-0 right-0 bg-white shadow-lg">
                <div className="container mx-auto px-4 py-6">
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={() => setToggle(!toggle)}
                    >
                      <RxCross1 className="text-2xl text-[#bc9a71] " />
                    </button>
                  </div>

                  <nav className="space-y-4">
                    {Links.map(link =>
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setToggle(!toggle)}
                        className="block text-gray-800 text-lg py-2 hover:bg-gray-100 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>

                    )}
                    {owner ?
                      <Link to={`/owner/dashboard/${OwnerId}`}>
                        <div className="flex gap-1 text-gray-800 text-lg py-2 hover:bg-gray-100 transition-colors duration-300">
                          <MdSpaceDashboard /> Portal
                        </div></Link>
                      :
                      <Link to="/login">
                        <div className="flex gap-1 text-gray-800 text-lg py-2 hover:bg-gray-100 transition-colors duration-300">
                          <MdOutlinePersonOutline /> Login
                        </div></Link>
                    }
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
