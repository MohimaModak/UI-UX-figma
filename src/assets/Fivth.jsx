// import React from "react";
// import { GiTrophyCup } from "react-icons/gi";
// import image from "./Image/Prize.png";
// import { FaStar } from "react-icons/fa6";
// import { SlArrowDown } from "react-icons/sl";
// import { FaStarHalfStroke } from "react-icons/fa6";
// import { LuGem } from "react-icons/lu";
// import { FaRegStar } from "react-icons/fa";
// import { GrCheckmark } from "react-icons/gr";

// const Fivth = () => {
//   return (
//     <div className="flex justify-center items-center">
//       <div className=" ">

//         <div className="flex justify-center items-center text-gray-600">
//           <div className="py-5 font-semibold">
//             <div className="flex gap-1 bg-orange-500 items-center w-max text-white font-semibold px-1 py-1 rounded-r-md ">
//               <span>
//                 <GiTrophyCup />
//               </span>
//               <h1>Best Choice</h1>
//             </div>
//             <h1 className="text-2xl text-gray-600 pt-1">1</h1>
//             <div className="py-3 px-16">
//               <div className="lg:flex items-center gap-5">
//                 <div className="lg:w-1/2">
//                   <div className="flex justify-around items-center">
//                     <div>
//                       {" "}
//                       <img src={image} />
//                       <h1 className="text-center">Builder 1</h1>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-around items-center sm:text-center md:text-left lg:text-left">
//                   <div className="">
//                     <h1 className="text-lg ">
//                       <span className="font-bold">
//                         WixPro 72-Inch Responsive Website Builder
//                       </span>
//                       - Comprehensive Digital Platform Creation Tool,
//                       Streamlined Design Interface for Professional Websites and
//                       Online Stores (Black/Blue)
//                     </h1>
//                     <h1 className="font-bold pb-2 rounded-sm">
//                       Main highlights
//                     </h1>
//                     <div className="Main highlights pl-3 text-lg">
//                       [What You Get]: Receive the WixPro website builder suite,
//                       access to premium design templates, an extensive library
//                       of widgets and apps, and detailed step-by-step guides.
//                     </div>{" "}
//                     <div className="flex items-center text-blue-500 gap-1 cursor-pointer ">
//                       {" "}
//                       <button className=" text-lg">Show more </button>
//                       <span className="font-bold">
//                         <SlArrowDown />
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="lg:w-1/2">
//                   <div className="flex justify-center items-center">
//                     <div className="bg-slate-100 text-center lg:relative bottom-10 lg:w-32 p-3">
//                       <h1 className="text-5xl font-semibold text-blue-900">
//                         9.8
//                       </h1>
//                       <h1 className="text-blue-900 pt-2">Exceptional</h1>
//                       <div className="flex justify-center items-center text-yellow-500">
//                         <div className="flex gap-1">
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-blue-500 text-white text-center px-20 py-3 rounded-lg mt-3">
//                     <button>View</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center items-center text-gray-600">
//           <div className="py-5 font-semibold">
//             <div className="flex gap-1 bg-orange-500 items-center w-max text-white font-semibold px-1 py-1 rounded-r-md ">
//               <span>
//                 <LuGem />
//               </span>
//               <h1>Best Value</h1>
//             </div>
//             <div className="pt-2">
//               <h1 className="text-2xl text-gray-600 border max-w-min rounded-full px-3 py-1">
//                 2
//               </h1>
//             </div>
//             <div className=" px-16">
//               <div className="lg:flex items-center gap-5">
//                 <div className="lg:w-1/2">
//                   <div className="flex justify-around items-center">
//                     <div>
//                       {" "}
//                       <img src={image} />
//                       <h1 className="text-center">Biulder</h1>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-around items-center sm:text-center md:text-left lg:text-left">
//                   <div className="">
//                     <h1 className="text-lg ">
//                       <span className="font-bold">
//                         SiteCraft 68-Inch Ultimate Web Design Studio-
//                       </span>
//                       Advanced Site Creation Toolkit, Intuitive Drag-and-Drop
//                       Editor for Dynamic Websites and E-commerce Platforms
//                       (Green/White)
//                     </h1>
//                     <h1 className="font-bold pb-2">Main highlights</h1>
//                     <div className="ml-5 pl-3 text-lg">
//                       [What You Get]: Gain access to the SiteCraft design
//                       studio, featuring a robust selection of design elements,
//                       SEO optimization tools, and e-commerce integrations.
//                     </div>{" "}
//                     <div className="flex items-center text-blue-500 gap-1 cursor-pointer ">
//                       {" "}
//                       <button className=" text-lg">Show more </button>
//                       <span className="font-bold">
//                         <SlArrowDown />
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="lg:w-1/2">
//                   <div className="flex justify-center items-center">
//                     <div className="bg-slate-100 text-center lg:relative bottom-10 lg:w-32 p-3">
//                       <h1 className="text-5xl font-semibold text-blue-900">
//                         9.5
//                       </h1>
//                       <h1 className="text-blue-900 pt-2">Exceptional</h1>
//                       <div className="flex justify-center items-center text-yellow-500">
//                         <div className="flex gap-1">
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStarHalfStroke />
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-blue-500 text-white text-center px-20 py-3 rounded-lg mt-3">
//                     <button>View</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center items-center text-gray-600">
//           <div className="py-5 font-semibold">
//             <div className="pt-2">
//               <h1 className="text-2xl text-gray-600 border max-w-min rounded-full px-3 py-1">
//                 3
//               </h1>
//             </div>
//             <div className="py-3 px-16">
//               <div className="lg:flex items-center gap-5">
//                 <div className="lg:w-1/2">
//                   <div className="flex justify-around items-center">
//                     <div>
//                       {" "}
//                       <img src={image} />
//                       <h1 className="text-center">Builder 1</h1>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-around items-center sm:text-center md:text-left lg:text-left">
//                   <div className="">
//                     <h1 className="text-lg ">
//                       <span className="font-bold">
//                         WixPro 72-Inch Responsive Website Builder
//                       </span>
//                       - Comprehensive Digital Platform Creation Tool,
//                       Streamlined Design Interface for Professional Websites and
//                       Online Stores (Black/Blue)
//                     </h1>
//                     <h1 className="font-bold pb-2">Main highlights</h1>
//                     <div className="pl-3 text-lg">
//                       [What You Get]: Receive the WixPro website builder suite,
//                       access to premium design templates, an extensive library
//                       of widgets and apps, and detailed step-by-step guides.
//                     </div>{" "}
//                     <div className="flex items-center text-blue-500 gap-1 cursor-pointer ">
//                       {" "}
//                       <button className=" text-lg">Show more </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="lg:w-1/2">
//                   <div className="flex justify-center items-center">
//                     <div className="bg-slate-100 text-center lg:relative bottom-10 lg:w-32 p-3">
//                       <h1 className="text-5xl font-semibold text-blue-900">
//                         9.3
//                       </h1>
//                       <h1 className="text-blue-900 pt-2">Exceptional</h1>
//                       <div className="flex justify-center items-center text-yellow-500">
//                         <div className="flex gap-1">
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-blue-500 text-white text-center px-20 py-3 rounded-lg mt-3">
//                     <button>View</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-center items-center text-gray-600">
//           <div className="py-5 font-semibold">
//             <div className="pt-2">
//               <h1 className="text-2xl text-gray-600 border max-w-min rounded-full px-3 py-1">
//                 4
//               </h1>
//             </div>
//             <div className="py-3 px-16">
//               <div className="lg:flex items-center gap-5">
//                 <div className="lg:w-1/2">
//                   <div className="flex justify-around items-center">
//                     <div>
//                       {" "}
//                       <img src={image} />
//                       <h1 className="text-center">CDK</h1>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-around items-center sm:text-center md:text-left lg:text-left">
//                   <div className="">
//                     <h1 className="text-lg ">
//                       <span className="font-bold">CDK Resposive Builder:</span>
//                       An extensive library of widgets and apps, and detailed
//                       step-by-step guides
//                     </h1>
//                     <button className="bg-slate-100 px-2 my-2 rounded-sm">
//                       26% off
//                     </button>
//                     <h1 className="font-bold pb-2">Main highlights</h1>
//                     <div className="flex justify-center items-center">
//                       <div className="ml-5 rounded-md w-[500px] pl-3 p-5 text-lg bg-red-50">
//                         <div className="flex gap-2 pb-2 rounded-sm">
//                           <h1 className="py-0.5 px-2 text-blue-500 bg-white rounded-sm">
//                             9.9
//                           </h1>
//                           <h1>building responsive</h1>
//                         </div>
//                         <div className="flex gap-2 pb-2 rounded-sm">
//                           <h1 className="py-0.5 px-2 text-blue-500 bg-white rounded-sm">
//                             8.9
//                           </h1>
//                           <h1>Cool</h1>
//                         </div>
//                         <div className="flex gap-2 rounded-sm">
//                           <h1 className="py-0.5 px-2 text-blue-500 bg-white rounded-sm">
//                             8.9
//                           </h1>
//                           <h1>Docs</h1>
//                         </div>
//                       </div>
//                     </div>{" "}
//                     <div className="py-3">
//                       <h1>Why we love it</h1>
//                     </div>
//                     <div>
//                       <div className="flex gap-2 items-center">
//                         <span className="bg-blue-200 p-1 mb-2 text-blue-700 rounded-full">
//                           <GrCheckmark />
//                         </span>{" "}
//                         <h1>Documentation</h1>
//                       </div>
//                       <div className="flex gap-2 items-center">
//                         <span className="bg-blue-200 p-1 mb-2 text-blue-700 rounded-full">
//                           <GrCheckmark />
//                         </span>{" "}
//                         <h1>Easy Use</h1>
//                       </div>
//                       <div className="flex gap-2 items-center">
//                         <span className="bg-blue-200 p-1 mb-2 text-blue-700 rounded-full">
//                           <GrCheckmark />
//                         </span>{" "}
//                         <h1>Out of box</h1>
//                       </div>
//                     </div>
//                     <div className="lg:relative right-8 flex items-center text-blue-500 gap-1 cursor-pointer ">
//                       {" "}
//                       <button className=" text-lg">Show more </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="lg:w-1/2">
//                   <div className="flex justify-center items-center">
//                     <div className="bg-slate-100 text-center lg:relative bottom-10 lg:w-32 p-3">
//                       <h1 className="text-5xl font-semibold text-blue-900">
//                         9.1
//                       </h1>
//                       <h1 className="text-blue-900 pt-2">Very Good</h1>
//                       <div className="flex justify-center items-center text-yellow-500">
//                         <div className="flex gap-1">
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaStar />
//                           </span>
//                           <span>
//                             <FaRegStar />
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="bg-blue-500 text-white text-center px-20 py-3 rounded-lg mt-3">
//                     <button>View</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Fivth;

