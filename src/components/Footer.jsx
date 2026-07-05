import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/bhargavraju1',
      icon: <FaGithub className="text-2xl md:text-3xl" />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bhargav-raju-tamatam-827658284/',
      icon: <FaLinkedin className="text-2xl md:text-3xl" />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/b_h_a_r_g_a_v_149/',
      icon: <FaInstagram className="text-2xl md:text-3xl" />,
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/bhargav.raj.167527',
      icon: <FaFacebook className="text-2xl md:text-3xl" />,
    },
    {
      name: 'Twitter',
      url: 'https://x.com/b_h_a_r_g_a_v_1',
      icon: <FaTwitter className="text-2xl md:text-3xl" />,
    }
  ];

  return (
    <footer className="bg-blue-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Bhargav Raju</h3>
            <p className="mb-3 font-medium">Full Stack Developer | UI/UX Enthusiast</p>
           <p className="mb-4 text-sm md:text-base">
            I am eager to apply my skills to real-world projects and continue learning and growing as a full-stack developer.
            </p>
            <div className="flex items-center space-x-2">
              <span>Available for freelance work</span>
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white text-white/100 transition">About</a></li>
              <li><a href="/projects" className="hover:text-white text-white/100 transition">Projects</a></li>
              <li><a href="/blog" className="hover:text-white text-white/100 transition">Blog</a></li>
              <li><a href="/contact" className="hover:text-white text-white/100 transition">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
           <h4 className="text-lg md:text-xl font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-white/100">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
               <a
  href="mailto:bhargavtamatam@gmail.com"
  className="hover:text-white"
>
  bhargavtamatam@gmail.com
</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            <a
  href="tel:+919603785395"
  className="hover:text-white"
>
  +91 9603785395
</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                KPHB Colony, Kukatpally<br />
                Hyderabad, Telangana – 500072<br />
                India
              </li>
            </ul>
          </div>
        </div>
        
        {/* Social Media Section */}
        <div className="flex flex-col items-center border-t border-white/20 pt-8">
          <h5 className="text-lg mb-6">Connect With Me</h5>
         <div className="flex space-x-4 md:space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/100 hover:text-white transition duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-center text-white/100 text-sm">
            <p>© {new Date().getFullYear()} Bhargav Raju. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <a href="/privacy" className="hover:text-white ">Privacy Policy</a>
              <a href="/terms" className="hover:text-white  ">Terms</a>
              <a href="/sitemap" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
