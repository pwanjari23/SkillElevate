import React from "react";

const CourseCard = ({ course, handleAddToCart }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white hover:shadow-xl transition-shadow">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-2">Duration: {course.duration}</p>
      <p className="text-gray-600 mb-4">Level: {course.level}</p>
      <button
        onClick={() => handleAddToCart(course)}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CourseCard;