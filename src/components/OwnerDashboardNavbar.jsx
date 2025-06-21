import React, { useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const OwnerDashboardNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  return (
    <header className="w-full bg-white border-b border-gray-200  shadow-sm px-4 py-2 md:px-6 h-14">
      <div className="flex justify-between items-center">
        

        {/* Mobile Toggle Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-2xl text-gray-700">
          <FiMenu />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/owner/dashboard"
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/owner/dashboard/mycars"
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'}`
            }
          >
            My Cars
          </NavLink>
          <NavLink
            to="/owner/dashboard/analytics"
            className={({ isActive }) =>
              `text-sm font-medium ${isActive ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'}`
            }
          >
            Analytics
          </NavLink>
        </nav>

        {/* Profile Section */}
        <div className="relative ml-4">
          <button onClick={toggleDropdown} className="flex items-center gap-2 cursor-pointer">
            <img
              src="/profile-pic.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300 object-cover"
            />
            <FiChevronDown className="text-xl text-gray-600" />
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-md p-2 z-50 w-40">
              <NavLink to="/owner/profile" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">
                Profile
              </NavLink>
              <button className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className=" flex flex-col gap-3 md:hidden">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-base font-medium ${isActive ? 'text-black font-semibold' : 'text-gray-600'}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/dashboard/my-cars"
            className={({ isActive }) =>
              `text-base font-medium ${isActive ? 'text-black font-semibold' : 'text-gray-600'}`
            }
          >
            My Cars
          </NavLink>
          <NavLink
            to="/dashboard/analytics"
            className={({ isActive }) =>
              `text-base font-medium ${isActive ? 'text-black font-semibold' : 'text-gray-600'}`
            }
          >
            Analytics
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default OwnerDashboardNavbar;
