import HelloWorldReduxComponent
  from "./hello-world-redux-component";
import helloReducer from "./hello-reducer";
import likesReducer from "./likes-reducer";
import calculatorReducer from "./calculator-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ReduxLikesCounter from "./redux-likes-counter";
import ReduxProfileEditor from "./redux-profile-editor";
import ReduxCalculator from "./redux-calculator";
const reducer = combineReducers({
  likes: likesReducer,
  helloTo: helloReducer,
  parameters: calculatorReducer
});
const store = createStore(reducer);
const ReduxExamples = () => {
  return(
    <Provider store={store}>
    <div>
      <h1>Redux Examples Application</h1>
      <ReduxCalculator/>
      <ReduxProfileEditor/>
      <ReduxLikesCounter/>
      <HelloWorldReduxComponent/>
    </div>
    </Provider>
  );
}
export default ReduxExamples;