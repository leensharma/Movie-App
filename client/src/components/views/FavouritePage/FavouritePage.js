import React, { useEffect, useState } from "react";
import "./favouritePage.css";
import axios from "axios";
import { Popover } from "antd";
import { IMAGE_URL } from "../../Config";
import Table from "react-bootstrap/Table";

function FavouritePage(props) {
  const [FavouriteMovies, setFavouriteMovies] = useState([]);
  const variables = {
    userFrom: localStorage.getItem("userId"),
  };
  useEffect(() => {
    fetchFavouriteMovie();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchFavouriteMovie = () => {
    axios
      .post("/api/favourite/getFavouriteMovie", variables)
      .then((response) => {
        if (response.data.success) {
          setFavouriteMovies(response.data.favourites);
        } else {
          alert("Failed to get Favourite Video");
        }
      });
  };

  const onClickRemove = (movieId) => {
    const variable = {
      movieId: movieId,
      userFrom: localStorage.getItem("userId"),
    };
    axios
      .post("/api/favourite/removeFromFavourite", variable)
      .then((response) => {
        if (response.data.success) {
          fetchFavouriteMovie();
        } else {
          alert("Failed to remove from Favourites");
        }
      });
  };

  const renderTableBody = FavouriteMovies.map((movie, index) => {
    const content = (
      <div>
        {movie.movieImage ? (
          <img src={`${IMAGE_URL}w500${movie.movieImage}`} alt="moviePost" />
        ) : (
          "no Image"
        )}
      </div>
    );

    return (
      <tr key={index}>
        <Popover content={content} title={`${movie.movieTitle}`}>
          <td>{movie.movieTitle}</td>
        </Popover>
        <td>{movie.movieRuntime} mins</td>
        <td>
          <button onClick={() => onClickRemove(movie.movieId)}>
            Remove From the Favourites
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h3>My Favourite Movies</h3>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie RunTime</th>
            <th>Remove From Favourites</th>
          </tr>
        </thead>

        <tbody>{renderTableBody}</tbody>
      </Table>
    </div>
  );
}

export default FavouritePage;
