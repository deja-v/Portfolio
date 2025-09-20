// Work.tsx
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import "./styles.css";

// import Badge from your TechBadges file
import { Badge } from "../TechBadge";

const Work: React.FC = () => {
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
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <div className="project-info">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-links">
                      <a
                        href={project.link}
                        className="project-link secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.github}
                        className="project-link secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((techName, techIndex) => (
                      <Badge
                        key={`${project.title}-${techName}-${techIndex}`}
                        techName={techName}
                        variant="solid"
                        size="sm"
                        showName={true}
                        className="project-tech-badge"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
