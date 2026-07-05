import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';
import { FaBriefcase } from 'react-icons/fa';
import profileImage from '../assets/image.jpg';

const HomePage = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Qis College Of Engineering & Technology", 
      period: "2020 – 2024",
      achievements: ["GPA: 7.2/10", "Built School Management System"]
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Sai Junior College",
      period: "2018 – 2020",
      achievements: ["Top 5% of class", "Built E-Commerce Platform"]
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer (Intern)",
      company: "MERN Stack Development",
      period: "2024 - Present",
      achievements: [
        "Building full-stack applications with MongoDB, Express, React, and Node.js",
        "Implementing RESTful APIs and authentication systems",
        "Developing responsive UIs with modern frameworks like Tailwind CSS"
      ]
    },
    {
      role: "Python Full Stack Developer (Intern)",
      company: "Python & Web Development",
      period: "2023 - 2024",
      achievements: [
        "Completed comprehensive training in Python full stack development",
        "Developed projects using Django and Flask frameworks",
        "Gained expertise in frontend technologies like HTML, CSS, and JavaScript"
      ]
    }
  ];

  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 95 },
    { name: 'Javascript', level: 70 },
    { name: 'React', level: 70 },
    { name: 'Node', level: 70 },
    { name: 'Express', level: 80 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git', level: 70 }
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: "https://github.com/bhargavraju1", name: "GitHub" },
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/bhargav-raju-tamatam-827658284/", name: "LinkedIn" },
    { icon: < FaBriefcase/>, url: "https://www.naukri.com/mnjuser/profile?id=&altresid", name: "Naukri" },
  ]

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-12 text-gray-800 bg-white">
      <div className="flex flex-col items-center mx-auto max-w-7xl">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center w-full gap-12 mb-12 lg:flex-row">
          {/* Interactive Image - UPDATED SIZE HERE */}
          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <motion.img
              src={profileImage}
              alt="Profile"
              // Reduced size from w-70 h-95 to w-56 h-56
              className={`rounded-full
w-48 h-50
sm:w-64 sm:h-64
md:w-72 md:h-72
lg:w-80 lg:h-80
object-cover object-[center_20%]
border-[4px]
border-blue-900
transition-all
duration-300
${imageLoaded ? 'shadow-xl' : 'shadow-none'}`}
              whileHover={{ scale: 1.05 }}
              onLoad={() => setImageLoaded(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              style={{ cursor: 'default', userSelect: 'none' }}
            />

            {/* Floating Tech Badges - ADJUSTED POSITION */}
            <motion.div 
              className="absolute flex gap-1 -bottom-4 -right-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {['HTML', 'CSS', 'JS'].map((tech, i) => (
                <motion.div
                  key={i}
                  className="px-2 py-1 text-xs font-bold text-white bg-blue-900 rounded-full shadow-md"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bio with Interactive Elements */}
          <motion.div 
            className="w-full space-y-6 text-center lg:w-1/2 lg:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm <motion.span 
                className="inline-block text-blue-900"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                Bhargav Raju
              </motion.span> 
            </h1>

            <motion.p 
             className="mt-4 text-base md:text-lg lg:text-xl text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I'm a Full Stack Developer with a B.Tech in Information Technology,  
              crafting seamless web experiences using the MERN stack.
            </motion.p>

            {/* Animated Skills Cloud */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mt-6 lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {skills.slice(0, 6).map((skill) => (
                <motion.div
                  key={skill.name}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    hoveredSkill === skill.name 
                      ? 'bg-blue-900 text-white scale-110' 
                      : 'bg-gray-200'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {skill.name}
                </motion.div>
              ))}
            </motion.div>

            {/* Interactive Buttons */}
            <motion.div 
              className="flex justify-center gap-6 mt-8 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {/* View Projects Button */}
              <Link to="/projects">
                <motion.button 
                className="flex items-center gap-2 px-4 md:px-5 py-3 text-sm md:text-base font-semibold text-white transition duration-200 bg-blue-900 border-2 border-blue-900 rounded-lg hover:bg-blue-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                  <FiExternalLink className="w-4 h-4" />
                </motion.button>
              </Link>

              {/* Contact Me Button */}
              <Link to="/contact">
                <motion.button 
                  className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white transition duration-200 bg-blue-900 border-2 border-blue-900 rounded-lg hover:bg-blue-800 md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                  <FiMail className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links with Animation */}
            <motion.div 
              className="flex justify-center gap-4 mt-6 lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  className="p-2 text-2xl bg-gray-200 rounded-full hover:bg-blue-900 hover:text-white"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                    backgroundColor: '#2563eb'
                  }}
                  transition={{ type: 'spring', stiffness: 400 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="w-full mt-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "20px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="relative mb-12 text-4xl font-thin tracking-wider text-center">
                EXPERIENCE & <span className="font-bold text-blue-900">CERTIFICATIONS</span>
                <span className="absolute bottom-0 w-24 h-px transform -translate-x-1/2 left-1/2 bg-gray-00"></span>
              </h2>
            </motion.div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="p-8 text-left bg-gray-100 shadow-md rounded-xl group"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="flex items-center gap-2 text-2xl font-semibold">
                    {exp.role}
                    <motion.span 
                      className="text-lg text-blue-900 opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                    >
                      {index === 0 ? "🚀" : "🐍"}
                    </motion.span>
                  </h3>
                  <p className="mt-2 text-lg">{exp.company}</p>
                  <p className="mt-1 text-gray-600">{exp.period}</p>
                  
                  <motion.ul 
                    className="mt-4 space-y-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-blue-900">✓</span> {achievement}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="w-full mt-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "20px" }}
              transition={{ duration: 0.8 }}
      >
        
     <h2 className="mb-12 text-4xl text-center">
  <span className="font-thin text-gray-600">EDU</span><span className="font-bold text-blue-900">CATION</span>
</h2>
           </motion.div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="p-8 text-left bg-gray-100 shadow-md rounded-xl group"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="flex items-center gap-2 text-2xl font-semibold">
                    {edu.degree}
                    <motion.span 
                      className="text-lg text-blue-900 opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                    >
                      🎓
                    </motion.span>
                  </h3>
                  <p className="mt-2 text-lg">{edu.institution}</p>
                  <p className="mt-1 text-gray-600">{edu.period}</p>
                  
                  <motion.ul 
                    className="mt-4 space-y-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {edu.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-center gap-2 text-gray-700"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-blue-900">✓</span> {achievement}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Skills Section */}
<section className="w-full py-20 bg-white">
  <div className="max-w-6xl px-6 mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    ><h2 className="relative mb-12 text-4xl font-thin tracking-wider text-center">
  SKILLS & <span className="font-bold text-blue-900">EXPERTISE</span>
  <span className="absolute bottom-0 w-24 h-px transform -translate-x-1/2 left-1/2 "></span>
</h2>
     
    </motion.div>

    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden transition-all bg-white border border-gray-100 shadow-sm group rounded-xl hover:border-blue-400"
          whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.15)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span className="text-sm font-semibold text-blue-600">{skill.level}%</span>
            </div>
            
            <div className="relative w-full h-2 overflow-hidden bg-gray-100 rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.2, 
                  delay: index * 0.1,
                  type: 'spring',
                  damping: 10
                }}
              />
            </div>
          </div>

          {/* Hover effect indicator */}
          <div className="absolute bottom-0 left-0 w-full h-1 transition-opacity bg-blue-500 opacity-0 group-hover:opacity-100"></div>
        </motion.div>
      ))}
    </div>

    {/* Skill Level Legend */}
    <motion.div 
      className="flex justify-center gap-4 mt-12 text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex items-center">
        <div className="w-3 h-3 mr-2 bg-blue-400 rounded-full"></div>
        <span>Beginner (0-50%)</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 mr-2 bg-blue-500 rounded-full"></div>
        <span>Intermediate (50-80%)</span>
      </div>
      <div className="flex items-center">
        <div className="w-3 h-3 mr-2 bg-blue-600 rounded-full"></div>
        <span>Advanced (80-100%)</span>
      </div>
    </motion.div>
  </div>
</section>
      </div>
    </div>
  );
};

export default HomePage;