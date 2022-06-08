import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
  return(
    <div className="w-75">
      <nav className="nav">
        <Link to="/profile" className="nav-link">Home</Link>
        <Link to="/signin" className="nav-link">Sign In</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
      </nav>
      <h1>Home</h1>
      Welcome Alice!
    </div>
  )
}
