import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { GoAlert } from "react-icons/go";

const Summary = () => {
  const data = [
    { name: "Closed credit cards", value: 4 },
    { name: " Closed loan", value: 1 },
    { name: " Open credit cards", value: 2 },
    { name: "Open loan", value: 6 },
  ];
  const COLORS = [
    "rgba(126, 121, 221, 1)",
    "#00C49F",
    "rgba(153, 219, 234, 1)",
    "rgba(253, 232, 102, 1)",
  ];
  return (
    <div
      style={{ marginLeft: "270px" }}
      className="h-[315px] flex justify-evenly items-center rounded-2xl max-md:flex-col max-md:gap-8 max-md:h-full "
    >
      <div className="w-[666px]  max-md:h-full max-md:w-full  h-full border-gray-400 bg-[rgba(255,255,255,1)] shadow-2xl rounded-lg">
        <div className="flex justify-between items-center">
          <div
            style={{
              padding: "20px",
              color: "rgba(4, 104, 153, 1)",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            Your Accounts <IoIosInformationCircleOutline />
          </div>

          <div style={{ padding: "20px" }} className="flex gap-3">
            <span
              style={{ padding: "0px 12px" }}
              className="border bg-[rgba(6,106,155,1)] text-white rounded-lg"
            >
              All
            </span>
            <span
              style={{ padding: "2px 12px" }}
              className="border bg-gray-300 text-amber-50 rounded-lg"
            >
              Open
            </span>
            <span
              style={{ padding: "2px 12px" }}
              className="border bg-gray-300 text-amber-50 rounded-lg"
            >
              Closed
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx={120}
                cy={100}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip formatter={(value, name) => [`${value}`, name]} />

              <text
                x={120}
                y={100}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fontWeight="bold"
                fill="#333"
              >
                Total Account 13
              </text>
            </PieChart>
          </div>
          <div className="flex flex-col gap-4 text-lg font-semibold">
            <h2>
              {" "}
              <span className="h-3 w-3 inline-block rounded-full bg-[rgba(126,121,221,1)]"></span>{" "}
              Closed credit cards
            </h2>
            <h2>
              {" "}
              <span className="h-3 w-3 inline-block rounded-full bg-[#00C49F]"></span>{" "}
              Closed loan
            </h2>
            <h2>
              {" "}
              <span className="h-3 w-3 inline-block rounded-full bg-[rgba(153,219,234,1)]"></span>{" "}
              Open credit cards
            </h2>
            <h2>
              {" "}
              <span className="h-3 w-3 inline-block rounded-full bg-[rgba(253,232,102,1)]"></span>
              {"   "}
              Open loan
            </h2>
          </div>
          <div
            style={{ paddingRight: "20px", fontFamily: "Roboto" }}
            className="flex flex-col gap-4 text-lg font-normal"
          >
            <h2>4</h2>
            <h2>1</h2>
            <h2>2</h2>
            <h2>6</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col  max-md:h-full max-md:w-full  w-[322px] h-full gap-7 ">
        <div className="h-[152px] flex rounded-xl border-t-blue-500 border-t-2 shadow-sm">
          <div className="flex w-full items-start justify-between">
            <div
              style={{ paddingTop: "20px" }}
              className="w-12 flex justify-center  h-full bg-[rgba(224,249,255,1)]"
            >
              <GoAlert />
            </div>
            <div
              style={{ padding: "10px" }}
              className="flex min-w-0 flex-col gap-3"
            >
              <div className="mb-1 flex items-center gap-2">
                <h3 className="text-base font-semibold text-foreground text-[rgba(4,104,153,1)]">
                  Total Disputes
                </h3>
              </div>

              <p className="text-sm font-light">
                Learn more about credit reporting and related policies.
              </p>

              <a
                href="#"
                className="mt-2 text-sm font-medium text-primary underline underline-offset-4 text-[rgba(4,104,153,1)]"
              >
                Read More
              </a>
            </div>
            <div
              style={{ padding: "10px" }}
              className="pl-2 text-2xl font-semibold tabular-nums text-foreground"
            >
              12
            </div>
          </div>
        </div>

        <div className="h-[90px] flex rounded-xl border-t-blue-500 border-t-2 shadow-sm">
          {" "}
          <div className="flex w-full justify-between">
            <div
              style={{ paddingTop: "20px" }}
              className="w-12 flex justify-center  h-full bg-[rgba(224,249,255,1)]"
            >
              <GoAlert />
            </div>
            <div style={{ padding: "5px" }} className="flex flex-col gap-2">
              <h3 className="text-base font-semibold text-foreground text-[rgba(4,104,153,1)]">
                Total Enquiries
              </h3>

              <p className="text-sm font-light">(in last 3 years)</p>
            </div>
            <div
              style={{ padding: "10px" }}
              className="pl-2 text-2xl font-semibold tabular-nums text-foreground"
            >
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
