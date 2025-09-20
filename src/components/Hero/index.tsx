import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  const socialLinks: { Icon: React.ComponentType<any>; href: string; label: string }[] = [
    { Icon: Github, href: "https://github.com/deja-v", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com/in/devang-jain-912ab6229", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:devangj870@gmail.com", label: "Email" },
    { Icon: FaXTwitter, href: "https://x.com/jeepsdev", label: "X (Twitter)" },
  ];

  return (
    <motion.section
      id="hero"
      className="hero-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={`hero-content ${isVisible ? "fade-in" : ""}`}>
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello, I'm <motion.span
              className="hero-name"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Devang
            </motion.span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A creative developer focused on building beautiful, functional experiences that matter.
          </motion.p>
        </motion.div>

        <motion.div
          className="hero-social"
          aria-hidden={false}
          variants={containerVariants}
        >
          {socialLinks.map(({ Icon, href, label }, index) => (
            <motion.a
              key={index}
              href={href}
              className="social-link"
              aria-label={label}
              title={label}
              target="_blank"
              rel="noopener noreferrer"
              variants={socialVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          onClick={() => scrollToSection("about")}
          className="scroll-indicator bounce"
          aria-label="Scroll to about section"
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronDown size={24} />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;