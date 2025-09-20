import React from "react";
import { Mail } from "lucide-react";
import "./styles.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-description">
            I'm always interested in new opportunities and meaningful projects. 
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>

          <a href="mailto:devangj870@gmail.com" className="contact-button">
            <Mail size={20} />
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
