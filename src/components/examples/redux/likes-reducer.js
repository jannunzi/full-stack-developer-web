const likes = 10;
const likesReducer = (state = likes, action) => {
  switch (action.type) {
    case 'UPDATE_LIKES':
      return(action.likes);
    case 'LIKE_TUIT':
      return(state + 1);
    case 'UNLIKE_TUIT':
      return(state - 1);
    default:
      return(state);
  }
}
export default likesReducer;