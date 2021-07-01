import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './Header.js';
import HomePage from './Home.js';
import LoginPage from './Login.js';
import SignupPage from './Signup.js';
import TodosPage from './Todos.js';
import './App.css';

//set token string to variable shortcut
const TOKEN = 'TOKEN';

export default class App extends Component {


  //set state for login
  state = {
    token: localStorage.getItem(TOKEN)
  }

  //login function declaration
  login = (token) => {
    this.setState({ token: token })
    localStorage.setItem(TOKEN, token)
  }

  //logout function declaration
  logout = () => {
    this.setState({ token: '' })
    localStorage.setItem(TOKEN, '')
  }


  render() {

    console.log(this.state);
    return (
      <Router>
        <div>
          <Header logout={this.logout} />
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <HomePage {...routerProps} />} 
            />
            <Route 
              path="/signup" 
              exact
              render={(routerProps) => <SignupPage login={this.login} {...routerProps} />} 
            />
            <Route 
              path="/login" 
              exact
              render={(routerProps) => <LoginPage login={this.login} {...routerProps} />} 
            />
            <Route 
              path="/todos" 
              exact
              render={(routerProps) => 
                this.state.token 
                ? <TodosPage token={this.state.token} {...routerProps} />
                : <Redirect to ='/' />
              } 
            />
          </Switch>
        </div>
      </Router>
    );
  }
}


