const About = () => {
  // Updated theme configuration with blue-900 text and no light backgrounds
  const theme = {
    colors: {
      primary: {
        text: 'text-blue-900',
        bg: 'bg-white', // Changed to white
        dark: 'bg-blue-800',
        border: 'border-blue-200'
      },
      secondary: {
        text: 'text-blue-900',
        accent: 'text-blue-900'
      },
      card: {
        bg: 'bg-white',
        shadow: 'shadow-lg'
      }
    },
    spacing: {
  section: 'py-16 md:py-24',
  inner: 'px-4 sm:px-6 lg:px-8'
}
  };

  // Content data remains the same
  const aboutData = {
    title: "About Me",
    subtitle: "MERN Stack Developer",
    intro: "Passionate developer creating modern web applications",
    description: [
      "I'm a dedicated MERN stack developer who recently graduated in 2024, currently expanding my expertise through professional experience.",
      "As an intern at Kodebloom Technologies, I'm building scalable applications using cutting-edge technologies in the JavaScript ecosystem.",
      "My approach combines solid computer science fundamentals with practical development experience to deliver efficient solutions."
    ],
    experience: {
      current: {
        role: "MERN Stack Developer Intern",
        company: "Kodebloom Technologies Service Pvt Ltd",
        period: "June 2024 - Present",
        responsibilities: [
          "Develop full-stack applications using React, Node.js, Express, and MongoDB",
          "Implement responsive UIs with modern CSS frameworks",
          "Design and optimize database schemas",
          "Collaborate with team members using Git workflows"
        ]
      }
    },
    education: {
      degree: "Bachelor of Information Technology",
      institution: "QIS College of Engineering and Technology",
      year: "2024",
      highlights: [
        "Specialized in Web Technologies",
        "Graduated with Honors"
      ]
    },
    skills: {
      technical: [
        { name: "React.js", level: 70 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "JavaScript (ES6+)", level: 70 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Git/GitHub", level: 80 }
      ],
      tools: {
        development: ["VS Code", "Postman", "MongoDB Compass"],
        deployment: ["Netlify", "Vercel", "Heroku"],
        collaboration: ["GitHub", "Slack", "Trello"]
      }
    }
  };

  // Reusable components
  const SectionHeader = ({ title, subtitle, intro }) => (
    <div className="text-center mb-16 max-w-3xl mx-auto">
      <span className={`block text-sm uppercase tracking-wider ${theme.colors.secondary.accent} mb-3`}>
        {intro}
      </span>
      <h2 className={`text-4xl md:text-5xl font-bold ${theme.colors.primary.text} mb-4`}>
        {title}
      </h2>
      <p className={`text-lg md:text-xl ${theme.colors.secondary.text} font-medium`}>
        {subtitle}
      </p>
      <div className={`w-20 h-1 ${theme.colors.primary.dark} mx-auto mt-6 rounded-full`}></div>
    </div>
  );

  const Card = ({ title, children, className = '' }) => (
    <div className={`${theme.colors.card.bg} ${theme.colors.card.shadow} rounded-xl overflow-hidden border ${theme.colors.primary.border} ${className}`}>
      {title && (
        <div className={`px-4 md:px-6 py-4 border-b ${theme.colors.primary.border}`}>
          <h3 className={`text-lg font-semibold ${theme.colors.primary.text}`}>{title}</h3>
        </div>
      )}
      <div className="p-4 md:p-6">
        {children}
      </div>
    </div>
  );

  const ProgressBar = ({ skill, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
       <span className={`text-sm md:text-base font-medium ${theme.colors.secondary.text}`}>{skill}</span>
       <span className={`text-sm md:text-base font-medium ${theme.colors.secondary.accent}`}>{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-200">
        <div 
          className={`h-full rounded-full ${theme.colors.primary.dark}`} 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  const ExperienceItem = ({ role, company, period, responsibilities }) => (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-3">
        <h4 className={`text-lg font-semibold ${theme.colors.primary.text}`}>{role}</h4>
        <span className={`text-sm ${theme.colors.secondary.accent}`}>{period}</span>
      </div>
      <h5 className={`font-medium ${theme.colors.secondary.text} mb-3`}>{company}</h5>
      <ul className="space-y-2">
        {responsibilities.map((item, index) => (
          <li key={index} className={`flex items-start ${theme.colors.secondary.text}`}>
            <span className={`inline-block ${theme.colors.primary.text} mr-2`}>•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="about" className={`${theme.spacing.section} ${theme.colors.primary.bg} ${theme.spacing.inner}`}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title={aboutData.title} 
          subtitle={aboutData.subtitle}
          intro={aboutData.intro}
        />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:w-2/3 space-y-8">
            {/* About Text */}
            <Card>
              <div className="space-y-4">
                {aboutData.description.map((paragraph, index) => (
                 <p
  key={index}
  className={`text-sm md:text-base ${theme.colors.secondary.text} leading-relaxed`}
>
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>

            {/* Experience */}
            <Card title="Professional Experience">
              <ExperienceItem {...aboutData.experience.current} />
            </Card>

            {/* Education */}
            <Card title="Education">
              <div className="mb-4">
               <h4 className={`text-base md:text-lg font-semibold ${theme.colors.primary.text} mb-1`}>
                  {aboutData.education.degree}
                </h4>
                <p className={`${theme.colors.secondary.text} mb-2`}>
                  {aboutData.education.institution} • {aboutData.education.year}
                </p>
                <ul className="space-y-1">
                  {aboutData.education.highlights.map((item, index) => (
                    <li key={index} className={`flex items-start ${theme.colors.secondary.text}`}>
                      <span className={`inline-block ${theme.colors.primary.text} mr-2`}>-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* Right Column - Skills */}
          <div className="lg:w-1/3 space-y-8">
            {/* Skills Progress */}
            <Card title="Technical Skills">
              <div className="space-y-6">
                {aboutData.skills.technical.map((skill, index) => (
                  <ProgressBar 
                    key={index}
                    skill={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </Card>

            {/* Tools */}
            <Card title="Tools & Technologies">
              <div className="space-y-6">
                <div>
                  <h4 className={`font-semibold ${theme.colors.primary.text} mb-3`}>Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {aboutData.skills.tools.development.map((tool, index) => (
                  <span
                  key={index}
                  className={`px-3 py-1 text-xs md:text-sm rounded-full bg-gray-100 ${theme.colors.primary.text}`}
                  >
                  {tool}
                  </span>
                  ))}
                  </div>
                </div>

                <div>
                  <h4 className={`font-semibold ${theme.colors.primary.text} mb-3`}>Deployment</h4>
                  <div className="flex flex-wrap gap-2">
                    {aboutData.skills.tools.deployment.map((tool, index) => (
                      <span key={index} className={`px-3 py-1 text-xs md:text-sm rounded-full bg-gray-100 ${theme.colors.primary.text}`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`font-semibold ${theme.colors.primary.text} mb-3`}>Collaboration</h4>
                  <div className="flex flex-wrap gap-2">
                    {aboutData.skills.tools.collaboration.map((tool, index) => (
                      <span key={index} className={`px-3 py-1 text-xs md:text-sm rounded-full bg-gray-100 ${theme.colors.primary.text}`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;