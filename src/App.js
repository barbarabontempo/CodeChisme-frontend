import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route  } from "react-router-dom"
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import axios from 'axios'

export default class App extends React.Component {

  state = {
    loggedInStatus: "NOT_LOGGED_IN",
    user: {} 
  }
  
  checkLoginStatus = () => {
    axios.get("http://localhost:3000/logged_in", { withCredentials: true}).then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN"){
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    }).catch(error => {
      console.log("logged in error?", error)
    })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }


  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className="app">
        <BrowserRouter>
        <Switch>
          <Route 
          exact 
          path={"/"} 
          render={props => (
            <Home {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} handleLogout={this.handleLogout}/>
          )}
          />
          <Route 
          exact 
          path={"/dashboard"}
          render={props => ( 
            <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
          )}
          />

        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
