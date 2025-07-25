import React, { useState } from "react";

const faqs = [
  {
    question: "What is SkillElevate?",
    answer:
      "SkillElevate is an online learning platform offering comprehensive courses in Frontend, Backend, and Web Development. Our courses are designed for beginners to advanced learners, helping you build real-world skills to elevate your career.",
  },
  {
    question: "How do I enroll in a course?",
    answer:
      "To enroll, browse our course catalog, select a course, and click 'Add to Cart.' Once added, proceed to checkout from your cart to complete the enrollment process. You'll gain immediate access to the course materials upon payment.",
  },
  {
    question: "Are the courses self-paced?",
    answer:
      "Yes, all SkillElevate courses are self-paced. You can learn at your own speed, access materials anytime, and revisit lessons as needed to master the content.",
  },
  {
    question: "Do I get a certificate upon completion?",
    answer:
      "Yes, upon completing a course, you will receive a certificate of completion, which you can download and share to showcase your skills on platforms like LinkedIn.",
  },
  {
    question: "What if I need help during a course?",
    answer:
      "SkillElevate offers support through community forums, email support, and dedicated Q&A sessions with instructors for select courses. You can also access resources like tutorials and documentation to aid your learning.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm bg-white overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-900 bg-gray-50 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{faq.question}</span>
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 p-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;