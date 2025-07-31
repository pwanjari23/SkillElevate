import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import axios from "axios";
import Shimmer from "./Shimmer";

const COURSES_PER_PAGE = 8;

const CourseList = () => {
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPages, setCurrentPages] = useState({});
  const [loading, setLoading] = useState(true); // 🔁 Step 1: Loading state

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("/data/courses.json");

        setCategories(res.data);

        const initialPages = res.data.reduce((acc, category) => ({
          ...acc,
          [category.category]: 1,
        }), {});
        setCurrentPages(initialPages);

        setLoading(false); // 🔁 Step 2: Set loading false after data fetch
      } catch (error) {
        console.error("Error fetching courses:", error);
        setLoading(false); // Also stop loading on error
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

  // 🔁 Step 3: Show shimmer while loading
  if (loading) {
    return <Shimmer />;
  }

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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              {category.category} Courses
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/course/${category.category.toLowerCase()}-${course.id}`}
                  className="cursor-pointer"
                >
                  <CourseCard
                    course={course}
                    handleAddToCart={handleAddToCart}
                  />
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center mt-6 space-x-3">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(category.category, index + 1)}
                    className={`w-4 h-4 rounded-full focus:outline-none transition-all duration-300 ${
                      currentPage === index + 1
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
