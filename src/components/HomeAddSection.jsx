import React from "react";
import { FaSearch, FaCertificate, FaChalkboardTeacher } from "react-icons/fa";

const HomeAddSection = () => {
  const features = [
    {
      icon: <FaSearch className="text-3xl text-blue-600 mb-2" />,
      title: "Explore new skills",
      description:
        "Access 10,000+ courses in AI, business, technology, and more.",
    },
    {
      icon: <FaCertificate className="text-3xl text-green-600 mb-2" />,
      title: "Earn valuable credentials",
      description:
        "Get certificates for every course you finish and boost your chances of getting hired after your trial ends at no additional cost.",
    },
    {
      icon: <FaChalkboardTeacher className="text-3xl text-purple-600 mb-2" />,
      title: "Learn from the best",
      description:
        "Take your skills to the next level with expert-led courses and Coursera Coach, your AI-powered guide.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side - Title */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold">
            Invest in your career
          </h2>
        </div>

        {/* Right Side - Features in Boxes */}
        <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-6 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:text-left md:items-start bg-white p-6 rounded-xl shadow-md flex-1"
            >
              {feature.icon}
              <h3 className="text-lg font-semibold mt-2">{feature.title}</h3>
              <p className="text-sm text-gray-700 mt-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAddSection;
