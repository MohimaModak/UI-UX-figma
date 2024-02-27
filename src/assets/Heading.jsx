import React from "react";
import { IoSearch } from "react-icons/io5";

const Heading = () => {
  return (
    <div className="bg-slate-800 py-3 text-gray-100 flex justify-center text-center">
      <div className=" lg:flex justify-center gap-10 ">
        <div style={{ position: "relative" }}>
          <input type="search" className="rounded-sm py-1" placeholder="" />
          <h1
            className="absolute text-slate-600"
            style={{ top: "50%", transform: "translateY(-50%)", left: "8px" }}
          >
            <IoSearch />
          </h1>
        </div>

        <h1 className="hover:underline cursor-pointer">Categories</h1>
        <h1 className="hover:underline cursor-pointer">Website Builders</h1>
        <h1 className="hover:underline cursor-pointer">Today's deals</h1>
      </div>
    </div>
  );
};

export default Heading;
