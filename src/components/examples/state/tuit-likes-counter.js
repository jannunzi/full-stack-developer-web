import {useState} from "react";

const TuitLikesCounter = () => {
  const [likes, setLikes] = useState(12);

  const likeTuit = () => {
    setLikes(likes + 1);
  }
  const unlikeTuit = () => {
    if(likes > 0) {
      setLikes(likes - 1);
    }
  }
  return (
    <div>
      <h2>Likes: {likes}</h2>
      <button onClick={likeTuit}>Like</button>
      <button onClick={unlikeTuit}>Unlike</button>
    </div>
  )
}
export default TuitLikesCounter;