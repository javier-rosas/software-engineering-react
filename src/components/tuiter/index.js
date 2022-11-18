import React from "react";
import Navigation from "../navigation";
import WhatsHappening from "../whats-happening";
<<<<<<< HEAD
<<<<<<< HEAD
import {Routes, Route, HashRouter} from "react-router-dom";
=======
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
>>>>>>> a3
=======
import {BrowserRouter, Routes, Route, HashRouter} from "react-router-dom";
>>>>>>> a3
import Home from "../home";
import Bookmarks from "../bookmarks";
import Profile from "../profile";
import './tuiter.css'
<<<<<<< HEAD
<<<<<<< HEAD
=======
import EditProfile from "../profile/edit-profile";
>>>>>>> a3
=======
import EditProfile from "../profile/edit-profile";
>>>>>>> a3
import Explore from "../explore";
import Notifications from "../notifications";
import Messages from "../messages";
import Lists from "../lists";
import More from "../more";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import {Login} from "../profile/login";
import Movies from "../movies";
import MovieDetails from "../movies/details";
>>>>>>> a3
=======
import {Login} from "../profile/login";
import Movies from "../movies";
import MovieDetails from "../movies/details";
>>>>>>> a3

function Tuiter () {
  return(
    <HashRouter>
      <div className="container">
        <div className="ttr-tuiter">
          <div className="ttr-left-column">
            <Navigation/>
          </div>
          <div className="ttr-center-column">
            <Routes>
              <Route path="/" element={<Home/>}/>
<<<<<<< HEAD
<<<<<<< HEAD
              <Route path="/tuiter" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
=======
=======
>>>>>>> a3
              <Route path="/login" element={<Login/>}/>
              <Route path="/tuiter" element={<Home/>}/>
              <Route path="/tuiter/:uid" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/home/:uid" element={<Home/>}/>
<<<<<<< HEAD
>>>>>>> a3
=======
>>>>>>> a3
              <Route path="/explore" element={<Explore/>}/>
              <Route path="/notifications" element={<Notifications/>}/>
              <Route path="/messages" element={<Messages/>}/>
              <Route path="/bookmarks" element={<Bookmarks/>}/>
              <Route path="/lists" element={<Lists/>}/>
              <Route path="/profile" element={<Profile/>}/>
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <Route path="/profile/edit" element={<EditProfile/>}/>
              <Route path="/movies" element={<Movies/>}/>
              <Route path="/movies/:imdbID" element={<MovieDetails/>}/>
>>>>>>> a3
=======
              <Route path="/profile/edit" element={<EditProfile/>}/>
              <Route path="/movies" element={<Movies/>}/>
              <Route path="/movies/:imdbID" element={<MovieDetails/>}/>
>>>>>>> a3
              <Route path="/more" element={<More/>}/>
            </Routes>
          </div>
          <div className="ttr-right-column">
            <WhatsHappening/>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}
export default Tuiter;