import React, {Component} from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import profileReducer from './profileReducer';
const store = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f,
)(createStore)(profileReducer);
class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
