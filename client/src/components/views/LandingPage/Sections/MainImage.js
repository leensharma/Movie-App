import React from "react";
import { Link } from "react-router-dom";

function MainImage(props) {
  return (
    <Link to={`/movie/${props.movieId}`}>
      <div
        style={{
          backgroundImage: `url("${props.image}")`,
          height: "600px",
          backgroundSize: "cover,cover",
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
