
import { CiCircleCheck } from "react-icons/ci";
import { AiOutlineInfo } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import Third from "./assets/Third";
import Fourth from "./assets/Fourth";
import Fivth from "./assets/Fivth";
import Sixth from "./assets/Sixth";
import Seventh from "./assets/Seventh";
import Footer from "./assets/Footer";
import Heading from "./assets/Heading";

const App = () => {
  return (
    <div className=" bg-slate-50">
    <div className="">
     <div className="">
     <Heading></Heading>
      </div> 
      <div className="">


      
      <div className="px-12">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-slate-700 py-2 mb-2.5 font-semibold px-0.5 ">
          Best Website builders in the US
        </h1>
      </div>
      <div className="px-12 border overflow-hidden hidden lg:block"></div>

<div className="flex justify-center items-center">


      <div className="px-12 flex items-center justify-between font-semibold text-gray-600">
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
      </div>


      <div className="px-12 border overflow-hidden hidden lg:block"></div>
      </div>
      <div className="flex justify-center items-center px-12">
        <Third></Third>
      </div>
      <div className="flex justify-center items-center px-12">
        <Fourth></Fourth>
      </div>
      <div className="p-12">
        <Fivth></Fivth>
      </div>
      <div className="p-12">
        <Sixth></Sixth>
      </div>
      <div className="flex justify-center items-center p-12">
        <Seventh></Seventh>
      </div>
      <div >
        <Footer></Footer>
      </div>
    </div>
    </div>
  );
};

export default App;
