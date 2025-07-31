import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-12 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black">About SkillElevate</h1>
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
          Unlocking potential through accessible, practical, and high-quality online education.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Mission */}
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
          <h2 className="text-xl font-semibold mb-2 text-black">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            At SkillElevate, we strive to make top-tier tech education accessible to all. Our curated
            courses empower beginners and experienced developers to elevate their skills and advance
            their careers.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
          <h2 className="text-xl font-semibold mb-2 text-black">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            We envision a world where learning knows no limits. Through affordable, project-based
            courses, we bridge the gap between education and employability, empowering learners globally.
          </p>
        </div>

        {/* Features / Highlights */}
        <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
          <h2 className="text-xl font-semibold mb-2 text-black">Why SkillElevate?</h2>
          <div className="gridwei grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-start gap-2">
              <span className="text-blue-600 text-base">•</span>
              <p classTableName="text-gray-600 text-sm">Seamless and responsive UI for effortless learning</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 text-base">•</span>
              <p className="text-gray-600 text-sm">Courses built with real-world projects and applications</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 text-base">•</span>
              <p className="text-gray-600 text-sm">User-friendly add-to-cart, video previews, and filtering</p> 
            </div>
            <div className="flex items-start gap-2">
              <span className="text-blue-600 text-base">•</span>
              <p className="text-gray-600 text-sm">Powered by React and Tailwind CSS for a modern experience</p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Join Us</h2>
          <p className="leading-relaxed mb-4 text-sm">
            Whether you're a self-learner, student, or professional, SkillElevate is your platform for
            growth. Start your tech journey and unlock your potential today.
          </p>
          <a
            href="#"
            className="inline-block bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Explore Courses
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;