import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';
import Tlist from './components/list';
// import TItem from './components/item';

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-20 mx-auto">
            <h3 className="text-capitalize text-center">todo input</h3>
            <Todo />
            <Tlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
