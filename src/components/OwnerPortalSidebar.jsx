import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import sidebarItems from "../consts/ownerSidebarItems";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import { ownerLogout } from "../features/userLoginSlice";

const OwnerPortalSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const {isloadingOwner, owner} = useSelector((state) => state.ownerAuth)

  const Logout = () =>{
    ownerLogout
  }

  return (
    <aside
      className={`h-screen bg-white border-r border-gray-200 flex flex-col justify-between shadow transition-all duration-800 ${
        isCollapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Top Logo & Toggle */}
      <div className="flex items-center justify-between px-4v h-14 border-b border-gray-200">
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
        {sidebarItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
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
          onClick={() => console.log("Logout")}
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
