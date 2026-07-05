// src/components/BlogCard.jsx
import React from "react";

const BlogCard = ({ title, summary }) => (
  <div className="bg-white p-4 md:p-6 shadow-md rounded-md border hover:shadow-lg transition-all">
    <h2 className="text-lg md:text-xl font-bold text-blue-900">{title}</h2>
    <p className="text-sm md:text-base text-gray-600 mt-2">{summary}</p>
  </div>
);

export default BlogCard;
