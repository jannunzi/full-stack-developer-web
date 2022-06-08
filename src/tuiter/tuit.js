import React from "react";
import tuits from "./tuits.json";
import {Link, useParams} from "react-router-dom";
function Tuit() {
  const {tid} = useParams();
  const tuit = tuits.find((t) => t._id === tid);
  return(
    <div className="list-group-item">
      <Link to="/tuiter/home" className="me-2">
        <i className="fa fa-arrow-left"></i>
      </Link>
      {tuit.tuit}
    </div>
  );
}
export default Tuit;
