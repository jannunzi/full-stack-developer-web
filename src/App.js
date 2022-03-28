import './styles.css';
// import Navigation from "./components/navigation";
// import Tuits from "./components/tuits";
// import WhatsHappening from "./components/whats-happening/whats-happening";
// import Bookmarks from "./components/bookmarks/bookmarks";
// import Tuiter from "./components/tuiter/tuiter";
import HelloWorld from "./components/hello-world";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tuiter from "./components/tuiter";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import tuitsReducer from "./reducers/tuits-reducer";
const reducers = combineReducers({tuits: tuitsReducer});
const store = createStore(reducers);
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="container">
        <Routes>
          {/*<Route path="/examples" exact={true} element={<Examples/>}/>*/}
          <Route path="/hello" element={<HelloWorld/>}/>
          <Route path="/" element={<Tuiter/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}
export default App;