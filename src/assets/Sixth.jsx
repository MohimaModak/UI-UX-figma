import image from "./Image/Prize.png";

const Sixth = () => {
  return (
    <div className="py-5 text-gray-600">
      <h1 className="text-4xl font-medium">Related deals you might like for</h1>

      <div>
        <div className="grid md:grid-cols-3 gap-5 my-16">
          {/* 1st */}

          <div className="bg-white p-4 rounded-md">
            <div className="flex justify-center items-center">
              <img src={image} />
            </div>

            <div className="my-3">
              <button className="bg-slate-200 text-blue-800 rounded-md py-1 px-2 ">
                20% Off
              </button>
              <button className="bg-slate-200 text-blue-800 rounded-md py-1 px-2 ml-5">
                Limited time{" "}
              </button>
            </div>

            <div className="my-3 text-gray-600 font-bold text-center text-lg">
              <h1>Webbuilder 1</h1>
            </div>
            <div className="my-3 text-gray-600 text-xl">
              <h1>Computer Modern clasic with wix support</h1>
            </div>

            <div className="my-3 text-gray-600">
              <div className="flex gap-3 items-center">
                <h1 className="text-2xl">$39.96</h1>
                <div className="relative top-1 flex gap-3">
                  <h1 className="text-gray-500">$49.96</h1>
                  <h1 className="text-red-600">(20% Off)</h1>
                </div>
              </div>
            </div>

            <div className="my-3 bg-blue-500 py-2.5 text-white text-center rounded-lg">
              <button>View Deal</button>
            </div>
          </div>

          {/* 2nd */}

          <div className="bg-white p-4 rounded-md">
          <div className="flex justify-center items-center">
              <img src={image} />
            </div>

            <div className="my-3">
              <button className="bg-slate-200 text-blue-800 rounded-md py-1 px-2 ">
                20% Off
              </button>
              <button className="bg-slate-200 text-blue-800 rounded-md py-1 px-2 ml-5">
                Limited time{" "}
              </button>
            </div>

            <div className="my-3 text-gray-600 font-bold text-center text-lg">
              <h1>Webbuilder 1</h1>
            </div>
            <div className="my-3 text-gray-600 text-xl">
              <h1>Computer Modern clasic with wix support</h1>
            </div>

            <div className="my-3 text-gray-600">
              <div className="flex gap-3 items-center">
                <h1 className="text-2xl">$39.96</h1>
                <div className="relative top-1 flex gap-3">
                  <h1 className="text-gray-500">$49.96</h1>
                  <h1 className="text-red-600">(20% Off)</h1>
                </div>
              </div>
            </div>

            <div className="my-3 bg-blue-500 py-2.5 text-white text-center rounded-lg">
              <button>View Deal</button>
            </div>
          </div>

          {/* 3rd */}

          <div className="bg-white p-4 rounded-md">
          <div className="flex justify-center items-center">
              <img src={image} />
            </div>

            <div className="my-3">
              <button className="bg-slate-200 text-blue-800 rounded-md py-1 px-2 ">
                20% Off
              </button>
              <button className="bg-slate-200 text-blue-800 rounded-md py-1 px-2 ml-5">
                Limited time{" "}
              </button>
            </div>

            <div className="my-3 text-gray-600 font-bold text-lg">
              <h1>Webbuilder 1</h1>
            </div>
            <div className="my-3 text-gray-600 text-lg">
              <h1>Computer Modern clasic with wix support</h1>
            </div>

            <div className="my-3 text-gray-600">
              <div className="flex gap-3 items-center">
                <h1 className="text-2xl">$39.96</h1>
                <div className="relative top-1 flex gap-3">
                  <h1 className="text-gray-500">$49.96</h1>
                  <h1 className="text-red-600">(20% Off)</h1>
                </div>
              </div>
            </div>

            <div className="my-3 bg-blue-500 py-2.5 text-white text-center rounded-lg">
              <button>View Deal</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
