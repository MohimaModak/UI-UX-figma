import { FaAngleDown } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-center items-center mt-16 bg-gray-700 pt-8 pb-20 pr-20 pl-20">
      <div className=" text-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:gap-14 md:gap-36 lg:gap-56">
          <div>
            <h1 className="text-2xl pb-3">Categories</h1>
            <h1 className="pb-3">Web Builder</h1>
            <h1 className="pb-3">Hosting</h1>
            <h1 className="pb-3">Robotic-Automation</h1>
          </div>
          <div>
            <h1 className="text-2xl pb-3">Contact</h1>
            <h1 className="pb-3">Contact</h1>
            <h1 className="pb-3">Privacy Policy</h1>
            <h1 className="pb-3">Terms Of Service</h1>
            <h1 className="pb-3">Categories</h1>
            <h1 className="pb-3">About</h1>
          </div>
          <div>
            <h1 className="flex gap-1 items-center lg:relative lg:top-20">
              <span>
                <FaAngleDown></FaAngleDown>
              </span>{" "}
              <span>United States</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
