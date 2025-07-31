// CourseCardShimmer.jsx
import React from "react";

const Shimmer = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 animate-pulse h-[340px]">
      <div className="bg-gray-300 h-40 w-full rounded-md mb-4" />
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      <div className="mt-4 flex justify-between items-center">
        <div className="h-4 w-20 bg-gray-300 rounded"></div>
        <div className="h-4 w-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default Shimmer;
