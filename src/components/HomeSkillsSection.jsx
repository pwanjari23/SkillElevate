import React from "react";

const skills = [
  {
    color: "bg-gradient-to-r from-blue-500 to-indigo-500",
    title: "Frontend Development",
    description: "Crafting responsive UIs using HTML, CSS, JS, and React.",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
  },
  {
    color: "bg-gradient-to-r from-green-400 to-emerald-500",
    title: "Version Control",
    description: "Managing code with Git & GitHub for team collaboration.",
    image: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
  },
  {
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    title: "Problem Solving",
    description: "Solving coding challenges and improving logic with JS.",
    image: "https://cdn-icons-png.flaticon.com/512/3940/3940056.png",
  },
];

const HomeSkillsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 ">
      <div className="overflow-x-auto md:overflow-visible">
        <div className="flex md:flex-row gap-6 w-max md:w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${skill.color} w-64 md:w-full flex items-center justify-between rounded-2xl shadow-lg p-5 text-white transition-transform transform hover:scale-105`}
            >
              {/* Text */}
              <div className="flex-1">
                <h2 className="text-lg font-bold mb-2">{skill.title}</h2>
                <p className="text-sm">{skill.description}</p>
              </div>

              {/* Image */}
              <div className="w-14 h-14 ml-4 flex-shrink-0">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSkillsSection;
