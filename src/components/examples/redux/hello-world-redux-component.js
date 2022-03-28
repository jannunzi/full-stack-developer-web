import {useSelector} from "react-redux";

const HelloWorldReduxComponent = () => {
  // const helloTo = useSelector(state => state.helloTo);
  const helloTo = useSelector((state) => {
    return state.helloTo;
  });
  // const likes = useSelector(state => state.likes);
  return(
    <div>
      <h2>Hello {helloTo}</h2>
    </div>
  );
}
export default HelloWorldReduxComponent;