import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_URL } from "../../Config";
import MainImage from "./Sections/MainImage.jsx";
import GridCard from "./Sections/GridCard.jsx";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function LandingPage() {
  const [Movies, setMovies] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [genres, setGenres] = useState([]);
  const [genreId, setGenreId] = useState([]);

  useEffect(() => {
    fetch(
      `${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setNowPlaying(response.results);
      });

    const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetchMovies(endPoint);

    fetch(`${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setGenres(response.genres);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovies = (path) => {
    fetch(path)
      .then((response) => response.json())
      .then((response) => {
        //console.log(response);
        // console.log("Movies", ...Movies);
        // console.log("response", ...response.results);
        setMovies([...Movies, ...response.results]);
        setCurrentPage(response.page);
      });
  };
  const fetchMovieByGenre = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setCurrentPage(response.page);
        setMovies(response.results);
        console.log(Movies);
      });
  };

  const handleClick = () => {
    const endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&page=${
      currentPage + 1
    }&with_genres=${genreId}`;
    fetchMovies(endpoint);
    console.log(Movies);
  };

  const handleGenreClick = (genre_id) => {
    const endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=${genre_id}`;

    fetchMovieByGenre(endpoint);
  };

  const genreList = genres.map((item, index) => {
    return (
      <li className="list-inline-item" key={index}>
        <button
          type="button"
          className="btn btn-outline-info btn-outline-primary"
          onClick={() => {
            setGenreId(item.id);
            handleGenreClick(item.id);
          }}
        >
          {item.name}
        </button>
      </li>
    );
  });

  return (
    <div>
      <div>
        <RBCarousel
          autoplay={true}
          pauseOnVisibility={true}
          slidesshowSpeed={5000}
          version={4}
          indicators={false}
        >
          {nowPlaying &&
            nowPlaying.slice(0, 5).map((item, index) => (
              <React.Fragment key={index}>
                <MainImage
                  image={
                    item.backdrop_path &&
                    `${IMAGE_URL}w1280${item.backdrop_path}`
                  }
                  title={`${item.original_title}`}
                  text={`${item.overview}`}
                  movieId={item.id}
                />
              </React.Fragment>
            ))}
        </RBCarousel>
      </div>

      {/* {Body} */}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div className="col">
          <ul className="list-inline">{genreList}</ul>
        </div>
      </div>
      <hr style={{ borderTop: "1px solid #5a606b" }}></hr>

      <div style={{ width: "85%", margin: "1rem auto" }}>
        {/* <h2 className="font-weight-bold">Movies By Latest</h2>*/}

        {/* {Movie Grid Cards} */}

        <div>
          <div className="row mt-3 ">
            {/* React Fragment helps in returning multiple elements. The other alternative is to use a html element like div to wrap them. 
        But using extra html node can cause some semantic issues. */}

            {Movies &&
              Movies.map((movie, index) => (
                <React.Fragment key={index}>
                  {movie.poster_path && movie.backdrop_path && (
                    <GridCard
                      image={`${IMAGE_URL}w500${movie.poster_path}`}
                      movieId={movie.id}
                      title={movie.title}
                    />
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>

        {/* Load More Button */}
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="button"
            className="btn btn-outline-info btn-outline-primary"
            onClick={handleClick}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
