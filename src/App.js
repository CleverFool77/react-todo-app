import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';
import Tlist from './components/list';
// import TItem from './components/item';

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid';

class App extends Component {
  state={
    items:[],
    id:0,
    itemname:'',
    edititem:false
  };
  handleChange= e => {
    this.setState({
      itemname:e.target.value
    });
  };
  handleSubmit = (e) =>{

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-20 mx-auto">
            <h3 className="text-capitalize text-center">todo input</h3>
            <Todo itemname={this.state.itemname} handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}/>
            <Tlist />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
