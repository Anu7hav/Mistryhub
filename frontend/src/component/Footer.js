import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" >
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: meanubhavkr@gmail.com</p>
          <p>Phone: +91 9279004758</p>
          <p>Address: BIT Mesra Ranchi</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer-address">
          <h3>Visit Us</h3>

          <iframe
            title="Map"
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14645.333271719775!2d85.42144690493717!3d23.412323607930198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4fb53f0c27be7%3A0x66180c1cf3c5e704!2sBirla%20Institute%20of%20Technology%20-%20Mesra!5e0!3m2!1sen!2sin!4v1775225434399!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <p className="made-with-love">Made by Anubhav</p>
    </footer>
  );
};

export default Footer;
