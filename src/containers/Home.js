import React, { Component } from 'react'
import Registration from '../components/auth/Registration'
import Login from '../components/auth/Login'
import axios from 'axios'
import Overlay from '../components/auth/Overlay'



export default class Home extends Component {

    state = {
        rightPanelActive: false
    }

    handleClickSignUpButton = () => this.setState({
        rightPanelActive: true,
    });

    handleClickSignInButton = () => this.setState({
        rightPanelActive: false,
    });

    handleSuccessfulAuth = (data) => {
        this.props.handleLogin(data)
        this.props.history.push("/dashboard")
    }

    render() {
        const { handleClickSignUpButton, handleClickSignInButton } = this;
        const { rightPanelActive } = this.state;
        
        return(
            <div className="App">
                <div
                    className={`container ${rightPanelActive ? `right-panel-active` : ``}`}
                    id="container"
                >
                    <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />  
                    <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                    {/* <h1>Status: {this.props.loggedInStatus}</h1> */}
                    <Overlay
                        handleClickSignInButton={handleClickSignInButton}
                        handleClickSignUpButton={handleClickSignUpButton}
                    />
                </div>
            </div>
        );
    }
}  