import React, {Component} from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import profileReducer from './profileReducer';
import logo from './logo.svg';
import './App.css';
const store = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f,
)(createStore)(profileReducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        
      </Provider>
    );
  }
}

export default App;
