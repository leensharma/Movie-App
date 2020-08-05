const express = require("express");
const router = express.Router();
const { Favourite } = require("../models/Favourite");
const { auth } = require("../middleware/auth");

//=================================
//             Favourite
//=================================

router.post("/favouriteNumber", auth, (req, res) => {
  /* Mongoose - What does the exec function do?
https://stackoverflow.com/questions/31549857/mongoose-what-does-the-exec-function-do
 */

  //Find the Favourite information inside favourite collection by movieid
  Favourite.find({ movieId: req.body.movieId }).exec((err, favourite) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, favouriteNumber: favourite.length });
  });
});

router.post("/favourited", auth, (req, res) => {
  //Find the Favourite information inside favourite collection by movieid, userFrom
  Favourite.find({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, favourite) => {
    if (err) return res.status(400).send(err);

    //check if movie already favourited or not

    let result = false;
    if (favourite.length != 0) {
      result = true;
    }

    res.status(200).json({ success: true, favourited: result });
  });
});

router.post("/addToFavourite", auth, (req, res) => {
  //save the information about the movie and userid inside the favourite collection
  const favourite = new Favourite(req.body);
  favourite.save((err, result) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

router.post("/removeFromFavourite", auth, (req, res) => {
  //remove the information about the movie and userid from the favourite collection
  Favourite.findOneAndDelete({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, result) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, result });
  });
});

router.post("/removeFromFavourite", auth, (req, res) => {
  //remove the information about the movie and userid from the favourite collection
  Favourite.findOneAndDelete({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, result) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true, result });
  });
});

router.post("/getFavouriteMovie", auth, (req, res) => {
  //find favourite movie which is added by logged in user
  Favourite.find({ userFrom: req.body.userFrom }).exec((err, favourites) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, favourites });
  });
});

module.exports = router;
