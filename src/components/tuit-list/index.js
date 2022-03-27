import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  createTuit,
  deleteTuit,
  findAllTuits, updateTuit
} from "../../actions/tuits-actions";

const TuitList = () => {
  const tuits = useSelector(
    state => state.tuits);
  const [newTuit, setNewTuit] = useState({tuit: 'New tuit', likes: 0});
  const dispatch = useDispatch();
  useEffect(() => 
      findAllTuits(dispatch),
    [dispatch]);
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button onClick={() => createTuit(dispatch, newTuit)}
                className="btn btn-primary float-end">Tuit</button>
        <textarea className="form-control w-75" onChange={(e) =>
          setNewTuit({...newTuit, tuit: e.target.value})}></textarea>
      </li>
      {
        tuits.map(tuit =>
          <li key={tuit._id}
              className="list-group-item">
            <i className="fas fa-remove float-end"
               onClick={() => deleteTuit(dispatch, tuit)}></i>
            {tuit.tuit}
            <div>
              Likes: {tuit.likes}
              <i onClick={() => updateTuit(dispatch, {
                ...tuit, likes: tuit.likes + 1
              })} className="far fa-thumbs-up ms-2"></i>
            </div>
          </li>)
      }
    </ul>
  );
}

export default TuitList;