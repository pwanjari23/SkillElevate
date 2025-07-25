import React from "react";

const BlogSection = () => {
  return (
    <section className="py-14 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            From Our Blog
          </h2>
          <p className="text-gray-500 mt-2">
            Read our latest insights, updates, and articles.
          </p>
        </div>

        {/* Featured Blog */}
        <div className="relative rounded-2xl overflow-hidden shadow-md mb-12">
          <img
            src="https://plus.unsplash.com/premium_photo-1661547746093-b669aef7501f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsb2dzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt="Featured Blog"
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 md:p-8">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              Unlocking Creative Writing Secrets
            </h2>
            <p className="text-gray-100 text-sm md:text-base">
              Explore proven strategies and expert tips to enhance your storytelling and engage readers.
            </p>
          </div>
        </div>

        {/* Blog Cards Row */}
        <div className="space-y-8">
          {/* Blog Card 1 - Image Right */}
          <div className="flex flex-col md:flex-row-reverse bg-gray-50 rounded-xl shadow-sm overflow-hidden">
            <div className="md:w-1/2 h-60 md:h-auto">
              <img
                src="https://source.unsplash.com/500x400/?team,workspace"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Building the Future of Collaboration
              </h3>
              <p className="text-gray-600 text-sm">
                How modern tools and team dynamics are reshaping productivity and innovation in today’s digital world.
              </p>
            </div>
          </div>

          {/* Blog Card 2 - Image Left */}
          <div className="flex flex-col md:flex-row bg-gray-50 rounded-xl shadow-sm overflow-hidden">
            <div className="md:w-1/2 h-60 md:h-auto">
              <img
                src="https://source.unsplash.com/500x400/?technology"
                alt="Blog"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                The Rise of Ethical AI
              </h3>
              <p className="text-gray-600 text-sm">
                Delving into responsible artificial intelligence development and its impact on privacy, fairness, and transparency.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection;
