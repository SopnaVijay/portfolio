import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

// Navigation component
const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'education', 'projects', 'skills', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav className={`fixed w-full z-20 transition-all duration-300 ${scrolled ? 'bg-primary shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white font-bold text-xl"
        >
          Sopna Vijay
        </motion.div>
        <ul className="hidden md:flex space-x-8">
          {['home', 'about', 'experience', 'education', 'projects', 'skills', 'contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                className={`text-base font-medium capitalize ${
                  activeSection === item ? 'text-purple-500' : 'text-white hover:text-purple-300'
                } transition-colors`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Sopna <span className="text-purple-500">Vijay</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Software Engineer | AI & ML Enthusiast | Full-Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-gray-400 mb-10"
          >
            I'm a results-driven Software Engineer with a strong foundation in Object-Oriented Design,
            Data Structures, and Algorithm Development. Passionate about solving complex problems
            using Distributed Systems, Machine Learning, and Cloud Computing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex space-x-4"
          >
            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex mt-10 space-x-6"
          >
            <a href="https://github.com/SopnaVijay" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sopna-vijay-a26232250/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500 transition-colors">
              <FaLinkedin size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">About Me</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-6">
              I'm a results-driven Software Engineer with a strong foundation in Object-Oriented Design,
              Data Structures, and Algorithm Development. Proficient in Python, C++, and Java, with hands-on
              experience building scalable and efficient solutions.
            </p>
            <p className="text-gray-300 mb-6">
              Passionate about solving complex problems using Distributed Systems, Machine Learning, and Cloud Computing.
              My previous internship experience at Ernst & Young, LiveWires, and EAI has allowed me to apply AI,
              business development, and software engineering principles to real-world challenges.
            </p>
            <p className="text-gray-300">
              I'm constantly learning and exploring new technologies to stay at the forefront of innovation in the tech industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-black-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-3">Education</h4>
              <p className="text-gray-300">B.Tech in Artificial Intelligence and Data Science</p>
            </div>
            <div className="bg-black-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-3">Experience</h4>
              <p className="text-gray-300">Internships at EY, LiveWires, and EAI</p>
            </div>
            <div className="bg-black-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-3">Projects</h4>
              <p className="text-gray-300">AI, ML, and Full-Stack Development</p>
            </div>
            <div className="bg-black-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-3">Interests</h4>
              <p className="text-gray-300">AI, Machine Learning, Cloud Computing</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "EAI",
      date: "Feb 2025 - March 2025",
      description: [
        "Developed and maintained dynamic web applications using PHP (MVC Framework).",
        "Designed, managed, and optimized backend systems using SQL databases.",
        "Implemented features for client-facing websites, ensuring responsiveness and functionality."
      ]
    },
    {
      title: "Summer Intern - SAP",
      company: "Ernst & Young",
      date: "Aug 2024 - Dec 2024",
      description: [
        "Developed a Supplier Portal using Java and React, improving supplier registration efficiency by 30%.",
        "Optimized database queries (PostgreSQL) to improve system performance by 20%.",
        "Built an automated API-based data processing pipeline, reducing manual effort by 25%."
      ]
    },
    {
      title: "Intern - Machine Learning",
      company: "LiveWires",
      date: "Sep 2023 - Jul 2023",
      description: [
        "Developed a Bank Fraud Detection model achieving 95% accuracy using machine learning algorithms.",
        "Implemented a real-time anomaly detection system, reducing false positives by 20%."
      ]
    },
    {
      title: "Academic Intern - Machine Learning",
      company: "Internshala",
      date: "Jul 2022",
      description: [
        "Gained practical experience in Python, TensorFlow, and ML algorithms.",
        "Built a predictive modeling project achieving 90% accuracy."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Work Experience</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row mb-12 relative ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2"></div>
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-purple-500"></div>
              </div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-black-100 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-purple-500 font-medium mb-2">{exp.company}</h4>
                  <p className="text-gray-400 mb-4">{exp.date}</p>
                  <ul className="list-disc list-inside text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="mb-1">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Education Section
const Education = () => {
  const education = [
    {
      school: "Knowledge Institute of Technology",
      degree: "B.Tech in Artificial Intelligence and Data Science",
      date: "2021-2025",
      score: "CGPA: 8.5"
    },
    {
      school: "SSV Higher Secondary School",
      degree: "Higher Secondary Certificate (HSC)",
      date: "2021",
      score: "90.5%"
    },
    {
      school: "SSV Higher Secondary School",
      degree: "Secondary School Leaving Certificate (SSLC)",
      date: "2019",
      score: "85.4%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Education</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black-100 p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-white mb-2">{edu.school}</h3>
              <p className="text-purple-500 font-medium mb-4">{edu.degree}</p>
              <div className="flex justify-between text-gray-400 mb-4">
                <span>{edu.date}</span>
                <span>{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      title: "AI Interviewer for Mock Practice",
      description: "Designed and developed an AI-based mock interview platform using RAG (Retrieval-Augmented Generation) and React.js, with an API-driven system for real-time job-specific interview simulation.",
      tags: ["React", "AI", "NLP"],
      link: "https://github.com/SopnaVijay"
    },
    {
      title: "Expo and Product Launch Platform",
      description: "Developed a website for exhibitors, product launches, and company expos with real-time engagement features, live streaming, interactive product demos, and AI-powered matchmaking.",
      tags: ["React", "Streaming", "Analytics"],
      link: "https://github.com/SopnaVijay"
    },
    {
      title: "Web Portal for Suppliers",
      description: "Developed a full-stack React and Node.js supplier portal, reducing onboarding time by 50%, with secure authentication and real-time status tracking.",
      tags: ["React", "Node.js", "Authentication"],
      link: "https://github.com/SopnaVijay"
    },
    {
      title: "Bank Fraud Detection Platform",
      description: "Showcased a cutting-edge Bank Fraud Detection System built using Machine Learning at our interactive Expo and Product Launch Platform, designed to identify fraudulent transactions in real-time.",
      tags: ["Python", "ML", "Data Analysis"],
      link: "https://github.com/SopnaVijay"
    },
    {
      title: "Automated Fire Detection System",
      description: "Designed and implemented a real-time AI-based fire detection system using YOLO and OpenCV, optimizing inference speed by 30% for faster alerts.",
      tags: ["Python", "YOLO", "OpenCV"],
      link: "https://github.com/SopnaVijay"
    },
    {
      title: "Earthquake Prediction Model",
      description: "Built a real-time data analysis and prediction model for earthquakes using Machine Learning, improving prediction accuracy by 15% compared to existing models.",
      tags: ["Python", "ML", "Data Analysis"],
      link: "https://github.com/SopnaVijay"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Projects</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black-100 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-800 flex items-center justify-center">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Contact Me</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
              I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="text-purple-500 mr-4" size={24} />
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-300">sopna10.tech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaPhone className="text-purple-500 mr-4" size={24} />
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-gray-300">+91-9489408720</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaMapMarkerAlt className="text-purple-500 mr-4" size={24} />
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-300">Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="flex mt-8 space-x-4">
              <a href="https://github.com/SopnaVijay" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sopna-vijay-a26232250/" target="_blank" rel="noopener noreferrer" className="bg-blue-700 hover:bg-blue-600 text-white p-3 rounded-full transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-black-200 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black-200 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-black-200 text-white border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-purple-500"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-black-200 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Sopna Vijay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Skills Section
const Skills = () => {
  const technicalSkills = [
    "Python", "Java", "C++", "JavaScript",
    "React.js", "Node.js", "Express.js",
    "MongoDB", "PostgreSQL", "MySQL",
    "TensorFlow", "PyTorch", "Scikit-learn",
    "Git", "Docker", "AWS", "Azure"
  ];

  const softSkills = [
    "Problem Solving", "Critical Thinking",
    "Communication", "Teamwork",
    "Leadership", "Time Management",
    "Adaptability", "Creativity"
  ];

  const hobbies = [
    "Reading", "Hiking", "Photography",
    "Chess", "Coding Challenges",
    "Music", "Travel"
  ];

  const coActivities = [
    "Student Council Member",
    "Hackathon Participant",
    "Tech Club Organizer",
    "Volunteer at Code for Good",
    "Open Source Contributor",
    "AI Research Assistant"
  ];

  const certifications = [
    "AWS Certified Developer",
    "Machine Learning Specialization (Coursera)",
    "Full-Stack Web Development (Udemy)",
    "Python for Data Science (IBM)",
    "TensorFlow Developer Certificate",
    "React.js Advanced Concepts"
  ];

  return (
    <section id="skills" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Skills & Activities</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-black-100 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <span key={index} className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black-100 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-white mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <span key={index} className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-black-100 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-white mb-4">Certifications</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black-100 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-white mb-4">Hobbies & Interests</h3>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby, index) => (
                <span key={index} className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm">
                  {hobby}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-black-100 p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl font-bold text-white mb-4">Co-curricular Activities</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {coActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="bg-primary text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
