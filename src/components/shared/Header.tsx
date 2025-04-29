import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full py-2 px-10">
      {/* Logo */}
      <div className="flex items-center justify-start">
        <div className="w-10 h-10 flex items-center justify-center">
          <FaMedal className="text-green-500 w-7 h-7" />
        </div>
      </div>

      <div className="w-fit flex justify-start">
        {/* Date Selector */}
        <div className="relative min-w-60 flex justify-between items-center bg-white border border-gray-100 rounded-full px-2 p-1 mx-2 shadow-sm">
          <span className="text-gray-500 text-sm">Select date</span>
          <div className="bg-[#63CFA0] rounded-full">
          <SlCalender className="w-8 h-8 text-black p-2" />
          </div>
        </div>

        {/* Search */}
        <div className="relative min-w-60 flex-1 min-w-md mx-2">
          <div className="flex items-center bg-white border border-gray-100 rounded-full px-2 py-2 shadow-sm">
            <span className="text-gray-500 text-sm">Search</span>
            <div className="ml-auto flex items-center justify-center bg-gray-300 rounded-full p-1">
              <CiSearch className="w-5 h-5 text-gray-700" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center">
        {/* Leaderboard Button */}
        <button className="flex items-center bg-[#F4F5EF] text-green-700 rounded-full px-4 py-2 mx-2">
          <FaMedal className="w-4 h-4 mr-2" />
          <span className="font-medium">Leaderboard</span>
        </button>

        {/* Login Button */}
        <button className="border border-green-700 rounded-full px-6 py-2 text-green-700 mx-2">
          Login / Sign up
        </button>

        {/* Menu and User Icon */}
        <div className="flex items-center ml-2 p-1 px-2 border rounded-full">
          <button className="flex items-center justify-center mr-2">
            <MdMenu className="w-6 h-6 text-gray-700" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <FaUserCircle className="w-full h-full text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
