import React from "react";
import Nav from "react-bootstrap/Nav";

function LeftMenu(props) {
  return (
    <div>
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/favourite">Favourite</Nav.Link>
      </Nav>
    </div>
  );
}

export default LeftMenu;
