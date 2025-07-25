import React from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
  {
    id: 1,
    title: 'React for Beginners',
    instructor: 'John Doe',
    price: '₹499',
    rating: 4.5,
    image: 'https://img-c.udemycdn.com/course/240x135/2196488_8fc7_10.jpg'
  },
  {
    id: 2,
    title: 'Master JavaScript in 2024',
    instructor: 'Jane Smith',
    price: '₹699',
    rating: 4.7,
    image: 'https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg'
  },
  {
    id: 3,
    title: 'The Complete Web Dev Bootcamp',
    instructor: 'Angela Yu',
    price: '₹899',
    rating: 4.8,
    image: 'https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg'
  }
];

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">Top Courses</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Home;
