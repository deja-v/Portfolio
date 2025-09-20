// components/ExperienceCard.js
import React, { useState } from "react";
import { ChevronDown, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "../TechBadge"; 
import "./styles.css";

const ExperienceCard: React.FC<{ experience: any }> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`experience-card ${isExpanded ? "expanded" : ""}`}>
      <div className="card-header" onClick={toggleExpanded}>
        <div className="header-content">
          <div className="title-section">
            <h3 className="job-title">{experience.title}</h3>
            <div className="company-section">
              <a
                href={experience.website}
                className="company-name"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                {experience.company}
                <ExternalLink size={14} className="external-link-icon" />
              </a>
              <span className="job-type">{experience.type}</span>
            </div>
          </div>

          <div className="meta-info">
            <div className="duration">
              <Calendar size={16} />
              <span>{experience.duration}</span>
            </div>
            <div className="location">
              <MapPin size={16} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        <div className="expand-icon">
          <ChevronDown size={20} />
        </div>
      </div>

      <div className="card-content">
        <div className="job-description">
          <ul className="responsibilities-list">
            {experience.description.map((responsibility: any, index: any) => (
              <li key={index} className="responsibility-item">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>

        <div className="technologies-section">
          <h4 className="tech-heading">Technologies Used:</h4>
          <div className="tech-tags">
            {experience.technologies.map((techName: any, index: any) => (
              <Badge
                key={index}
                techName={techName}
                size="sm"
                showName={true}
                variant="solid"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;