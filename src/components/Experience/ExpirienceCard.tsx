import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "../TechBadge";
import "./styles.css";

const ExperienceCard: React.FC<{ experience: any }> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const expandIconVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 }
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      className={`experience-card ${isExpanded ? "expanded" : ""}`}
      variants={cardVariants}
      whileHover="hover"
    >
      <motion.div
        className="card-header"
        onClick={toggleExpanded}
        whileTap={{ scale: 0.98 }}
      >
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

        <motion.div
          className="expand-icon"
          variants={expandIconVariants}
          animate={isExpanded ? "expanded" : "collapsed"}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="card-content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="job-description">
              <ul className="responsibilities-list">
                {experience.description.map((responsibility: any, index: any) => (
                  <motion.li
                    key={index}
                    className="responsibility-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {responsibility}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="technologies-section">
              <h4 className="tech-heading">Technologies Used:</h4>
              <div className="tech-tags">
                {experience.technologies.map((techName: any) => (
                  <Badge
                    techName={techName}
                    size="sm"
                    showName={true}
                    variant="solid"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExperienceCard;