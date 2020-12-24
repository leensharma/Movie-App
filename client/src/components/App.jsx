import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.jsx";
import LoginPage from "./views/LoginPage/LoginPage.jsx";
import RegisterPage from "./views/RegisterPage/RegisterPage.jsx";
import NavBar from "./views/NavBar/NavBar.jsx";
import Footer from "./views/Footer/Footer.jsx";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage.jsx";
import FavouritePage from "./views/FavouritePage/FavouritePage.jsx";

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <>
      <NavBar />
      <div style={{ paddingTop: "55px" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route
            exact
            path="/movie/:movieId"
            component={Auth(MovieDetailsPage, null)}
          />
          <div style={{ backgroundColor: "#ffffff" }}>
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
            <Route
              exact
              path="/favourite"
              component={Auth(FavouritePage, null)}
            />
          </div>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
