import React from "react";
import "./styles.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {currentYear} DJ's Portfolio. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
