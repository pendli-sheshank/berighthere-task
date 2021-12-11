import React from "react";
import { Container } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import "../Footer/index.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <img
        className="footer-logo"
        src="https://berighthere.com/assests/img/newlandingpage/bhr.png"
        alt="footer-logo"
      />
      <Container className="footer">
        <p className="address">
          Singapore Office
          <br /> 67 UBI Crescent
          <br /> #04-01, Techniques Centre
          <br /> Singapore
        </p>
        <p className="address">
          India Office <br />
          #7, || Floor Karunaa Conquest IT Park, Ambattur
          <br /> Chennai - 600058
        </p>

        <div className="email-container">
          <p className="address">
            Email : support@berighthere.com <br />
            Phone : 044 43031007
          </p>
          <div className="followus-container">
            <p className="address">Follow us</p>
            <ul className="list-container">
              <li>
                <FaFacebookSquare />
              </li>
              <li>
                <FaTwitterSquare />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaInstagramSquare />
              </li>
            </ul>
          </div>
          <p className="copyright">
            COPYRIGHT @2021 BeRightHere.com All Rights Reserved
          </p>
          <ul className="footer-policies">
            <li className="list">Company</li>
            <li className="list">Privacy</li>
            <li className="list">Terms</li>
            <li className="list">Cookie</li>
            <li className="list">Policy</li>
            <li className="list">Information</li>
          </ul>
        </div>
      </Container>
      <p className="version">V1.5.0</p>
    </div>
  );
};

export default Footer;
