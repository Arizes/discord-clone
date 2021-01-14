import React, { Component } from 'react'
//import { existingUserCheck } from '../../util/api';
import "../assets/css/loginPage.css"
import { authenticate } from '../util/api';
//import title from "./title.png"

class MainPage extends Component{
    state = {
        username: "",
        password: "",
        error: ""
    }
    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val})
    }
    authenticateUser = (e) => {
        e.preventDefault();
        if (!this.state.password || !this.state.username) return this.setState({ error: "Incorrect" })
        authenticate(this.state.username, this.state.password)
    }
    render () {
        if (this.props.location.search === "?incorrect=true") {
            this.setState({ error: "The username or password entered is incorrect"})
        } 

        return (
            <div>
               <img className="icon" alt="Logo" />
                <form onSubmit={this.authenticateUser}/*action="http://localhost:3001/api/auth/login" method="POST"*/>
                    <div>
                        <h1>{this.state.error}</h1>
                        <label htmlFor="name">Userame: </label>
                        <input id="username" name="username" type="text" className="username-input" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        <input suggested="current-password" id="password" name="password" type="password" className="password-input" onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        );
    }
}
export default MainPage;