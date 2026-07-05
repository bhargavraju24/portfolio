// src/pages/Blog.jsx
import React from "react";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  const blogs = [
    { title: "My Portfolio Website", summary: "How I built my personal site using React and Tailwind CSS." },
    { title: "React Basics", summary: "Simple guide for beginners to start using React." },
    { title: "School Management System", summary: "My full-stack MERN project with student and teacher dashboards." },
    { title: "Host Website on Vercel", summary: "Steps to host any React site for free using Vercel and GitHub." },
    { title: "useState and useEffect", summary: "Easy explanation of React hooks with examples." },
    { title: "Secure Quiz App", summary: "How I created a quiz app with tab switch restrictions." },
    { title: "Tailwind Tricks", summary: "Useful classes and tips that I use often in Tailwind CSS." },
    { title: "Home Page Animation", summary: "Add smooth animations using Framer Motion in React." },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog, index) => (
          <BlogCard key={index} title={blog.title} summary={blog.summary} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
