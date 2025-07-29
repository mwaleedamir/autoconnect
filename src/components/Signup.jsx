import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdOutlineLocationCity, MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { createUser, createOwner } from "../features/userSignupSlice";
import { v4 as uuidv4 } from "uuid"
import { toast } from "react-hot-toast"


const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    showroomName: "",
    showroomAddress: "",
    cityName: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    userType: "customer"
  });

  const dispatch = useDispatch();
  const Navigate = useNavigate()

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
  const handleChange = e => {
    const { id, value, type, checked, name } = e.target;

    if (type === "radio") {
      setFormData({
        ...formData,
        [name]: value
      });
    } else if (type === "checkbox") {
      setFormData({
        ...formData,
        [id]: checked
      });
    } else {
      setFormData({
        ...formData,
        [id]: value
      });
    }
  };

  const setToNull = () => setFormData({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    showroomName: "",
    showroomAddress: "",
    cityName: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    userType: "customer"
  });


  const validateForm = () => {
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return false;
    }

    // Check password strength (optional)
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return false;
    }

    // Check if owner fields are filled when userType is owner
    // if (formData.userType === "owner") {
    //   if (!formData.showroomName) {
    //     toast.error("Showroom name is required for owners!");
    //     return false;
    //   }
    //   if (!formData.address) {
    //     toast.error("Showroom address is required for owners!");
    //     return false;
    //   }
    // }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // setIsLoading(true);

    try {
      if (formData.userType === "customer") {

        const resultAction = await dispatch(createUser(formData));
        
        // Check if the action was fulfilled
        if (createUser.fulfilled.match(resultAction)) {
          setToNull()
          toast.success('Registration successful!');
          Navigate("/login")
        } else {
          const errorMessage = resultAction.payload || "Registration failed!";
          toast.error(errorMessage);
        }
      } else if (formData.userType === "owner") {
        console.log("data",formData)
        const resultAction = await dispatch(createOwner(formData));
        
        console.log("resultAction",resultAction)
        // Check if the action was fulfilled
        if (createOwner.fulfilled.match(resultAction)) {
          setToNull()
          toast.success('Registration successful!');
          Navigate("/login")
        }
      }
    }
    catch (error) {
      console.error("Registration error:", error);
      toast.error("Something went wrong. Please try again!");
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div className={``}>
      <nav className="px-4 py-3 flex justify-between items-center shadow-md sm:text-sm">
        <Link to="/">
          <FaArrowLeftLong className="hover:text-xl" />
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

      <div className="flex justify-center items-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg bg-white border border-gray-300 rounded-md shadow-lg">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <h1 className="flex justify-center font-semibold text-xl ">
              Join as Customer or Showroom Owner
            </h1>

            <div className="flex justify-center">
              {signupRadio.map(radio =>
                <div key={uuidv4()} className=" flex  justify-center ">
                  <label className="flex items-center mr-6">
                    <input
                      type={radio.type}
                      name={radio.name}
                      value={radio.value}
                      className="hidden peer"
                      checked={radio.checked}
                      onChange={handleChange}
                    />
                    <div className="w-3 h-3 rounded-full border-2 border-[#6b451a] peer-checked:outline-[#6b451a] peer-checked:border-[#6b451a] peer-checked:bg-[#6b451a] transition" />
                    <span className="ml-2 ">
                      {radio.labelName}
                    </span>
                  </label>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              <div className="flex items-center border pl-2 rounded-md">
                <IoPersonOutline />
                <input
                  type="text"
                  id="firstName"
                  className="text-gray-900 text-sm rounded-r-lg outline-0 w-full p-2.5"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center border pl-2 rounded-md">
                <IoPersonOutline />
                <input
                  type="text"
                  id="lastName"
                  className="text-gray-900 text-sm rounded-r-lg outline-0 w-full p-2.5"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-center border pl-2 rounded-md">
                <MdOutlinePhone />
                <input
                  type="tel"
                  id="phone"
                  className="text-gray-900 text-sm rounded-r-lg outline-0 w-full p-2.5"
                  placeholder="Phone No"
                  pattern="[0][3][0-9]{2}[0-9]{7}"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className="flex items-center border pl-2 rounded-md">
                <MdOutlineMail />
                <input
                  type="email"
                  id="email"
                  className="text-gray-900 text-sm rounded-r-lg outline-0 w-full p-2.5"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {formData.userType === "owner" && (
                <>
                  <div className="flex items-center border pl-2 rounded-md">
                    <BsShop />
                    <input
                      type="text"
                      id="showroomName"
                      className="text-gray-900 text-sm rounded-r-lg outline-0 w-full p-2.5"
                      placeholder="Showroom Name"
                      value={formData.showroomName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex items-center border pl-2 rounded-md">
                    <MdOutlineLocationCity />
                    <input
                      type="text"
                      id="cityName"
                      className="text-gray-900 text-sm rounded-r-lg outline-0 w-full p-2.5"
                      placeholder="City name"
                      value={formData.cityName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex items-center border pl-2 rounded-md">
                    <CiLocationOn />
                    <input
                      type="text"
                      id="showroomAddress"
                      className="text-gray-900 text-sm rounded-r-lg outline-0 w-full p-2.5"
                      placeholder="Showroom Address"
                      value={formData.showroomAddress}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}

              {/* Password */}
              <div className="relative flex items-center border pl-2 rounded-md">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-900 focus:outline-none"
                  >
                    {showPassword ? <AiOutlineEye /> : <RiEyeCloseLine />}
                  </button>
                </div>
                <FiLock />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="text-gray-900 text-sm rounded-r-lg outline-0 block w-full p-2.5"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="relative flex items-center border pl-2 rounded-md">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-900 focus:outline-none"
                  >
                    {showConfirmPassword ? <AiOutlineEye /> : <RiEyeCloseLine />}
                  </button>
                </div>
                <FiLock />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="text-gray-900 text-sm rounded-r-lg outline-0 block w-full p-2.5"
                  placeholder="Confirm Password"
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
                className="ms-2 text-sm font-medium text-gray-900"
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
