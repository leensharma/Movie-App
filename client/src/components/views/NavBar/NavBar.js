import React from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import "./Sections/Navbar.css";
import { Nav, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">
          <i
            style={{ fontSize: "30px", color: "#f4c10f" }}
            className="fas fa-video"
          ></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LeftMenu />
          </Nav>
          <RightMenu />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
