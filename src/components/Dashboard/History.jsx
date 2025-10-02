import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { FaArrowUp, FaArrowDown, FaArrowRight } from "react-icons/fa";

const History = () => {
  const data = [
    { month: "JAN", score: null, date: "18/08/2022", type: "up" },
    { month: "FEB", score: null, date: "19/08/2022", type: "down" },
    { month: "MAR", score: null, date: "20/08/2022", type: "up" },
    {
      month: "APR",
      score: Math.floor(Math.random() * (900 - 600) + 600),
      date: "22/08/2022",
      type: "NA",
    },
    {
      month: "MAY",
      score: Math.floor(Math.random() * (900 - 600) + 600),
      date: "23/08/2022",
      type: "down",
    },
    {
      month: "JUN",
      score: Math.floor(Math.random() * (900 - 600) + 600),
      date: "24/08/2022",
      type: "NA",
    },
    { month: "JUL", score: null, date: "24/08/2022", type: "NA" },
    {
      month: "AUG",
      score: Math.floor(Math.random() * (900 - 600) + 600),
      date: "26/08/2022",
      type: "up",
    },
    { month: "SEP", score: null, date: "27/08/2022", type: "NA" },
    { month: "OCT", score: null, date: "28/08/2022", type: "down" },
    { month: "NOV", score: null, date: "29/08/2022", type: "NA" },
    { month: "DEC", score: null, date: "30/08/2022", type: "up" },
  ];

  // Custom Dot with label inside
  const CustomDot = (props) => {
    const { cx, cy, value } = props;
    if (!value) return null;

    // Different colors depending on value or last point
    const isLast = value === 510;
    const bgColor = isLast ? "#FFD700" : "#0096A6"; // yellow / teal

    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={6}
          fill={bgColor}
          stroke="#fff"
          strokeWidth={2}
        />
        <rect
          x={cx - 20}
          y={cy - 28}
          width={40}
          height={20}
          rx={4}
          ry={4}
          fill={bgColor}
        />
        <text
          x={cx}
          y={cy - 14}
          textAnchor="middle"
          fontSize="12"
          fill="#fff"
          fontWeight="bold"
        >
          {value}
        </text>
      </g>
    );
  };
  return (
    <div
      style={{ marginLeft: "350px", marginTop: "100px", marginRight: "90px" }}
      className="h-[371px] flex  flex-col rounded-2xl  max-md:h-full max-md:w-full"
    >
      <div
        style={{ padding: "10px" }}
        className="text-[rgba(4,104,153,1)] text-[18px] font-bold flex gap-2 items-center"
      >
        {" "}
        NB SCORE HISTORY <IoIosInformationCircleOutline />
      </div>
      <div className="h-[332px] bg-[#eceeef] shadow-2xs border-gray-400">
        <div
          style={{ padding: "10px" }}
          className="text-[rgba(38,38,38,1)] text-[16px] w-full"
        >
          Trended view of the changes in your NB Score with every refresh.
        </div>
        <div className="flex  h-[230px] gap-7 max-md:flex-col">
          <div className="w-[760px]">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={data}
                margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[300, 900]} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#0096A6"
                  strokeWidth={1}
                  dot={<CustomDot />}
                  connectNulls
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="w-[225px] bg-white  max-md:h-full max-md:w-full  ">
            <div
              style={{ padding: "10px" }}
              className="text-[18px] font-bold flex gap-2 items-center"
            >
              {" "}
              August 2022
            </div>
            <div className="border border-b-1"></div>
            <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
              {data.map((item) => (
                <div
                  key={item.score}
                  className="flex justify-between items-center border-b pb-1"
                >
                  <div className="flex items-center gap-2">
                    {item.type === "up" && (
                      <FaArrowUp className="text-green-500" />
                    )}
                    {item.type === "down" && (
                      <FaArrowDown className="text-red-500" />
                    )}
                    {item.type === "right" && (
                      <FaArrowRight className="text-blue-500" />
                    )}
                    {item.type === "NA" && (
                      <FaArrowRight className="text-gray-400" />
                    )}

                    <span
                      className={`font-bold ${
                        item.type === "neutral" ? "text-gray-400" : "text-black"
                      }`}
                    >
                      {item.score ?? "N/H"}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
