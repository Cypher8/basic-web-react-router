import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {Home, About, User, AddUser, EditUser} from "./containers"


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <a href="/" style={{margin: 10}}>Home</a>
          <a href="/user" style={{margin: 10}}>User</a>
          <a href="/about" style={{margin: 10}}>About</a>
        </div>
        <div className="App container">
          <Route exact  path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/add-user" component={AddUser} />
          <Route path="/edit-user" component={EditUser} />
          <Route path="/about" component={About} />
        </div>
      </div>
    )
  }
}

export default App
