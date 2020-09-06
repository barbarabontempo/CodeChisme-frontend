import React, { Component } from 'react'
import Registration from './auth/Registration'
import Login from './auth/Login'
import axios from 'axios'



export default class Home extends Component {

    handleSuccessfulAuth = (data) => {
        this.props.handleLogin(data)
        this.props.history.push("/dashboard")
    }

    handleLogoutClick = () => {
        axios.delete("http://localhost:3000/logout", {withCredentials: true}).then(response => {
            this.props.handleLogout()
        }).catch(error => {
            console.log("log out error", error)
        })
    } 

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <button onClick={this.handleLogoutClick} >L❤️GOUT </button>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />   

            </div>
        )
    }
}  
