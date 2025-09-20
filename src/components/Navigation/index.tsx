import React from "react";
import "./styles.css";

interface Props {
  scrollToSection: (sectionId: string) => void;
  currentSection: string;
}

const Navigation: React.FC<Props> = ({ scrollToSection, currentSection }) => {
  const navItems = ['About', 'Experience', 'Work', 'Contact'];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          <div className="nav-logo">Portfolio</div>
          <div className="nav-menu">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link ${
                  currentSection === item.toLowerCase() ? "active" : ""
                }`}
                type="button"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
