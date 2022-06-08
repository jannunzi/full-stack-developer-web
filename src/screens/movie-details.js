import React from "react";
import movies from "./movies.json"
import {Link, useParams} from "react-router-dom";
function MovieDetails() {
  const {mid} = useParams();
  const movie = movies.find(m => m._id === mid);
  return(
    <>
      <h1>
        <Link to="/movies" className="me-2">
          <i className="fa fa-arrow-left"/>
        </Link>
        {movie.title}</h1>
      <p>{movie.plot}</p>
    </>
  )
}
export default MovieDetails;
