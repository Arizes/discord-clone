import React, { Component } from 'react';
import { authenticate } from "../util/api";
const axios = require("axios");
import "./assets/loginStyle.css";

class loginPage extends Component {

    // Checking whether the user is authenticated so that they can be redirected to the main page
    async componentDidMount() {
        await axios.get(`http://localhost:3001/api/auth`, { withCredentials: true })
        .then(response => {
            if (response.status === 200) return this.props.history.push({ pathname: "/app" });
        }).catch(err => { 
            if (err) return;
        });
    };

    // Setting empty state values, to hold data temporarily
    state = {
        username: "",
        password: "",
    };

    // Handling the update event of input fields by updating the state with the new input value
    changeHandler = (event) => this.setState({ [event.target.name]: event.target.value });
    
    // Event for when the Login button is clicked to authenticate
    authenticateUser = (e) => {
        e.preventDefault();

        const passwordElement = document.getElementById("passwordInputBox");
        const userElement = document.getElementById("usernameInputBox");

        function changeState(element, addOrRemove, text) {
            if (addOrRemove) {
                element.classList.add("redOverlay");
                element.children[0].children[1].textContent = text;
                element.children[1].classList.add("redOverlay");
            }
            else {
                element.classList.remove("redOverlay");
                element.children[1].classList.remove("redOverlay");
                element.children[0].children[1].textContent = text;
            };
        };

        if (!this.state.password) changeState(passwordElement, true, " - This field is required");
        else changeState(passwordElement, false, "");
''
        if (!this.state.username) changeState(userElement, true, " - This field is required");
        else changeState(userElement, false, "");

        if (!this.state.username || !this.state.password) return;

        axios.post(`http://localhost:3001/api/auth/login`, { username: this.state.username, password: this.state.password, withCredentials: true })
            .then(response => {
                if (response.status === 200) return this.props.history.push({ pathname: "/app" });
            })
            .catch(err => {
                if (err) {
                    changeState(passwordElement, true, " - Login or password is invalid");
                    changeState(userElement, true, " - Login or password is invalid");
                }
            })
        }
    render () {
        return (
            <div className="background">
                <title>Login Page</title>

                <img src="https://discord.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg" className="discord-img" onClick={() => this.props.history.push({ path: "/" })}/>
                <div className="boxSurround">
                    <div className="leftside">
                        <div className="white-title">Welcome back!</div>
                        <div className="greytext font16">We're so excited to see you again!</div>
                        <form onSubmit={this.authenticateUser} className="addtop">
                            <div id="usernameInputBox" className="">
                                <div className="textarea-title"><span>USERNAME</span><span className="noDisplay" id="noDisplayUsername"></span></div>
                                <input autoComplete="username" id="username" name="username" type="text" className="inputfield" onChange={this.changeHandler} />
                            </div>
                            <div id="passwordInputBox" className="">
                                <div className="textarea-title"><span>PASSWORD</span><span className="noDisplay" id="noDisplayPassword"></span></div>
                                <input autoComplete="current-password" suggested="current-password" id="password" name="password" type="password" className="inputfield password-input" onChange={this.changeHandler} />
                            </div>
                            <div className="link font14 margintop forgottenpass"><span onClick={() => this.props.history.push({ pathname: "/forgotten" })}>Forgot your password?</span></div>
                            <button type="submit" className="login-btn">Login</button>
                            <div className="smalltext"><span className="lighttext">Need an account?</span><span className="link font14" onClick={() => this.props.history.push({ pathname: "/register" })}>Register</span></div>
                        </form>
                    </div>
                    <div className="rightside">
                        <div className="rightsideText">
                            <div className="white-title ">Developed by Arize!</div>
                            <div className="greytext font16">Coded using MongoDb, Express, ReactJs, NodeJs, Html, Css and Javascript</div>
                        </div>
                        <button className="bluebtn btnhover btnactive fixbutton" onClick={() => window.open("https://discord.gg/ZuAtb29")}><img className="iconSize profileIcons" src="../assets/discord.png" /></button>
                        <button className="bluebtn btnhover btnactive fixbutton" onClick={() => window.open("https://github.com/Arizes")}><img className="iconSize githubProfileButton profileIcons" src="../assets/github.png" /></button>
                    </div>
                    <span className="notdiscordbox">Note: This is not the actual discord! This is just a personal project.</span>
                </div>
            </div>
        );
    };
};

export default loginPage;