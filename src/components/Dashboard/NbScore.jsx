import React from 'react'
import { IoIosInformationCircleOutline } from 'react-icons/io';

const NbScore = () => {

   const score = Math.floor(Math.random() * (900 - 300) + 300);

   const ranges = [
     { label: "300-722", color: "bg-red-500", percent: "15%" },
     { label: "723-747", color: "bg-orange-500", percent: "22%" },
     { label: "748-764", color: "bg-yellow-400", percent: "26%" },
     { label: "765-777", color: "bg-lime-400", percent: "18%" },
     { label: "778-900", color: "bg-green-600", percent: "20%" },
   ];
   const getPointerPosition = () => {
     const min = 300;
     const max = 900;
     const percent = ((score - min) / (max - min)) * 100;
     return `${percent}%`;
   };
  return (
    <div
      style={{ marginLeft: "350px", marginTop: "100px", marginRight: "90px" }}
      className="h-[389px] flex flex-col rounded-2xl shadow-2xl p-6 max-md:h-full"
    >
      <div
        style={{ padding: "10px" }}
        className="text-[rgba(4,104,153,1)] text-[18px] font-bold flex gap-2 items-center"
      >
        {" "}
        WHERE YOU STAND <IoIosInformationCircleOutline />
      </div>

      <div
        style={{ padding: "30px" }}
        className="h-[349px]  max-md:h-full max-md:w-full  w-full bg-[#d6e0e479] rounded-2xl border-gray-300 flex flex-col justify-center items-center"
      >
        <div
          style={{ margin: "30px", padding: "20px" }}
          className="h-[228px] bg-white w-full  max-md:h-full max-md:w-full "
        >
          <div className="flex w-full rounded-md overflow-hidden">
            {ranges.map((range, i) => (
              <div
                key={i}
                style={{ padding: "10px" }}
                className={`flex-1 flex items-center justify-center text-white text-sm py-2 ${range.color}`}
              >
                {range.percent}
              </div>
            ))}
          </div>
          <div className="relative h-4">
            <div
              className="absolute -top-2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-black"
              style={{
                left: getPointerPosition(),
                transform: "translateX(-50%)",
              }}
            />
          </div>
          <div
            style={{ marginTop: "16px", marginBottom: "18px" }}
            className="text-center"
          >
            <p className="text-sm font-medium">Your NB Score</p>
            <p className="text-3xl font-bold">{score}</p>
          </div>

          <hr />
          <div
            style={{ marginTop: "16px", marginBottom: "18px" }}
            className="flex justify-center gap-6 text-sm"
          >
            {ranges.map((range, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`w-4 h-4 rounded ${range.color}`} />
                {range.label}
              </div>
            ))}
          </div>
        </div>
        <div className="flex  items-center justify-center text-center">
          Your NB Score lies in the top 70% in All Of India. <br />
          Based on the NB Data
        </div>
      </div>
    </div>
  );
}

export default NbScore