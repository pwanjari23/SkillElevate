import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get('/data/courses.json');
        const found = res.data.find((c) => c.id === parseInt(id));
        setCourse(found);
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 border shadow rounded mt-6 ">
      <img src={course.image} alt={course.title} className="mb-4" />
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="my-2">{course.description}</p>
      <p className="text-lg font-semibold">₹{course.price}</p>
      <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default CourseDetails;
