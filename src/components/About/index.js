import React from "react";
import {  Container } from "react-bootstrap";
import "../About/index.css";

const About = () => {
  return (
    <div className="about-section">
      <Container className="aboutus">
        <h1 className="about-heading">ABOUT US</h1>
        <h3 className="about-subheading">
          The preferred destination for productivity and convenience right here,
          right now.
        </h3>
        <p className="about-content">
          The world around us today is changing. Over the past year, corporates
          and startups across the globe had to embark on an accelerated digital
          transformation journey. Overnight, millions of employees and
          passionate professionals had to switch to a remote working model.
        </p>
        <button className="button">Read more</button>
      </Container>

      <img
        className="about-image"
        alt="nav-logo"
        src="https://berighthere.com/static/media/know.c5a8b88b.png"
      />
    </div>
  );
};

export default About;
