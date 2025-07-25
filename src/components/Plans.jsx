import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";

const plans = [
  {
    title: "Basic",
    price: "₹499",
    frequency: "per month",
    features: [
      "Access to 5 courses",
      "Basic certificate",
      "Community support",
      "Limited downloads",
    ],
    buttonColor: "bg-blue-600",
    iconColor: "text-blue-500",
    popular: false,
  },
  {
    title: "Pro",
    price: "₹999",
    frequency: "per month",
    features: [
      "Access to 50+ courses",
      "Advanced certificate",
      "1-on-1 mentorship",
      "Unlimited downloads",
    ],
    buttonColor: "bg-green-600",
    iconColor: "text-green-500",
    popular: true,
  },
  {
    title: "Elite",
    price: "₹1999",
    frequency: "per month",
    features: [
      "Unlimited course access",
      "Verified certificates",
      "Coursera Coach access",
      "Priority support",
    ],
    buttonColor: "bg-purple-600",
    iconColor: "text-purple-500",
    popular: false,
  },
];

const Plans = () => {
  return (
    <div className=" py-16 px-4 font-serif">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Plans & Pricing</h1>
        <p className="text-gray-600">
          Choose a plan that fits your learning goals and level.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex-1 bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 flex flex-col items-center text-center border ${
              plan.popular ? "border-green-500" : "border-transparent"
            }`}
          >
            {/* Most Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow">
                <FaStar className="inline-block mr-1" /> Most Popular
              </div>
            )}

            <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
            <p className="text-3xl font-bold mb-1">{plan.price}</p>
            <p className="text-sm text-gray-500 mb-6">{plan.frequency}</p>
            <ul className="text-gray-700 text-sm mb-6 space-y-3 w-full">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center md:justify-start gap-2"
                >
                  <FaCheckCircle className={`${plan.iconColor}`} />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`${plan.buttonColor} text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
