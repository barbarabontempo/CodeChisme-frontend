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
            <div className="ui two column stackable grid container ">
                

                <div className="registration-form column">
                    <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                </div>


                <div className="column grey">
                    <h1>Status: {this.props.loggedInStatus}</h1>
                    <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />  
                 </div> 

            </div>
        )
    }
}  
