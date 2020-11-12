import React, { Component } from 'react'
//import { existingUserCheck } from '../../util/api';
import "../../assets/css/MainPage.css"
class MainPage extends Component{
    state = {
        username: "",
        password: "",
    }
    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val})
    }
    authenticateUser = (event) => {
        console.log(event)
    }
    render () {
        let error = this.props.location.search==="?error" ? "This user already exists!" : ""
        return (
            <div>
                <form action="http://localhost:3001/api/auth/login" method="POST">
                    <div>
                        <h1>{error}</h1>
                        <label for="name">Userame: </label>
                        <input id="username" name="username" type="text" className="username-input" required onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label for="password">Password: </label>
                        <input id="password" name="password" type="password" className="password-input" required onChange={this.changeHandler} />
                    </div>
                    <button type="submit" onClick={this.authenticateUser}>Register</button>
                </form>
            </div>
        );
    }
}
export default MainPage;