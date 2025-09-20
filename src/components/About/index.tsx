import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "../TechBadge";
import ProfilePic from "../../assets/images.jfif"; 
import "./styles.css";

const About: React.FC = () => {
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
      transition: { duration: 0.5 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "ExpressJs",
    "Python",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "FastAPI",
  ];

  return (
    <motion.section
      id="about"
      className="about-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <motion.h2
          className="about-title"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-grid"
          variants={containerVariants}
        >
          <motion.div
            className="about-content"
            variants={itemVariants}
          >
            <motion.div
              className="about-text"
              variants={itemVariants}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                I'm a passionate frontend developer on a journey to become a
                full-stack engineer, with a strong focus on building clean,
                functional, and user-friendly applications. Having worked with
                modern tools like React, Node.js, MongoDB, and FastAPI, I enjoy
                turning ideas into real products and constantly upskilling
                myself along the way.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Beyond coding, I love exploring new technologies, sharing my
                progress with the developer community, and working toward
                freelancing and remote opportunities. For me, consistency and
                curiosity fuel growth.
              </motion.p>
            </motion.div>

            <motion.div
              className="tech-section"
              variants={itemVariants}
            >
              <motion.h3
                className="tech-title"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Technologies I work with:
              </motion.h3>
              <motion.div
                className="tech-grid"
                variants={containerVariants}
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={`about-tech-${tech}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                  >
                    <Badge
                      techName={tech}
                      size="md"
                      showName={true}
                      variant="solid"
                      className="about-tech-badge"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="about-image"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="image-container">
              <div className="image-placeholder">
                <img src={ProfilePic} alt="" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
