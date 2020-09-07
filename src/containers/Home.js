import React, { Component } from 'react'
import Registration from '../components/auth/Registration'
import Login from '../components/auth/Login'
import axios from 'axios'



export default class Home extends Component {

    handleSuccessfulAuth = (data) => {
        this.props.handleLogin(data)
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />   

            </div>
        )
    }
}  
