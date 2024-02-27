const Seventh = () => {
  return (
    <div className="lg:flex items-center justify-between">
      <h1 className="text-3xl text-gray-600 pb-3">
        Sign up and get exclusive special deals
      </h1>

      <div>
        <p className="flex justify-center items-center">
          <input className="py-1.5 text-lg border " type="text" />
          <button
            id="applyButton"
            className="bg-blue-500 md:-ml-2 px-3 py-2 rounded-r-md  text-white"
          >
            Sign-Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Seventh;
