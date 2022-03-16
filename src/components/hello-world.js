import {Link} from "react-router-dom";

const HelloWorld = () => {
  return(
    <div>
      <h1>Hello World!</h1>
      <Link to="/examples">
        Examples
      </Link>
    </div>
  );
}
export default HelloWorld;
