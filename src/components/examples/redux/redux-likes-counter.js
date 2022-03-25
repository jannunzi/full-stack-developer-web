import {useDispatch, useSelector} from "react-redux";
const ReduxLikesCounter = () => {
  const likes = useSelector(state => state.likes);
  // const helloTo = useSelector(state => state.helloTo);
  const dispatch = useDispatch();
  const updateLikes = (likes) => {
    dispatch({
      type: 'UPDATE_LIKES',
      likes: likes
    })
  }
  const likeTuit = () => {
    dispatch({
      type: "LIKE_TUIT"
    });
  }
  const unlikeTuit = () => {
    dispatch({
      type: "UNLIKE_TUIT"
    });
  }
  return(
    <div>
      <h2>Redux Likes Counter</h2>
      Likes: {likes}
      <i onClick={() => likeTuit()}
         className="fas fa-thumbs-up ms-2 me-2"></i>
      <i onClick={() => unlikeTuit()}
         className="fas fa-thumbs-down me-2"></i>
      {/*<i onClick={() => updateLikes(likes + 1)}*/}
      {/*   className="fas fa-thumbs-up ms-2 me-2"></i>*/}
      {/*<i onClick={() => updateLikes(likes - 1)}*/}
      {/*   className="fas fa-thumbs-down me-2"></i>*/}
    </div>
  );
}
export default ReduxLikesCounter;