import { GiTrophyCup } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import image from "./Image/Prize.png";
const Fivth = () => {
  return (
    <div className="py-5 ">
      <div>
        <div className="flex items-center px-3 py-1 text-white gap-1 bg-orange-500 rounded-r-md max-w-max">
          <span className="text-xl">
            <GiTrophyCup />
          </span>{" "}
          <h1 className="text-xl">Best Choice</h1>
        </div>
        <div className="py-5">
          <h1>1</h1>
        </div>

        <div className="flex justify-center items-center">
          <div>
            <div className="lg:flex justify-between items-center">
              <div className="flex justify-center items-center">
                <img src={image} />
              </div>

              <div className="text-xl">
                <div className="flex justify-center items-center">
                  <div>
                    <h1>
                      <span className="font-bold">
                        WixPro 72-Inch Responsive Website Builder
                      </span>
                      - Comprehensive Digital Platform Creation Tool,
                      Streamlined Design Interface for Professional Websites and
                      Online Stores (Black/Blue)
                    </h1>
                  </div>
                </div>
                <h1 className="font-bold">Main highlights</h1>
                <div>
                  <h1 className="pl-5">
                    [What You Get]: Receive the WixPro website builder suite,
                    access to premium design templates, an extensive library of
                    widgets and apps, and detailed step-by-step guides.
                  </h1>
                </div>
                <h1 className="font-bold text-blue-500">Show more</h1>
              </div>

              <div>


               <div className="bg-slate-200 text-center rounded-md px-2 py-2">
                <h1>9.8</h1>
                <h1>Exceptional</h1>
                <div className="flex gap-0.5 text-yellow-400">
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                  <FaStar/>
                </div>
               </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fivth;
