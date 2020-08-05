import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_URL } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import { Descriptions, Button, Row } from "antd";
import GridCard from "../LandingPage/Sections/GridCard";
import Favourite from "./Sections/Favourite";

function MovieDetailsPage(props) {
  const movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);
  const [Cast, setCast] = useState([]);
  const [ActorToggle, setActorToggle] = useState(false);
  useEffect(() => {
    fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovie(response);
      });

    fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setCast(response.cast);
      });
  }, []);

  const handleClick = () => {
    setActorToggle(!ActorToggle);
  };

  return (
    <div>
      {/* Main Image */}
      {Movie && (
        <MainImage
          image={`${IMAGE_URL}w1280${Movie.backdrop_path}`}
          title={`${Movie.original_title}`}
          text={`${Movie.overview}`}
        />
      )}

      {/* {Body} */}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {/*  How to use localStorage with React
         https://programmingwithmosh.com/react/localstorage-react/  */}

          <Favourite
            userFrom={localStorage.getItem("userId")}
            movieId={movieId}
            movieInfo={Movie}
          />
        </div>

        {/* Movie Detail Table */}
        <Descriptions title="Movie Info" bordered>
          <Descriptions.item label="Title">
            {Movie.original_title}
          </Descriptions.item>
          <Descriptions.item label="release_date">
            {Movie.release_date}
          </Descriptions.item>
          <Descriptions.item label="revenue">{Movie.revenue}</Descriptions.item>
          <Descriptions.item label="runtime">{Movie.runtime}</Descriptions.item>
          <Descriptions.item label="vote_average">
            {Movie.vote_average}
          </Descriptions.item>
          <Descriptions.item label="vote_count">
            {Movie.vote_count}
          </Descriptions.item>
          <Descriptions.item label="status">{Movie.status}</Descriptions.item>
          <Descriptions.item label="popularity">
            {Movie.popularity}
          </Descriptions.item>
        </Descriptions>

        <br />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleClick}>Toggle Actor View</Button>
        </div>

        <br />
        <br />

        {/*Grid Card for Crews*/}
        {ActorToggle && (
          <Row gutter={[16, 16]}>
            {Cast &&
              Cast.map((cast, index) => (
                <React.Fragment key={index}>
                  {cast.profile_path && (
                    <GridCard
                      actor
                      image={`${IMAGE_URL}w500${cast.profile_path}`}
                    />
                  )}
                </React.Fragment>
              ))}
          </Row>
        )}
      </div>
    </div>
  );
}

export default MovieDetailsPage;
