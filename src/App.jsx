import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { AiOutlineInfo } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import Third from "./assets/Third";
import Fourth from "./assets/Fourth";
import Fivth from "./assets/Fivth";
import Sixth from "./assets/Sixth";

const App = () => {
  return (
    <div className=" bg-slate-50">
    <div className="p-12">
      <div>
        <h1 className="text-6xl text-slate-700 py-2 my-3.5 font-semibold px-0.5 ">
          Best Website builders in the US
        </h1>
      </div>
      <div className="border overflow-hidden hidden lg:block"></div>

      <div className="flex items-center justify-between font-semibold text-gray-600">
        <div className="flex items-center py-3">
          <div className="flex justify-between items-center pr-2">
            <span className="text-2xl pr-1">
              <CiCircleCheck />
            </span>
            <h1>Last Updated</h1>
          </div>

          <div className="flex justify-between items-center pr-5">
            <span className="pr-2">-</span>
            <h1>February 22, 2020</h1>
          </div>

          <div className="flex justify-between items-center pr-5">
            {" "}
            <span className="border-black border rounded-full ">
              <AiOutlineInfo />
            </span>
            <h1 className="pl-1.5">Last Updated</h1>
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center">
            <h1>Top Relevant</h1>
            <span className="pl-2">
              <SlArrowDown />
            </span>
          </div>
        </div>
      </div>

      <div className="border overflow-hidden hidden lg:block"></div>

      <div>
        <Third></Third>
      </div>
      <div>
        <Fourth></Fourth>
      </div>
      <div>
        <Fivth></Fivth>
      </div>
      <div>
        {/* <Sixth></Sixth> */}
      </div>
    </div>
    </div>
  );
};

export default App;
