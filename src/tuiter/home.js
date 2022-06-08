import React from "react";
import {Link} from "react-router-dom";
import tuits from "./tuits.json";
function Home() {
  return(
    <>
      <h2>Home</h2>
      <div className="list-group">
        {
          tuits.map((tuit) =>
            <Link to={`/tuiter/tuit/${tuit._id}`}
                  className="list-group-item">{tuit.tuit}</Link>
          )
        }
      </div>
    </>
  )
}
export default Home;
