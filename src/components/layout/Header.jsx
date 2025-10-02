import React from "react";
import { FaLanguage } from "react-icons/fa";
import { BsQuestionOctagon } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { MdLogout } from "react-icons/md";

const Header = () => {
    return (
        <header style={{padding : '10px'}} className="flex justify-end h-[60px] gap-5 items-center bg-white border-b-gray-400 shadow-sm">
      <div className="flex items-center gap-3 cursor-pointer hover:underline">
        <BsQuestionOctagon className="mr-3" />
        How it works
      </div>
      <div className="flex items-center gap-3 cursor-pointer hover:underline">
        <FaLanguage className="mr-3" />
        English
      </div>
      <div className="flex items-center gap-3 cursor-pointer hover:underline">
        <MdAccountCircle className="mr-3" />
        My accounts
      </div>
      <div className="flex items-center gap-3 cursor-pointer hover:underline">
        <MdLogout className="mr-3" />
        Logout
      </div>
    </header>
  );
};

export default Header;
