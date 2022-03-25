import posts from "./tuits.json";
import {useState} from "react";
const WorkingWithArrays = () => {
  const [tuits, setTuits] = useState(posts);
  const [newTuit, setNewTuit] = useState({tuit: 'New tuit', likes: 0});
  const deleteTuit = (tuit) => {
    const newTuits = tuits.filter(t => t !== tuit);
    setTuits(newTuits);
  }
  const postTuit = () => {
    const id = (new Date()).getTime()+'';
    const newPost = {...newTuit, _id: id};
    const newTuits = [
      newPost,
      ...tuits
    ];
    setTuits(newTuits);
  }
  const updateTuit = (tuit) => {
    const newTuits = tuits.map(t => t._id === tuit._id ? tuit : t);
    setTuits(newTuits);
  }
  return(
    <div>
      <h2>Working with arrays</h2>
      <button onClick={postTuit}
              className="btn btn-sm btn-primary mb-2 float-end">
        Tuit
      </button>
      <input value={newTuit.tuit}
             onChange={(e) =>
               setNewTuit({tuit: e.target.value})}
             className="form-control form-control-sm w-75 mb-2"/>
      <ul className="list-group">
        {
          tuits.map(tuit =>
            <li key={tuit._id}
                className="list-group-item">
              <i  onClick={() => deleteTuit(tuit)} className="fas fa-remove float-end"></i>
              {tuit.tuit}
              <div>
                Likes: {tuit.likes}
                <i onClick={() => updateTuit({...tuit, likes: tuit.likes + 1})}
                   className="fas fa-thumbs-up ms-2 me-2"></i>
                <i onClick={() => updateTuit({...tuit, likes: tuit.likes - 1})}
                   className="fas fa-thumbs-down"></i>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  );
}
export default WorkingWithArrays;