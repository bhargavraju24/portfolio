import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Only this
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Resume from './pages/Resume';
import Blog from "./pages/Blog";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-950 text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
  
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
