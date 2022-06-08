import React from "react";
import movies from './movies.json';
import {Link} from "react-router-dom";
function MovieList () {
  return(
    <div className="list-group mt-2">
      <span className="list-group-item active">
        Movies
      </span>
      {
        movies.map((movie) =>
        <Link
          key={movie._id}
          to={`/movies/details/${movie._id}`}
          className="list-group-item">
          {movie.title}
          <i className="fa fa-arrow-right float-end"/>
        </Link>
        )
      }
    </div>
  )
}
export default MovieList;
