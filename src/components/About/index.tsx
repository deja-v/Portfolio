import React from "react";
import { Badge } from "../TechBadge";
import ProfilePic from "../../assets/images.jfif"; // Ensure you have a profile picture in this path
import "./styles.css";

const About: React.FC = () => {
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
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <div className="about-grid">
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate frontend developer on a journey to become a
                full-stack engineer, with a strong focus on building clean,
                functional, and user-friendly applications. Having worked with
                modern tools like React, Node.js, MongoDB, and FastAPI, I enjoy
                turning ideas into real products and constantly upskilling
                myself along the way.
              </p>
              <p>
                Beyond coding, I love exploring new technologies, sharing my
                progress with the developer community, and working toward
                freelancing and remote opportunities. For me, consistency and
                curiosity fuel growth.
              </p>
            </div>

            <div className="tech-section">
              <h3 className="tech-title">Technologies I work with:</h3>
              <div className="tech-grid">
                {technologies.map((tech, index) => (
                  <Badge
                    key={`about-tech-${tech}-${index}`}
                    techName={tech}
                    size="md"
                    showName={true}
                    variant="solid"
                    className="about-tech-badge"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <div className="image-placeholder">
                <img src={ProfilePic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
