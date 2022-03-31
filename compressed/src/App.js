import React, {Component} from 'react';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from 'react-redux';
import studentReducer from './studentReducer';
import StudentContainer from './StudentContainer'
import './App.css';
const store = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : f => f,
)(createStore)(studentReducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StudentContainer/>
      </Provider>
    );
  }
}

export default App;
