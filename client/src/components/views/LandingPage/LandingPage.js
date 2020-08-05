import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_URL } from "../../Config";
import { Typography, Row } from "antd";
import MainImage from "./Sections/MainImage";
import GridCard from "./Sections/GridCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
const { Title } = Typography;

function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [CurrentPage, setCurrentPage] = useState([]);
  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endpoint);
  }, []);

  const fetchMovies = (path) => {
    fetch(path)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setMovies([...Movies, ...response.results]);
        setCurrentPage(response.page);
      });
  };

  const handleClick = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
      CurrentPage + 1
    }`;
    fetchMovies(endpoint);
  };

  return (
    <div style={{ width: "100%", margin: 0 }}>
      {Movies[0] && (
        <MainImage
          image={`${IMAGE_URL}w1280${Movies[0].backdrop_path}`}
          title={`${Movies[0].original_title}`}
          text={`${Movies[0].overview}`}
        />
      )}

      {/* {Body} */}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <h2 class="font-weight-bold">Movies By Latest</h2>
        <hr />

        {/* {Movie Grid Cards} */}

        <Row gutter={[16, 16]}>
          {/* React Fragment helps in returning multiple elements. The other alternative is to use a html element like div to wrap them. 
        But using extra html node can cause some semantic issues. */}
          {Movies &&
            Movies.map((movie, index) => (
              <React.Fragment key={index}>
                <GridCard
                  image={
                    movie.poster_path && `${IMAGE_URL}w500${movie.poster_path}`
                  }
                  movieId={movie.id}
                />
              </React.Fragment>
            ))}
        </Row>

        {/* Load More Button */}
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="secondary" onClick={handleClick}>
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;