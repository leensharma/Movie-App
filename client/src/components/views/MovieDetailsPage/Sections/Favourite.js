import React, { useState, useEffect } from "react";
import axios from "axios";

function Favourite(props) {
  const [FavouriteNumber, setFavouriteNumber] = useState(0);
  const [Favourited, setFavourited] = useState(false);

  const variable = {
    userFrom: props.userFrom,
    movieId: props.movieId,
    movieTitle: props.movieInfo.original_title,
    movieImage: props.movieInfo.backdrop_path,
    movieRuntime: props.movieInfo.runtime,
  };
  useEffect(() => {
    axios.post("/api/favourite/favouriteNumber", variable).then((response) => {
      if (response.data.success) {
        setFavouriteNumber(response.data.favouriteNumber);
      } else {
        alert("Failed to get Favourite Number");
      }
    });

    axios.post("/api/favourite/favourited", variable).then((response) => {
      if (response.data.success) {
        setFavourited(response.data.favourited);
      } else {
        alert("Failed to get Favourity Info");
      }
    });
  }, []);
  const favouriteHandle = () => {
    if (Favourited) {
      //already added to favourite list
      axios
        .post("/api/favourite/removeFromFavourite", variable)
        .then((response) => {
          if (response.data.success) {
            setFavouriteNumber(FavouriteNumber - 1);
            setFavourited(!Favourited);
          } else {
            alert("Failed to remove from Favourites");
          }
        });
    } else {
      //movie not added to favourite list
      axios.post("/api/favourite/addToFavourite", variable).then((response) => {
        if (response.data.success) {
          setFavouriteNumber(FavouriteNumber + 1);
          setFavourited(!Favourited);
        } else {
          alert("Failed to add to Favourites");
        }
      });
    }
  };
  return (
    <div>
      <button onClick={favouriteHandle}>
        {Favourited ? "Remove from Favourite  " : "Add to Favourite  "}
        {FavouriteNumber}
      </button>
    </div>
  );
}

export default Favourite;
