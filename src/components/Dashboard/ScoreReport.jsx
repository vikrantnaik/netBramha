import React, { useState } from "react";
import reportpng from "../../assets/report.png";
import settledcredit from "../../assets/settledcredit.png";
import { FaHome } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { LiaFileDownloadSolid } from "react-icons/lia";
import { Doughnut } from "react-chartjs-2";
// import { Chart, ArcElement, Tooltip } from "chart.js";
import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";
const ScoreReport = () => {
  const [currentValue, setCurrentValue] = useState(
    Math.floor(Math.random() * (900 - 300 + 1)) + 300
  );

  const RADIAN = Math.PI / 180;
  const chartData = [
    { name: "A", value: 80, color: "#ff0000" },
    { name: "B", value: 45, color: "#00ff00" },
    { name: "C", value: 45, color: "#0000ff" },
    { name: "B", value: 55, color: "#00ff00" },
    { name: "A", value: 30, color: "#ff0000" },
    { name: "C", value: 65, color: "#0000ff" },
  ];

  const needle = ({ value, data, cx, cy, iR, oR, color }) => {
    const total = data.reduce((sum, entry) => sum + entry.value, 0);
    const ang = 180.0 * (1 - value / total);
    const length = (iR + 2 * oR) / 3;
    const sin = Math.sin(-RADIAN * ang);
    const cos = Math.cos(-RADIAN * ang);
    const r = 5;
    const x0 = cx + 5;
    const y0 = cy + 5;
    const xba = x0 + r * sin;
    const yba = y0 - r * cos;
    const xbb = x0 - r * sin;
    const ybb = y0 + r * cos;
    const xp = x0 + length * cos;
    const yp = y0 + length * sin;

    return [
      <circle
        key="needle-circle"
        cx={x0}
        cy={y0}
        r={r}
        fill={color}
        stroke="none"
      />,
      <path
        key="needle-path"
        d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        stroke="#none"
        fill={color}
      />,
    ];
  };

  const handleRefresh = () => {
    const randomScore = Math.floor(Math.random() * (900 - 300 + 1)) + 300;
    setCurrentValue(randomScore);
  };

  const cx = 150;
  const cy = 200;
  const iR = 80;
  const oR = 100;
  const value = currentValue;
  return (
    <div
      style={{ marginLeft: "270px" }}
      className="h-[505px] flex justify-around items-center rounded-2xl max-md:flex-col max-md:gap-8 max-md:h-full max-md:m-4"
    >
      <div className="h-[412px] w-[500px] max-md:h-full max-md:w-full  border-gray-400 bg-[rgba(255,255,255,1)] shadow-2xl rounded-lg p-6 flex flex-col justify-between">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Hello, Rahul L.</h2>
        </div>
        <div className="w-full h-[250px] flex justify-center items-center">
          <PieChart width={300} height={400}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={chartData}
              cx={cx}
              cy={cy}
              innerRadius={iR}
              outerRadius={oR}
              fill="#8884d8"
              stroke="none"
            >
              {chartData.map((entry) => (
                <Cell key={`cell-${entry.name}`} fill={entry.color} />
              ))}
            </Pie>
            {needle({
              value,
              data: chartData,
              cx,
              cy,
              iR,
              oR,
              color: "#d0d000",
            })}
            <Tooltip
              formatter={(value, name, props) => [
                `${value}`,
                props.payload.name,
              ]}
            />
            <text x="22%" y="55%" textAnchor="middle" fill="#333" fontSize="12">
              300
            </text>
            <text x="82%" y="55%" textAnchor="middle" fill="#333" fontSize="12">
              900
            </text>
            <text
              x="50%"
              y="65%"
              textAnchor="middle"
              fill="#111"
              fontSize="22"
              fontWeight="bold"
            >
              {currentValue}
            </text>
          </PieChart>
        </div>

        <div className="text-center mt-2">
          <p className="text-lg text-gray-700">is your NB Score as of</p>
        </div>

        <div className="flex justify-around items-center mt-4 h-[80px] bg-white border-t border-b-gray-400">
          <h3
            href="#"
            className="text-[rgba(6,106,155,1)] underline font-medium"
          >
            Score Analysis
          </h3>
          <button
            style={{ padding: "10px 60px" }}
            className="bg-[rgba(253,220,2,1)] hover:bg-yellow-600  font-bold rounded-2xl transition-colors duration-200"
            onClick={handleRefresh}
          >
            Refresh Now
          </button>
        </div>
      </div>

      <div className="h-[412px] w-[500px]  max-md:h-full max-md:w-full  border-gray-400 shadow-2xl flex flex-col gap-3">
        <div
          style={{ padding: "10px" }}
          className="h-[220px] flex flex-col gap-4 rounded-2xl "
        >
          <div className="flex justify-between ">
            <div className="flex flex-col w-[300px] gap-4">
              <h1 className="text-2xl font-bold text-[rgba(4,104,153,1)]">
                NB report
              </h1>
              <p>
                Get your Personalaize NB report to plan your fianancial future
              </p>
            </div>
            <div>
              <img className="h-[80px] w-[80px]" src={reportpng} alt="png" />
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex items-center gap-2 hover:underline mb-2 text-lg text-[rgba(4,104,153,1)] underline">
              <IoMdEye className="mr-3" />
              View your NB report
            </div>
            <div className="flex items-center gap-2 hover:underline mb-2 text-lg text-[rgba(4,104,153,1)] underline">
              <LiaFileDownloadSolid className="mr-3" />
              Download your NB Summury
            </div>
          </div>
        </div>
        <div
          style={{ padding: "10px" }}
          className="h-[177px] bg-[radial-gradient(circle,rgba(255,248,212,1),rgba(254,239,147,1))] flex items-center justify-around rounded-2xl "
        >
          <p className="h-[120px] w-[273px] font-light text-md">
            {" "}
            You currently have an active subscription. You will be able to
            access Free Annual NB Score & Report after the subscription period
            expires.
          </p>

          <div>
            <img src={settledcredit} alt="settledcredit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreReport;
