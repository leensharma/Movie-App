# Movie-App
## Description
A Full stack MERN website for movie trailers or teasers where user can browse movies and filter them by available geners. Logged in user can add any movie to the Favorite List and can check how many users added particular movie to the Favorite List.

#### To use this application

1. make dev.js file inside config folder
2. put mongoDB info into dev.js file
3. Type " npm install " inside the root directory ( Download Server Dependencies )
4. Type " npm install " inside the client directory ( Download Front-end Dependencies )
5. To run this app execute `npm run dev` in terminal.

Visit Website:-[https://fathomless-lowlands-89328.herokuapp.com](https://fathomless-lowlands-89328.herokuapp.com)

## Built with
- FrontEnd: React.JS, Redux Library, Bootstrap, AntDesign, HTML/CSS
- Backend: Node.JS, Express.JS
- Database: MongoDB, Mongoose

## Features
1. [Home/LandingPage](#1-homelandingpage)
    - [Carosel](#a-carousel)
   - [Genre List](#b-genre-list)
   - [Grid Cards](#c-grid-cards)
   - [Load More](#d-load-more)
2. [MovieDetails](#2-moviedetails-page)
   - [Main Image](#a-main-image)
    - [Movie Detail](#b-movie-detail)
   - [Favorite Button](#c-favorite-button)
    - [Casts](#d-casts)
    - [Similar Movies](#e-similar-movies)
3. [Favorite](#3-favorite)
4. [Login](#4-login-page)
5. [Register](#5-register-page)
6. [Navbar](#6-navbar)
   - [Left Menu](#a-left-menu)
   - [Right Menu](#b-right-menu)
7. [Footer](#7-footer)
---
### 1. Home/LandingPage
Home Page has four Main components
- Carousel
- Genre List
- Grid Cards
- Load More

#### a. carousel
- Showing new movies now playing in theaters.
- On Click on any image of Carousel component you can go to MoveDetails page and check movie details.

![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/Landing%20Page%201.JPG)

#### b. Genre List
- Showing Genre using button and list components
- On Clicking on any Genre List Button grid component will show movies according to genre.

![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/GenreList.JPG)

####  c. Grid Cards
- At start it will show popular movies but after clicking any genre button it will show movies according to genre.
- On Click on any image of Grid Card component you can go to MoveDetails page and check movie details.
![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/GridCards.JPG)

#### d. Load More
- On click Load more Button it will add second Page of movie   on Grid Card component.
- It works in every case. If Grid Card is showing *popular movies* then on click Load More button it will add second Page of *popular movies* and if Grid Card showing movies by *Genre* then it will add more movie according to the Genre.(ex-If Grid component showing Action movies then after clicking Load more it will add more Action movies in Grid Card Component)

![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/LoadMore.JPG)
---
### 2. MovieDetails Page

Home Page has five Main components
- Main Image
- Movie Detail
- Favorite Button
- Casts
- Similar Movies


#### a. Main Image
- Shows Poster of Movie
- On Click Play Button you can watch Movie Trailer 

![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/MainImage.JPG)

#### b. Movie Detail
- Shows Movie Genre,rating and other Details

![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/MovieDetails.JPG)

#### c. Favorite Button
- Logged In User can add movie to favorite and check how many users added particular to favorite.If you are not logged in it will show message on click.

![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/FavouriteButton.JPG)

#### d. Casts
- shows casts list

![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/Casts.JPG)

#### e. Similar Movies
- This component renders only if database has similar type of movie otherwise it will not render this component.

![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/SimilarMovies.JPG)


### 3. Favorite
- It Page will show how Favorite Movie added by in Table.
-  In Table by *hovering* on Movie Name you can see movie image in *popover*.
- You can remove movies from favorite list by clicking Remove Button. 

![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/Favorite.JPG)

### 4. Login Page
- If you are registered user you can log in

![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/LoginPage.JPG)

### 5. Register Page
- You can register if you want to login.

![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/Register.JPG)

### 6. Navbar
It has two components-
- Left Menu
- Right Menu 

![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/Navbar.JPG)

#### a. Left Menu
- It shows logo of website and by clicking on this you can go to homepage
- By clicking on Home and Favorite you can go to home and Favorite Page 

#### b. Right Menu
- If you are logged in it will show logout
- If you are not logged in it will show SignIn and SignUp 

### 7. Footer
- It shows About me and Contact Details.
![alt text](https://github.com/leensharma/Movie-App/blob/master/Snapshots/Footer.JPG)
