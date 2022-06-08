import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return(
    <div className="list-group">
      <Link
        to="/tuiter"
        className="list-group-item">
        Tuiter
      </Link>
    </div>
  )
}
export default Nav;
