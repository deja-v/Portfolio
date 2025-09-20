import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import "./styles.css";
import { FaXTwitter } from "react-icons/fa6";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks: { Icon: React.ComponentType<any>; href: string; label: string }[] = [
    { Icon: Github, href: "https://github.com/deja-v", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com/in/devang-jain-912ab6229", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:devangj870@gmail.com", label: "Email" },
    { Icon: FaXTwitter, href: "https://x.com/jeepsdev", label: "X (Twitter)" },
  ];

  return (
    <section id="hero" className="hero-section">
      <div className={`hero-content ${isVisible ? "fade-in" : ""}`}>
        <div className="hero-text">
          <h1 className="hero-title">
            Hello, I'm <span className="hero-name">Devang</span>
          </h1>
          <p className="hero-subtitle">
            A creative developer focused on building beautiful, functional experiences that matter.
          </p>
        </div>

        <div className="hero-social" aria-hidden={false}>
          {socialLinks.map(({ Icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              className="social-link"
              aria-label={label}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="scroll-indicator bounce"
          aria-label="Scroll to about section"
          type="button"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;