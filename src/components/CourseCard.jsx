import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const CourseCard = ({ course, handleAddToCart }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center text-yellow-500 space-x-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {hasHalfStar && <FaStarHalfAlt />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
        <span className="ml-1 text-gray-600 text-sm">({rating})</span>
      </div>
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200 h-[360px] flex flex-col justify-between relative">
      <div className="relative">
        {course.isBestseller && (
          <span className="absolute top-0 left-0 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded">
            Bestseller
          </span>
        )}
        {course.premium && (
          <span className="absolute top-0 right-0 bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded">
            Premium
          </span>
        )}
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{course.author}</p>
        {renderStars(course.rating)}
      </div>

      <div className="px-4 pb-4 flex justify-between items-center">
        <div className="text-blue-600 font-bold text-md">₹{course.price}</div>
        <button
          onClick={() => handleAddToCart(course)}
          className="bg-blue-600 text-white py-1 px-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
