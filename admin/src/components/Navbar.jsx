import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { aToken,setAToken } = useContext(AdminContext);
const navigate = useNavigate()

const logout =()=>{
    navigate('/')
    aToken&& setAToken('')
    aToken && localStorage.removeItem('aToken')
}

  return (
    <div className="flex justify-between items-center px-4  py-3 border-b bg-white">
      <div className="flex gap-2 items-center text-xs">
        <img
          className="w-36 sm:w-40 cursor-pointer"
          src={assets.admin_logo}
          alt=""
        />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <button onClick={logout} className="bg-primary text-white px-10 py-2 text-sm rounded-full ">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
