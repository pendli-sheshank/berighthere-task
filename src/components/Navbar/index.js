import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../Navbar/index.css";

const Navigationbar = () => {
  return (
    <>
      <div className="nav-container">
        <Navbar className="navbar" bg="light" expand="lg">
          <Container className="nav-tabs">
            <Navbar.Brand href="#home">
              <img
                alt="beright-logo"
                className="logo"
                src="https://berighthere.com/assests/img/newlandingpage/banner.png"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navend">
                <Nav.Link href="#home">
                  HOME <span>|</span>{" "}
                </Nav.Link>
                <Nav.Link href="#ourspaces">
                  OUR SPACES <span>|</span>{" "}
                </Nav.Link>
                <Nav.Link href="#services">
                  SERVICES <span>|</span>{" "}
                </Nav.Link>
                <Nav.Link href="#aboutus">
                  ABOUT US <span>|</span>{" "}
                </Nav.Link>
                <Nav.Link href="#partnerwithus">PARTNER WITH US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="lap">
        <Navbar.Brand href="#home">
          <img
            alt="beright-logo"
            className="logo"
            src="https://berighthere.com/assests/img/newlandingpage/banner.png"
          />
        </Navbar.Brand>
        <div className="lap-font">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              HOME <span>|</span>{" "}
            </Nav.Link>
            <Nav.Link href="#ourspaces">
              OUR SPACES <span>|</span>{" "}
            </Nav.Link>
            <Nav.Link href="#services">
              SERVICES <span>|</span>{" "}
            </Nav.Link>
            <Nav.Link href="#aboutus">
              ABOUT US <span>|</span>{" "}
            </Nav.Link>
            <Nav.Link href="#partnerwithus">PARTNER WITH US</Nav.Link>
          </Nav>
        </div>
      </div>
    </>
  );
};

export default Navigationbar;
