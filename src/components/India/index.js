import React from "react";
import { Container } from "react-bootstrap";
import "../India/index.css";

const India = () => {
  return (
    <Container>
      <div className="nation-container">
        <Container className="india-container">
          <h1 className="heading">NATIONWIDE PRESENCE</h1>
          <h3 className="subheading">
            Plug and play from over 300 cities spread across India.
          </h3>
          <p className="para">
            We deliver the convenience of seamless office environments that puts
            you and your team’s priorities first. Whether you’re in a major city
            or a town, BRH brings superior stability, security and
            infrastructure right where you are.
            <br />
            Every single workspace created by BRH conforms to stringent quality
            parameters that leading corporate businesses require. Whether you
            are a business owner, lead a large corporation, an entrepreneur or
            an employee, we offer convenient workspaces that help you succeed.
          </p>
        </Container>
        <img
          className="india-img"
          alt="india"
          src="https://berighthere.com/static/media/India.feb9d54f.png"
        />
      </div>
    </Container>
  );
};

export default India;
