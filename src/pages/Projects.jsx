import React from "react";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "School Management System",
      desc: "A full-stack project including Admin, Teacher, and Student dashboards, login functionality, and backend database integration using MERN stack.",
      github: "https://github.com/kodebloomdev/School-Management",
    },
    {
      title: "College Management System",
      desc: "A MERN-based college management project handling courses, holidays, teacher/student management, and dashboards.",
      github: "https://github.com/bhargavraju1/College_project",
    },
    {
      title: "Weather App",
      desc: "A React app using OpenWeatherMap API to show live weather updates based on city input.",
      github: "https://github.com/bhargavraju1/weather_project",
    },
    {
      title: "Quiz App",
      desc: "A secure quiz system with student login, question timer, tab-switch detection, and backend score handling.",
      github: "https://github.com/kodebloomdev/SM",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="mt-4 text-sm md:text-base text-gray-700">
            Here are some of the full-stack projects I've built using React, Node.js, Express, and MongoDB.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
             className="bg-white rounded-2xl shadow-lg border border-blue-100 p-5 md:p-6 transition-transform transform hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-lg md:text-xl font-semibold text-blue-900">{proj.title}</h3>
              <p className="my-3 text-sm md:text-base text-gray-800">{proj.desc}</p>
              <a
                href={proj.github}
               className="inline-flex items-center text-sm md:text-base text-blue-900 font-medium hover:underline hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="mr-2" />
                GitHub Repo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
