import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    userType: "customer"
  });

  const signupRadio = [
    {
      labelName: "Customer",
      name: "userType",
      type: "radio",
      value: "customer",
      checked: formData.userType === "customer"
    },
    {
      labelName: "Owner",
      name: "userType",
      type: "radio",
      value: "owner",
      checked: formData.userType === "owner"
    }
  ];

  const signupform = [
    {
      svg: <IoPersonOutline />,
      type: "text",
      id: "firstName",
      placeholder: "First Name",
      value: formData.firstName
    },
    {
      svg: <IoPersonOutline />,
      type: "text",
      id: "lastName",
      placeholder: "Last Name",
      value: formData.lastName
    },
    {
      svg: <MdOutlinePhone />,
      type: "tel",
      id: "phone",
      placeholder: "Phone No",
      value: formData.phone
    },
    {
      svg: <MdOutlineMail />,
      type: "email",
      id: "email",
      placeholder: "Email",
      value: formData.email
    }
  ];

  const handleChange = e => {
    const { id, value, type, checked, name } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
      [name]: type === "radio" ? value : undefined // Handle radio buttons
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      phone: "",
      email: "",
      showroomName,
      address: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
      userType: "customer"
    });
  };

  return (
    <div className={``}>
      <nav className="px-4 py-3 flex justify-between items-center shadow-md sm:text-sm">
        <Link to="/">
          <FaArrowLeftLong className="text-gray-500" />
        </Link>
        <div className="flex  gap-2">
          <h1 className="font-medium text-lg cursor-pointer hidden sm:block">
            Have an account?
          </h1>
          <Link
            to="/login"
            className=" bg-[#6b451a] hover:bg-[#aa702e] shadow-md text-white rounded-md px-4 py-1"
          >
            Login
          </Link>
        </div>
      </nav>

      <div className="flex justify-center items-center min-h-screen py-4 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg bg-white border border-gray-300 rounded-md shadow-lg">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <h1 className="flex justify-center font-semibold text-xl ">
              Join as Customer or Showroom Owner
            </h1>

            <div className="flex justify-center">
              {signupRadio.map(radio =>
                <div className=" flex  justify-center ">
                  <label className="flex items-center mr-6">
                    <input
                      type={radio.type}
                      name={radio.name}
                      value={radio.value}
                      className="hidden peer"
                      checked={radio.checked}
                      onChange={handleChange}
                    />
                    <div className="w-3 h-3 rounded-full border-2 border-gray-400 peer-checked:border-[#6b451a] peer-checked:bg-[#6b451a] transition" />
                    <span className="ml-2 ">
                      {radio.labelName}
                    </span>
                  </label>
                </div>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              {signupform.map(form =>
                <div className="">
                  {form.type === "text" &&
                    <div className="flex items-center border pl-2 rounded-md">
                      {form.svg}
                      <input
                        type="text"
                        id={form.id}
                        className=" text-gray-900 text-sm rounded-r-lg outline-0 w-full p-2.5"
                        placeholder={form.placeholder}
                        value={form.value}
                        onChange={handleChange}
                        required
                      />
                    </div>}

                  {form.type === "tel" &&
                    <div className="flex items-center border pl-2 rounded-md">
                      {form.svg}
                      <input
                        type={form.type}
                        id={form.id}
                        className="text-gray-900 text-sm rounded-r-lg outline-0 w-full p-2.5"
                        placeholder={form.placeholder}
                        pattern="[0][3][0-9]{2}-[0-9]{7}"
                        value={form.value}
                        onChange={handleChange}
                        required
                      />
                    </div>}

                  {form.type === "email" &&
                    <div className="flex items-center border pl-2 rounded-md">
                      {form.svg}
                      <input
                        type={form.type}
                        id={form.id}
                        className="text-gray-900 text-sm rounded-r-lg outline-0 w-full p-2.5 "
                        placeholder={form.placeholder}
                        value={form.value}
                        onChange={handleChange}
                        required
                      />
                    </div>}
                </div>
              )}

              {formData.userType === "owner" &&
                <div className="flex items-center border pl-2 rounded-md">
                  <BsShop />
                  <input
                    type="text"
                    id="showroomName"
                    className="text-gray-900 text-sm rounded-r-lg outline-0 w-full p-2.5 "
                    placeholder="Showroom Name"
                    value={formData.showroomName}
                    onChange={handleChange}
                    required
                  />
                </div>}

              {formData.userType === "owner" &&
                <div className="flex items-center border pl-2 rounded-md">
                  <CiLocationOn />
                  <input
                    type="text"
                    id="address"
                    className="text-gray-900 text-sm rounded-r-lg outline-0 w-full p-2.5 "
                    placeholder="Showroom address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>}

              <div className="relative flex items-center border pl-2 rounded-md">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    onMouseDown={() => setShowPassword(!showPassword)}
                    className="text-gray-900 focus:outline-none"
                  >
                    {showPassword ? <AiOutlineEye /> : <RiEyeCloseLine />}
                  </button>
                </div>
                <FiLock />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="text-gray-900 text-sm rounded-r-lg outline-0 block w-full p-2.5 "
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="relative flex items-center border pl-2 rounded-md">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword
                      ? <AiOutlineEye />
                      : <RiEyeCloseLine />}
                  </button>
                </div>
                <FiLock />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="text-gray-900 text-sm rounded-r-lg outline-0 block w-full p-2.5 "
                  placeholder="confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  className="w-4 h-4 rounded "
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
              </div>
              <label
                htmlFor="agreeTerms"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                I agree with the{" "}
                <Link
                  to="#"
                  className="text-[#6b451a] hover:text-[#aa702e] hover:underline "
                >
                  terms and conditions
                </Link>.
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-[#6b451a] hover:bg-[#aa702e] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full px-5 py-2.5 text-center "
            >
              Sign up
            </button>
            <div className="flex max-sm:text-sm gap-2 justify-center">
              <h1 className="cursor-pointer">Already have an account?</h1>
              <Link
                className="text-[#6b451a] hover:text-[#aa702e] font-medium"
                to="/login"
              >
                Get in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
