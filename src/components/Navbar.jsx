// src/components/Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 left-0 bg-blue-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">My Portfolio</h1>

        <div className="flex items-center space-x-3 md:space-x-6">
          {['Home', 'About', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white hover:text-yellow-400 text-sm md:text-base font-medium transition-all duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}

          {/* Resume link opens PDF in new tab */}
          <motion.a
            href="/TBhargavraju_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
           className="text-white hover:text-yellow-400 text-sm md:text-base font-medium transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Resume
          </motion.a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
