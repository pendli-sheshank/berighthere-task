import React from "react";
import { Container } from "react-bootstrap";
import ReactSlick from "../Carousel";
import India from "../India";
import Smart from "../Smart";
import "../Header/index.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-section">
          <h1 className="heading-content first">
            Workspaces <br /> from the future,
          </h1>
          <h1 className="heading-content second">
            Closer than <br /> You think.
          </h1>
          <Container>
            <form className="form-container">
              <select name="Looking For" id="cars">
                <option value="option-1">Looking For</option>
                <option value="option-2">Meeting Room</option>
                <option value="option-3">Training Room</option>
                <option value="option-4">Virtual Office</option>
              </select>
              <input
                className="input-field"
                type="text"
                placeholder="Location"
              />
              <button className="searchBtn">Search for</button>
            </form>
          </Container>
        </div>
      </div>
      <Container className="envi">
        <Container className="workspace">
          <h1 className="custom-heading">CUSTOMISED WORK ENVIRONMENTS</h1>
          <h3 className="cutom-subheading">
            Workspaces that offer convenience and suit your needs
          </h3>
          <ReactSlick />
        </Container>
      </Container>
      <India />
      <Smart />
    </>
  );
};

export default Header;
