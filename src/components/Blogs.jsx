import React, { useState } from 'react';

const blogs = [
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/gblog",
    description: "Comprehensive tutorials on Java, JavaScript, React, and Node.js, covering data structures, algorithms, and full-stack development with practical examples.",
    last_updated: "2024-09-30"
  },
  {
    name: "freeCodeCamp",
    url: "https://www.freecodecamp.org/news",
    description: "In-depth guides and tutorials on JavaScript, React, and Node.js, with a focus on beginner-to-advanced web development skills and projects.",
    last_updated: "2025-06-15"
  },
  {
    name: "Smashing Magazine",
    url: "https://www.smashingmagazine.com",
    description: "Articles on JavaScript, React, and front-end development, emphasizing best practices, performance optimization, and modern web design.",
    last_updated: "2025-04-10"
  },
  {
    name: "CSS-Tricks",
    url: "https://css-tricks.com",
    description: "Focuses on JavaScript and React, with practical tips on front-end development, UI design, and integrating with Node.js backends.",
    last_updated: "2024-12-20"
  },
  {
    name: "Dev.to",
    url: "https://dev.to",
    description: "Community-driven platform with posts on Java, JavaScript, React, and Node.js, covering tutorials, career advice, and open-source projects.",
    last_updated: "2025-07-20"
  },
  {
    name: "Scotch.io",
    url: "https://scotch.io",
    description: "Tutorials on JavaScript, React, and Node.js, with hands-on projects for building full-stack applications and mastering frameworks.",
    last_updated: "2023-10-15"
  },
  {
    name: "LogRocket Blog",
    url: "https://blog.logrocket.com",
    description: "Covers React, Node.js, and JavaScript, with articles on state management, debugging, and building scalable web applications.",
    last_updated: "2025-03-25"
  },
  {
    name: "SitePoint",
    url: "https://www.sitepoint.com",
    description: "Resources on JavaScript, React, and Node.js, offering guides on front-end and back-end development, including performance tips.",
    last_updated: "2024-11-10"
  },
  {
    name: "JavaScript.info",
    url: "https://javascript.info",
    description: "Detailed tutorials on JavaScript fundamentals, advanced concepts, and frameworks like React, ideal for mastering client-side scripting.",
    last_updated: "2024-08-22"
  },
  {
    name: "DZone",
    url: "https://dzone.com",
    description: "Articles on Java, JavaScript, and Node.js, focusing on enterprise development, microservices, and full-stack programming techniques.",
    last_updated: "2025-02-15"
  },
  {
    name: "RisingStack",
    url: "https://blog.risingstack.com",
    description: "Specializes in Node.js and JavaScript, with insights on microservices, server-side development, and React for front-end integration.",
    last_updated: "2024-10-20"
  },
  {
    name: "Overreacted",
    url: "https://overreacted.io",
    description: "Personal blog by Dan Abramov, focusing on React and JavaScript, with deep dives into hooks, state management, and best practices.",
    last_updated: "2023-12-05"
  },
  {
    name: "Baeldung",
    url: "https://www.baeldung.com",
    description: "In-depth Java tutorials, covering Spring, Hibernate, and REST APIs, with practical guides for backend development with Node.js integration.",
    last_updated: "2025-05-30"
  },
  {
    name: "React Blog",
    url: "https://react.dev/blog",
    description: "Official React blog with updates, tutorials, and best practices for building modern front-end applications using React and JavaScript.",
    last_updated: "2025-01-20"
  },
  {
    name: "Node.js Blog",
    url: "https://nodejs.org/en/blog",
    description: "Official Node.js blog with articles on server-side JavaScript, performance optimization, and building scalable APIs with Node.js.",
    last_updated: "2025-04-01"
  }
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Calculate the blogs to display for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text animate-pulse">
          Ideas that Inspire
        </h1>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {currentBlogs.map((blog, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {blog.name}
                </h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Last Updated: {blog.last_updated}
                </p>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                >
                  Visit Blog
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentPage === index + 1
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-400 hover:bg-blue-500'
              }`}
              aria-label={`Go to page ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;