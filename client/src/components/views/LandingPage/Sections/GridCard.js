import React from "react";
import { Col } from "antd";

function GridCard(props) {
  if (props.actor) {
    return (
      <Col lg={6} md={8} sm={24}>
        <div style={{ position: "relative" }}>
          <img
            style={{ width: "100%", height: "320px" }}
            src={props.image}
            alt="Grid Movie Img"
          />
        </div>
      </Col>
    );
  } else {
    return (
      <Col lg={6} md={8} sm={24}>
        <div style={{ position: "relative" }}>
          <a href={`/movie/${props.movieId}`}>
            <img
              style={{ width: "100%", height: "320px" }}
              src={props.image}
              alt="Grid Movie Img"
            />
          </a>
        </div>
      </Col>
    );
  }
}

export default GridCard;
