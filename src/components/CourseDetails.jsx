import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const { id } = useParams(); // e.g., "frontend-1"
  const [course, setCourse] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get("/data/courses.json");
        const allCourses = res.data.flatMap(category =>
          category.courses.map(course => ({
            ...course,
            uniqueId: `${category.category.toLowerCase()}-${course.id}`
          }))
        );
        const found = allCourses.find(course => course.uniqueId === id);
        if (found) {
          setCourse(found);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Error fetching course data:", error);
        setNotFound(true);
      }
    };

    fetchCourse();
  }, [id]);

  if (notFound) {
    return <div className="text-center py-10 text-red-600">Course not found.</div>;
  }

  if (!course) {
    return <div className="text-center py-10">Loading course details...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/courses" className="text-blue-600 hover:underline">&larr; Back to courses</Link>

      <div className="mt-6 border rounded-lg shadow p-6">
        <img src={course.image} alt={course.title} className="w-full rounded-lg mb-6" />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.title}</h1>

        <p className="text-gray-600 mb-2"><strong>Duration:</strong> {course.duration}</p>
        <p className="text-gray-600 mb-2"><strong>Level:</strong> {course.level}</p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
