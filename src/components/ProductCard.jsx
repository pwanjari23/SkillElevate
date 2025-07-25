// src/components/ProductCard.jsx
import React from "react";

const ProductCard = () => {
  return (
    <div className="w-72 h-96 relative rounded-xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <img
        src="https://m.media-amazon.com/images/I/61n0aVXta7L._UY1000_.jpg"
        alt="Product"
        className="w-full h-full object-cover"
      />

      {/* Product Name Overlay */}
      <div className="absolute top-4 left-4 text-white text-xl font-semibold drop-shadow-md">
        Classic Watch
      </div>

      {/* Details Overlay at Bottom */}
      <div className="absolute bottom-0 w-full bg-white bg-opacity-80 p-4 text-sm">
        <p className="text-gray-800">Price: ₹2,499</p>
        <p className="text-gray-600">Category: Accessories</p>
      </div>
    </div>
  );
};

export default ProductCard;
