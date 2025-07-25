import React from 'react';
import { useParams } from 'react-router-dom';

const mockCourses = [
  {
    id: 1,
    title: 'React for Beginners',
    instructor: 'John Doe',
    price: '₹499',
    rating: 4.5,
    image: 'https://img-c.udemycdn.com/course/750x422/2196488_8fc7_10.jpg',
    description: 'Learn the basics of React including components, state, props, and hooks.',
    content: [
      'Introduction to React',
      'JSX and Components',
      'Props and State',
      'useEffect & useState',
      'Project: Build a ToDo App'
    ]
  },
  {
    id: 2,
    title: 'Master JavaScript in 2024',
    instructor: 'Jane Smith',
    price: '₹699',
    rating: 4.7,
    image: 'https://img-c.udemycdn.com/course/750x422/394676_ce3d_5.jpg',
    description: 'Master JavaScript from scratch with real-world projects.',
    content: [
      'JavaScript Basics',
      'Functions and Objects',
      'DOM Manipulation',
      'ES6+ Features',
      'Build a Weather App'
    ]
  }
];

const CourseDetail = () => {
  const { id } = useParams();
  const course = mockCourses.find(c => c.id.toString() === id);

  if (!course) return <div className="text-center text-red-600 mt-10">Course not found</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 dark:text-white ">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-lg mb-3"><strong>Instructor:</strong> {course.instructor}</p>
      <p className="text-lg mb-3"><strong>Price:</strong> {course.price}</p>
      <p className="text-lg mb-3"><strong>Rating:</strong> ★ {course.rating}</p>
      <p className="text-md mb-5">{course.description}</p>

      <h2 className="text-xl font-semibold mb-2">Course Content:</h2>
      <ul className="list-disc pl-6 space-y-1">
        {course.content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;
