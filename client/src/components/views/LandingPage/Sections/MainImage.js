import React from "react";
import { Link } from "react-router-dom";

function MainImage(props) {
  return (
    <Link to={`/movie/${props.movieId}`}>
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0)
    39%,rgba(0,0,0,0)
    41%,rgba(0,0,0,0.65)
    100%),
    url('${props.image}'), #1c1c1c`,
          height: "600px",
          backgroundSize: "100%, cover",
          backgroundPosition: "center, center",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            maxWidth: "500px",
            bottom: "2rem",
            marginLeft: "2rem",
          }}
        >
          <h3 style={{ color: "#ffffff" }}>{props.title}</h3>
          <p style={{ color: "#ffffff", fontSize: "1rem" }}>{props.text}</p>
        </div>
      </div>
    </Link>
  );
}
export default MainImage;
