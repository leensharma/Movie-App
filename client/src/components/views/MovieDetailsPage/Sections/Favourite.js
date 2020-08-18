import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Favourite(props) {
  const user = useSelector((state) => state.user);
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
        alert("Failed to get Favourite Info");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const favouriteHandle = () => {
    if (user.userData && !user.userData.isAuth) {
      return alert("Please Log in first");
    }

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
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={favouriteHandle}
      >
        {Favourited ? "Remove from Favourite  " : "Add to Favourite  "}
        {FavouriteNumber}
      </button>
    </div>
  );
}

export default Favourite;
