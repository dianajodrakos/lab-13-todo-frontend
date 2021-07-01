import './App.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header.js';
import Home from './Home.js';
import Login from './Login.js';
import Signup from './Signup.js';
import Todos from './Todos.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <Home {...routerProps} />} 
            />
            <Route 
              path="/login" 
              exact
              render={(routerProps) => <Login {...routerProps} />} 
            />
            <Route 
              path="/signup" 
              exact
              render={(routerProps) => <Signup {...routerProps} />} 
            />
            <Route 
              path="/todos" 
              exact
              render={(routerProps) => <Todos {...routerProps} />} 
            />
          </Switch>
        </div>
      </Router>
    );
  }
}


