import React from "react";

function MainImage(props) {
  return (
    <div>
      <div
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0)
            39%,rgba(0,0,0,0)
            41%,rgba(0,0,0,0.65)
            100%),#1c1c1c`,
          width: "100%",
          position: "relative",
        }}
      >
        <a href={`/movie/${props.movieId}`}>
          <img
            className="responsive"
            style={{ height: "100%", width: "100%" }}
            src={props.image}
            alt={props.title}
          />
        </a>
      </div>

      <div
        style={{
          position: "absolute",
          maxWidth: "500px",
          bottom: "2rem",
          marginLeft: "8rem",
        }}
      >
        <h3 style={{ color: "#ffffff" }}>{props.title}</h3>
        <p style={{ color: "#ffffff", fontSize: "1rem" }}>{props.text}</p>
      </div>
    </div>
  );
}
export default MainImage;
