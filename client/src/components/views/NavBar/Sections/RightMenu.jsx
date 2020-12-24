/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Nav>
        <Nav.Link href="/login">Signin</Nav.Link>
        <Nav.Link href="/register">Signup</Nav.Link>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
      </Nav>
    );
  }
}

export default withRouter(RightMenu);
