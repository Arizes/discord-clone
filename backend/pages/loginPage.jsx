import React, { Component } from 'react'
import { authenticate } from './util/api';

class loginPage extends Component {

    state = {
        username: "",
        password: ""
    }
    changeHandler = (event) => {
        console.log("here")
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val})
        console.log(nam, val)
    }
    authenticateUser = (e) => {
        e.preventDefault();
        if (!this.state.password || !this.state.username) return this.props.error = "Incorrect"
        authenticate(this.state.username, this.state.password)
    }
    render () {

        return (
            <div>
                <title>{this.props.title}</title>
                <form onSubmit={this.authenticateUser}>
                    <div>
                        <h1>{this.props.error}</h1>
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

export default loginPage;