import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <p>
            <a href="mailto:richard@richardespy.com">richard@richardespy.com</a>
          </p>
        </div>
        <div className="footer-section">
          <p>
            <a
              href="https://www.linkedin.com/in/richardespy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |
            <a
              href="https://www.instagram.com/richardespy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Instagram
            </a>
          </p>
        </div>
        <div className="footer-section copyright">
          <p>&copy; 2024 Richard Espy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
