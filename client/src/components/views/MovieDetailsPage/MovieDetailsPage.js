import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import { API_URL, API_KEY, IMAGE_URL } from "../../Config";
import MainImage from "../LandingPage/Sections/MainImage";
import Favourite from "./Sections/Favourite";
import ReactStars from "react-rating-stars-component";

function MovieDetailsPage(props) {
  let genres = [];
  const movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState([]);
  const [Cast, setCast] = useState([]);
  const [SimilarMovies, setSimilarMovies] = useState([]);

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

    fetch(`${API_URL}movie/${movieId}/videos?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setVideo(response.results[0]);
      });

    fetch(
      `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en_US`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setSimilarMovies(response.results);
      });
  }, [movieId]);

  genres = Movie.genres;

  const MoviePalyerModal = (props) => {
    const youtubeUrl = "https://www.youtube.com/watch?v=";
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ color: "#000000", fontWeight: "bolder" }}
          >
            {Movie.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#000000" }}>
          <ReactPlayer
            className="container-fluid"
            url={youtubeUrl + video.key}
            playing
            width="100%"
          ></ReactPlayer>
        </Modal.Body>
      </Modal>
    );
  };
  let genresList;
  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <li className="list-inline-item" key={i}>
          <button type="button" className="btn btn-outline-info">
            {g.name}
          </button>
        </li>
      );
    });
  }

  const castList = Cast.slice(0, 4).map((c, i) => {
    return (
      <React.Fragment key={i}>
        {c.profile_path && (
          <div className="col-md-3 text-center">
            <div>
              <img
                className="img-fluid rounded-circle mx-auto d-block"
                src={`${IMAGE_URL}w200/${c.profile_path}`}
                alt={c.name}
              ></img>
              <p className="font-weight-bold text-center">{c.name}</p>
              <p
                className="font-weight-light text-center"
                style={{ color: "#5a606b" }}
              >
                {c.character}
              </p>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  });

  const similarMovieList = SimilarMovies.slice(0, 4).map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item.backdrop_path && (
          <div className="col-md-3 col-sm-6">
            <div className="card">
              <a href={`/movie/${item.id}`}>
                <img
                  className="img-fluid"
                  src={`${IMAGE_URL}original/${item.poster_path}`}
                  alt={item.title}
                ></img>
              </a>
            </div>
            <div className="mt-3">
              <p style={{ fontWeight: "bolder" }}>{item.title}</p>
              <p>Rated: {item.vote_average}</p>
              <ReactStars
                count={item.vote_average}
                size={20}
                color={"#f4c10f"}
              ></ReactStars>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  });

  return (
    <div>
      {/* Main Image */}
      <div>
        <MoviePalyerModal
          show={isOpen}
          onHide={() => {
            setIsOpen(false);
          }}
        ></MoviePalyerModal>

        {Movie && (
          <MainImage
            image={
              Movie.backdrop_path && `${IMAGE_URL}w1280${Movie.backdrop_path}`
            }
            title={`${Movie.original_title}`}
            text={`${Movie.overview}`}
            movieId={`${Movie.id}`}
          />
        )}
        <div>
          <div className="carousel-center">
            <i
              onClick={() => setIsOpen(true)}
              className="far fa-play-circle"
              style={{ fontSize: 95, color: "#f4c10f", cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </div>

      {/* {Body} */}

      <div style={{ width: "85%", margin: "1rem auto" }}>
        <div className="row-mt-3">
          <div className="col">
            <p style={{ color: "#5a606b", fontWeight: "bolder" }}>GENRE</p>
          </div>
        </div>
        <div className="row mt-3" style={{ margin: "1rem auto" }}>
          <div className="col">
            <ul className="list-inline">{genresList}</ul>
          </div>
        </div>
        <div
          className="mt-3"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          {/*  How to use localStorage with React
         https://programmingwithmosh.com/react/localstorage-react/  */}

          <Favourite
            userFrom={localStorage.getItem("userId")}
            movieId={movieId}
            movieInfo={Movie}
          />
        </div>

        {/*Movie Rating */}

        <div className="row-mt-3">
          <div className="col">
            <div className="text-center">
              <ReactStars
                count={Movie.vote_average}
                size={20}
                color={"#f4c10f"}
              ></ReactStars>
            </div>

            {/*Movie Detail */}
            <div className="mt-3">
              <p style={{ color: "#5a606b", fontWeight: "bolder" }}>OVERVIEW</p>
              {Movie.overview}
            </div>

            <br />
            <br />
            <div className="row mt-3">
              <div className="col-md-3">
                <p style={{ color: "#5a606b", fontWeight: "bolder" }}>
                  RELEASE DATE
                </p>
                <p style={{ color: "#f4c10f" }}>{Movie.release_date}</p>
              </div>
              <div className="col-md-3">
                <p style={{ color: "#5a606b", fontWeight: "bolder" }}>
                  RUN TIME
                </p>
                <p style={{ color: "#f4c10f" }}>{Movie.runtime} Minute</p>
              </div>
              <div className="col-md-3">
                <p style={{ color: "#5a606b", fontWeight: "bolder" }}>BUDGET</p>
                <p style={{ color: "#f4c10f" }}>{Movie.budget}</p>
              </div>
              <div className="col-md-3">
                <p style={{ color: "#5a606b", fontWeight: "bolder" }}>
                  HOMEPAGE
                </p>
                <p style={{ color: "#f4c10f" }}>{Movie.homepage}</p>
              </div>
            </div>
          </div>
        </div>

        {/*Cast */}

        <div className="row mt-3">
          <div className="col">
            <p style={{ color: "#5a606b", fontWeight: "bolder" }}>CASTS</p>
          </div>
        </div>
        <div className="row mt-3">{castList}</div>

        {/*Similar Movies*/}

        {SimilarMovies.length !== 0 && (
          <div>
            <hr
              className="mt-5"
              style={{ borderTop: "1px solid #5a606b" }}
            ></hr>
            <div className="row mt-3">
              <div className="col">
                <p style={{ color: "#5a606b", fontWeight: "bolder" }}>
                  SIMILAR MOVIES
                </p>
              </div>
            </div>
            <div className="row mt-3">{similarMovieList}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetailsPage;
