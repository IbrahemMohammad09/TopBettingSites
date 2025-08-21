import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {


  return (
    <div className="pt-20 h-screen">
      <div className="flex flex-col items-center justify-center  text-center py-20 p-4">
        {/* Page Title with Animation */}
        <h1
          className="text-6xl font-bold text-[#00FF88] mb-4"
        >
          Oops! Error 404
        </h1>

        {/* Message with Animation */}
        <p
          className="text-lg text-gray-600 mb-6"
        >
          Something went wrong! The page you are looking for does not exist.
        </p>

        {/* Button with Animation */}
        <div>
          <Link
            to="/"
            className="bg-[#00FF88] text-[#101B2D] border-0 px-6 py-1 font-semibold text-base rounded-md cursor-pointer my-5 mx-auto block transition-colors duration-300 ease-in-out
            hover:bg-[#00cc66] hover:text-white"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
