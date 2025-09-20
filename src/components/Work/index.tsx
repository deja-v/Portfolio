// Work.tsx
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import "./styles.css";

// import Badge from your TechBadges file
import { Badge } from "../TechBadge";

const Work: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 }
    }
  };

  const projects = [
    {
      title: "Shortly (Custom URL Shortener)",
      description:
        "An URL shortener with a React frontend and Node/Express backend. Features link shortening, history tracking, and a responsive UI; built to be easy to run locally and extend.",
      tech: ["React", "JavaScript", "Node.js", "ExpressJs", "MongoDB", "SCSS", "Material UI"],
      link: "https://shortly-jade-tau.vercel.app",
      github: "https://github.com/deja-v/shortly-fullstack",
    },
    {
      title: "GitWise (AI Git Automator)",
      description:
        "A CLI tool that automates common Git workflows — AI-powered commit messages, smart branch creation and repository analysis — with Google Gemini integration for smarter suggestions.",
      tech: ["TypeScript", "Node.js", "npm", "Google Gemini API", "CLI"],
      link: "https://www.npmjs.com/package/gitwise",
      github: "https://github.com/deja-v/gitwise",
    },
    {
      title: "Memento (A personal journal)",
      description:
        "A personal journal app to store memorable moments with photos, descriptions, and dates — users can create, edit, and browse entries to preserve memories over time.",
      tech: ["TypeScript", "React", "Node.js", "ExpressJs", "MongoDB"],
      link: "https://memento-pied.vercel.app/login",
      github: "https://github.com/deja-v/Memento",
    },
  ];

  return (
    <motion.section
      id="work"
      className="work-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <motion.h2
          className="section-title"
          variants={itemVariants}
        >
          Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="project-content">
                <div className="project-info">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-links">
                      <motion.a
                        href={project.link}
                        className="project-link secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        className="project-link secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((techName, techIndex) => (
                      <motion.div
                        key={`${project.title}-${techName}-${techIndex}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                      >
                        <Badge
                          techName={techName}
                          variant="solid"
                          size="sm"
                          showName={true}
                          className="project-tech-badge"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Work;
