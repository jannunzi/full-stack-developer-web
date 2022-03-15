import logo from './logo.svg';
import './styles.css';
// import Navigation from "./components/navigation";
// import Tuits from "./components/tuits";
// import WhatsHappening from "./components/whats-happening/whats-happening";
// import Bookmarks from "./components/bookmarks/bookmarks";
import Tuiter from "./components/tuiter/tuiter";
import HelloWorld from "./components/hello-world";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="container">
    {/*<HelloWorld/>*/}
    <Tuiter/>
    </div>
  );
}

export default App;
