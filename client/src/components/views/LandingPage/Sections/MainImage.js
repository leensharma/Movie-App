import React from "react";
import { Typography, Row, Button } from "antd";
const { Title } = Typography;

function MainImage(props) {
  return (
    <div>
      <center>
        <div
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0)39%, rgba(0,0,0,0),rgba(0,0,0,0.65)100%),
      url('${props.image}'),#1c1c1c`,
            height: "600px",
            backgroundSize: "100%",
            backgroundPosition: "center",
            width: "85%",
            position: "relative",
          }}
        ></div>
      </center>

      <div>
        <div
          style={{
            position: "absolute",
            maxWidth: "500px",
            bottom: "2rem",
            marginLeft: "8rem",
          }}
        >
          <Title style={{ color: "white" }} level={2}>
            {props.title}
          </Title>
          <p style={{ color: "white", fontSize: "1rem" }}>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
