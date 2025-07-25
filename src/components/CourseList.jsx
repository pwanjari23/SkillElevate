import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import axios from "axios";

const COURSES_PER_PAGE = 8;

const CourseList = () => {
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPages, setCurrentPages] = useState({}); // Track page for each category

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("/data/courses.json");
        setCategories(res.data);
        // Initialize pagination for each category
        const initialPages = res.data.reduce((acc, category) => ({
          ...acc,
          [category.category]: 1,
        }), {});
        setCurrentPages(initialPages);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleAddToCart = (course) => {
    const updatedCart = [...cart, course];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handlePageChange = (category, page) => {
    setCurrentPages((prev) => ({ ...prev, [category]: page }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {categories.map((category) => {
        const totalPages = Math.ceil(category.courses.length / COURSES_PER_PAGE);
        const currentPage = currentPages[category.category] || 1;
        const indexOfLastCourse = currentPage * COURSES_PER_PAGE;
        const indexOfFirstCourse = indexOfLastCourse - COURSES_PER_PAGE;
        const currentCourses = category.courses.slice(indexOfFirstCourse, indexOfLastCourse);

        return (
          <div key={category.category} className="mb-12">
            {/* Category Header */}
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {category.category} Courses
            </h2>
            {/* Course Grid for the Category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  handleAddToCart={handleAddToCart}
                />
              ))}
            </div>
            {/* Dot Pagination for the Category */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6 space-x-3">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(category.category, index + 1)}
                    className={`w-4 h-4 rounded-full focus:outline-none transition-all duration-300 ${currentPage === index + 1
                      ? "bg-blue-600 scale-110 ring-2 ring-blue-300"
                      : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    aria-label={`Go to page ${index + 1} of ${category.category}`}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CourseList;