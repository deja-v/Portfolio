// components/Experience.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./styles.css";
import ExperienceCard from "./ExpirienceCard";

const Experience: React.FC = () => {
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

  const experiences = [
    // {
    //   title: "Senior Frontend Developer",
    //   company: "Tech Innovators Inc.",
    //   location: "San Francisco, CA",
    //   duration: "Jan 2023 - Present",
    //   type: "Full-time",
    //   description: [
    //     "Led frontend development for a SaaS platform serving 100K+ users, resulting in 40% improved user engagement",
    //     "Architected and implemented a design system using React and TypeScript, reducing development time by 30%",
    //     "Mentored junior developers and conducted code reviews, improving team code quality and knowledge sharing",
    //     "Collaborated with product and design teams to deliver pixel-perfect, responsive user interfaces"
    //   ],
    //   technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
    //   website: "https://techinnovators.com"
    // },
    // {
    //   title: "Frontend Developer",
    //   company: "Digital Solutions LLC",
    //   location: "Remote",
    //   duration: "Mar 2021 - Dec 2022",
    //   type: "Full-time",
    //   description: [
    //     "Developed and maintained multiple client websites and web applications using modern JavaScript frameworks",
    //     "Implemented responsive designs and optimized web performance, achieving 95+ Google Lighthouse scores",
    //     "Integrated third-party APIs and services to enhance application functionality",
    //     "Participated in agile development processes and daily standups with cross-functional teams"
    //   ],
    //   technologies: ["React", "Vue.js", "JavaScript", "SCSS", "Node.js"],
    //   website: "https://digitalsolutions.com"
    // },
    {
      title: "Software Product Engineer",
      company: "Trianz",
      location: "Hyderabad, India",
      duration: "Jan 2025 - present",
      type: "Full-time",
      description: [
        "Contributed to the Avrio Data-to-AI SaaS platform, which was later rebranded into Concierto Insights and Agentic AI",
        "Built a reusable React + TypeScript component library with 10+ components, leveraging Material UI to ensure consistent UI patterns and improve development speed by 25%",
        "Led frontend development of the Agent Marketplace, building interfaces for agents handling use cases like data analysis, email processing, data reconciliation, and data quality",
        "Revamped UI design for 3 modules, improving usability and visual consistency with the platform's design system",
        "Improved responsiveness across 4 major breakpoints and optimized layouts for tablet, and desktop",
        "Collaborated with backend engineers on API design, integrations and gained exposure to building APIs with Python and FastAPI",
      ],
      technologies: [
        "React",
        "JavaScript",
        "TypeScript",
        "SCSS",
        "Material UI",
        "Python",
        "FastAPI",
        "Git",
      ],
      website: "https://www.concierto.cloud/insights-agentic-ai",
    },
    // {
    //   title: "Open Source Contributor (Hacktoberfest)",
    //   company: "Hacktoberfest",
    //   location: "Remote",
    //   duration: "Oct 2022",
    //   type: "Volunteer",
    //   description: [
    //     "Contributed to C++ algorithm and data-structure repositories during Hacktoberfest, focusing on problem solutions, bug fixes, and documentation improvements",
    //     "Authored 8+ pull requests and had 4+ merged, adding optimized implementations for classic DSA problems and clearer code comments",
    //     "Earned Hacktoberfest swag and GitHub contributor badges for meeting contribution criteria",
    //   ],
    //   technologies: ["C++", "Algorithms", "Data Structures", "Git", "GitHub"],
    //   website: "https://github.com/your-username",
    // },
  ];

  return (
    <motion.section
      id="experience"
      className="experience-section"
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
          Work Experience
        </motion.h2>

        <motion.div
          className="experience-cards"
          variants={containerVariants}
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
