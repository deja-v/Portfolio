import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail } from "lucide-react";
import "./styles.css";

const Contact: React.FC = () => {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
        >
          <motion.h2
            className="contact-title"
            variants={itemVariants}
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            className="contact-description"
            variants={itemVariants}
          >
            I'm always interested in new opportunities and meaningful projects.
            Whether you have a question or just want to say hi, feel free to reach out.
          </motion.p>

          <motion.a
            href="mailto:devangj870@gmail.com"
            className="contact-button"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
