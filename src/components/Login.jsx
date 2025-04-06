import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreeTerms: false,
    userType: "customer"
  });

  const handleChange = e => {
    const { id, value, type, checked, name } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
      [name]: type === "radio" ? value : undefined 
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className={`  `} >
      <nav className="px-4 py-4 shadow-md flex justify-between gap-2 items-center sm:text-sm">
        <Link to="/" className="hover:text-xl">
          <FaArrowLeftLong />
        </Link>
        <div className="flex gap-3 items-center ">
          <h1 className="font-medium text-lg cursor-pointer hidden sm:block">
            Don't have an account yet?
          </h1>
          <Link
            to="/signup"
            className="bg-[#6b451a] hover:bg-[#aa702e] text-white  rounded-lg px-4 py-1"
          >
            Signup
          </Link>
        </div>
      </nav>

      <div className="flex justify-center items-center min-h-screen p-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg  ">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <h1 className="flex justify-center font-semibold text-xl ">
                Log in to your account
              </h1>
              <div className="flex justify-center mt-4">
              <label className="flex items-center mr-6">
                  <input
                    type="radio"
                    name="userType"
                    value="customer"
                    className="form-radio"
                    checked={formData.userType === 'customer'}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Customer</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="userType"
                    value="owner"
                    className="form-radio"
                    checked={formData.userType === "owner"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">Owner</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-6 ">
              <div className="">
                <div className="relative flex justify-center items-center border outline-0 px-2 focus:outline-1 focus:ring-2 bg-gray-50 border-gray-300 rounded-md">
                  <MdOutlineMail />
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 text-gray-900 text-sm rounded-r-lg outline-0 block w-full p-2.5 "
                    placeholder="aliamir123@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div >
                <div className="relative flex items-center px-2 border bg-gray-50 border-gray-300 rounded-lg">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button
                      type="button"
                      onMouseDown={() => setShowPassword(!showPassword)}
                      onMouseUp={() => setShowPassword(showPassword)}
                      className="text-gray-500 :text-gray-400 focus:outline-none"
                    >
                      {showPassword ? <AiOutlineEye /> : <RiEyeCloseLine />}
                    </button>
                  </div>
                  <FiLock />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="bg-gray-50  text-gray-900 text-sm rounded-r-lg outline-0  block w-full p-2.5"
                    placeholder="•••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="text-white bg-[#6b451a] hover:bg-[#aa702e] cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center "
              >
                Login
              </button>
              <div className="flex flex-row cursor-pointer gap-2 justify-center">
                <h1 className="">Don't have an account yet?</h1>
                <Link
                  className="text-[#6b451a] hover:text-[#aa702e] font-medium"
                  to="/signup"
                >
                  {" "}Sign up for free
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
