import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
