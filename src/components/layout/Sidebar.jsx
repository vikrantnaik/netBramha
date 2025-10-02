import React, { useState } from "react";
import {
  FaHome,
  FaBell,
  FaBook,
  FaGraduationCap,
  FaGift,
  FaChartLine,
  FaArrowUp,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOverviewOpen, setIsOverviewOpen] = useState(true);

  const toggleOverview = () => setIsOverviewOpen(!isOverviewOpen);
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-[260px] h-screen bg-green-700 text-white fixed flex flex-col gap-7 py-2 ">
      <div className="h-16 font-bold text-xl mt-5 flex items-center justify-center gap-2">
        <div className="w-4 h-4 bg-yellow-400 mr-2"></div> NETBRAHMA
      </div>

      <nav className="flex-1 gap-2 py-2  ">
        <div
          className="bg-green-800 flex flex-col items-center gap-2"
          style={{ marginBottom: "16px" }}
        >
          <div
            className="flex items-center gap-9 justify-center cursor-pointer font-bold"
            onClick={toggleOverview}
          >
            <div className="flex items-center gap-2 hover:underline mb-2">
              <FaHome className="mr-3" />
              Overview
            </div>
            <span>{isOverviewOpen ? "▲" : "▼"}</span>
          </div>

          {isOverviewOpen && (
            <div
              style={{ paddingLeft: "12px" }}
              className=" flex flex-col items-start justify-evenly gap-4 border-l-2 w-[132px]    border-green-600  h-[229px] text-sm"
            >
              <span
                onClick={() => handleScroll("score-section")}
                className="cursor-pointer hover:underline"
              >
                Score & Report
              </span>
              <span
                onClick={() => handleScroll("summary-section")}
                className="cursor-pointer font-semibold hover:underline"
              >
                Summary
              </span>
              <span
                onClick={() => handleScroll("history-section")}
                className="cursor-pointer hover:underline"
              >
                History
              </span>
              <span
                onClick={() => handleScroll("nb-section")}
                className="cursor-pointer hover:underline"
              >
                Where You Stand
              </span>
            </div>
          )}
        </div>

        <div className="flex justify-center pt-[30px]">
          <div className="flex flex-col  gap-5 items-start">
            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <FaBook className="mr-3" />
              Your Report
            </div>

            <div className="flex items-center  gap-2 cursor-pointer hover:underline">
              <FaBell className="mr-3" />
              Alerts
              <span className="ml-auto bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs">
                4
              </span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <FaChartLine className="mr-3" />
              Simulator
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <FaGraduationCap className="mr-3" />
              Education
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <FaArrowUp className="mr-3" />
              Upgrade My Plan
            </div>

            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <FaGift className="mr-3" />
              Rewards Program
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
