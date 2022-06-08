import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import SignIn from "./screens/sign-in";
import SignUp from "./screens/sign-up";
import Profile from "./screens/profile";
import Home from "./screens/home";
import Calculator from "./screens/calculator";
import Add from "./screens/add";
import Subtract from "./screens/subtract";
import Multiply from "./screens/multiply";
import Divide from "./screens/divide";
import MovieList from "./screens/movie-list";
import MovieDetails from "./screens/movie-details";
import Nav from "./Nav";
import Navigation from "./tuiter/navigation";
import Tuit from "./tuiter/tuit";
import TuiterHome from "./tuiter/home"
import Explore from "./tuiter/explore";
import Notifications from "./tuiter/notifications";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
          <Routes>
            <Route path="/tuiter" element={<Navigation/>}>
              <Route path="home" index element={<TuiterHome/>}/>
              <Route path="explore" element={<Explore/>}/>
              <Route path="notifications" element={<Notifications/>}/>
              <Route path="tuit/:tid" element={<Tuit/>}/>
            </Route>
            <Route path="/" element={<Nav/>}/>
            <Route path="/movies" element={<MovieList/>}/>
            <Route path="/movies/details/:mid" element={<MovieDetails/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/signin" element={<SignIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/calculator" element={<Calculator/>}>
              <Route path="add/:a/:b" element={<Add/>}/>
              <Route path="subtract/:a/:b" element={<Subtract/>}/>
              <Route path="multiply/:a/:b" element={<Multiply/>}/>
              <Route path="divide/:a/:b" element={<Divide/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
