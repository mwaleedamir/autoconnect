import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { ownerLogout } from "../features/userLoginSlice";
import { FaHome, FaEdit, FaTachometerAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdCreate } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { useSelector } from "react-redux";

const OwnerPortalSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dispatch = useDispatch()
  const { owner } = useSelector((state) => state.ownerAuth)
  const userId = owner.owners._id 
    
  return (
    <aside
      className={`min-h-screen bg-white border-r border-gray-200 flex flex-col justify-between shadow transition-all duration-800 ${isCollapsed ? "w-16" : "w-60"
        }`}
    >
      {/* Top Logo & Toggle */}
      <div className="flex items-center justify-between px-4 h-14 border-b border-gray-200">
        {!isCollapsed && (
          <h1 className="text-xl font-bold text-black tracking-wide whitespace-nowrap">
            Auto<span className="text-amber-500">Connect</span>
          </h1>
        )}
        <button
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="text-xl text-gray-700 "
        >
          <FiMenu />
        </button>
      </div>

      {/* Sidebar Items */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-hidden">
        {[
          { name: "Dashboard", logo: FaTachometerAlt, link: `/owner/dashboard/${userId}` },
          { name: "Profile", logo: IoPerson, link: `/owner/profile/${userId}` },
          { name: "Create Listings", logo: IoMdCreate, link: `/owner/portal-create-listings/${userId}` },
          { name: "Show Listings", logo: FaEdit, link: `/owner/portal-Show-listings/${userId}` },
          { name: "Settings", logo: IoSettingsOutline, link: `/owner/portal-settings/${userId}` },
          { name: "Home", logo: FaHome, link: "/" },
        ].map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                ? "bg-[#aa702e] text-white"
                : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <item.logo className="text-xl min-w-[20px]" />
            {!isCollapsed && <span className="truncate">{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="px-4 py-5 border-t border-gray-200">
        <button
          onClick={() => dispatch(ownerLogout())}
          className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-md"
        >
          <FiLogOut className="text-lg" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default OwnerPortalSidebar;
