import React from "react";

function GridCard(props) {
  return (
    <div
      style={{ padding: "15px" }}
      className="col col-12 col-sm-6 col-lg-4 col-xl-3"
    >
      <div className="card">
        <a href={`/movie/${props.movieId}`}>
          <img
            className="img-fluid"
            style={{ width: "100%", height: "320px" }}
            src={props.image}
            alt={props.title}
          />
        </a>
      </div>
    </div>
  );
}

export default GridCard;
