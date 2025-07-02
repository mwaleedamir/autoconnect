import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";
import { ownerLogin, userLogin } from "../features/userLoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast"
import { v4 as uuidv4 } from "uuid"



const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
  const handleChange = e => {
    const { id, value, type, checked, name } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
      [name]: type === "radio" ? value : undefined
    });
  };

  const dispatch = useDispatch()
  const Navigate = useNavigate()

  const {isloadingOwner, errorOwner, owner} = useSelector((state) => state.ownerAuth)
  const {isloadingUser, errorUser, user} = useSelector((state) => state.userAuth)

 

  const setToNull = () => setFormData({
    email: "",
    password: "",
    agreeTerms: false,
    userType: "customer"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.userType === "customer") {

      try {

        const resultAction = await dispatch(userLogin(formData));
        if (userLogin.fulfilled.match(resultAction)) {
          setToNull
          toast.success(resultAction.payload.message);
          Navigate("/")
        } else {
          const errorMessage = resultAction.payload || "Registration failed!";
          toast.error(errorMessage);
        }
      } catch (error) {
        console.error("Registration error:", error);
        toast.error("Something went wrong. Please try again!");
      }
    }
    else {
      try {
        const resultAction = await dispatch(ownerLogin(formData));
        const userId = owner.owners._id
        if (ownerLogin.fulfilled.match(resultAction)) {
          setToNull( )
          toast.success(resultAction.payload.message);
          Navigate(`/owner/dashboard/${userId}`)
        } else {
          const errorMessage = resultAction.payload || "Registration failed!";
          toast.error(errorMessage);
        }
      } catch (error) {
        console.error("Registration error:", error);
        toast.error("Something went wrong. Please try again!");
      }
    }
  };

  return (
    <div className={`  `}>
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

      <div className="flex justify-center items-center mt-7  p-4 self-center sm:px-6 lg:px-8">
        <div className="w-full max-w-lg bg-white border border-gray-300 rounded-lg shadow-lg  ">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <h1 className="flex justify-center font-semibold text-xl pb-6 ">
                Log in to your account
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
            </div>
            <div className="flex flex-col gap-6 ">
              <div className="">
                <div className="relative flex justify-center items-center border outline-0 px-2 focus:outline-1 focus:ring-2 bg-gray-50 border-gray-300 rounded-md">
                  <MdOutlineMail />
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 text-gray-900 text-sm rounded-r-lg outline-0 block w-full p-2.5 "
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
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
                    placeholder="Password"
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
                {isloadingOwner || isloadingUser ? "Please Wait..." : "Login"}
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
