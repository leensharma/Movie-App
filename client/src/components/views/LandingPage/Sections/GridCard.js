import React from "react";
import { Col } from "react-bootstrap";

function GridCard(props) {
  return (
    <Col
      style={{ padding: "15px" }}
      className="col-12 col-sm-6 col-lg-4 col-xl-3"
    >
      <div className="card">
        <a href={`/movie/${props.movieId}`}>
          <img
            className="img-fluid"
            style={{ width: "100%", height: "320px", position: "relative" }}
            src={props.image}
            alt="Grid Movie Img"
          />
        </a>
      </div>
    </Col>
  );
}

export default GridCard;
