import React, {Component} from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logo from './logo.svg';
import './App.css';
const store = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f,
)(createStore)(profileReducer);
class App extends Component {
  componentDidMount() {
    fetch("https://api.hatchways.io/assessment/students").then(
      resp => resp.json()
    ).then(
      json => updateUsers(json)
    )
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
