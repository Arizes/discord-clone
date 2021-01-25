import React, { Component } from 'react'
import { authenticate } from "../../util/api";
const axios = require("axios");
import "../assets/loginStyle.css"

class loginPage extends Component {
//<svg className="cross" width="24" height="24" viewBox="0 0 24 24" onClick={this.deleteThis}><path fill="currentColor" d="M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"></path></svg>
    async componentDidMount() {
        await axios.get(`http://localhost:3001/api/auth`,{ header: { withCredentials: true }}).then(response => {
            if (response.status === 200) return this.props.history.push({ pathname: "/app" })
            else return;
        }).catch(err => {
            if (err) return;
        })
    }
    state = {
        username: "",
        password: "",
    }
    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val})
    }
    authenticateUser = (e) => {
        e.preventDefault();
        if (!this.state.password) {
            const divElement = document.getElementById("passwordInputBox")
            divElement.classList.add("redOverlay");
            const passElement = document.getElementById("password")
            passElement.classList.add("redOverlay")
            document.getElementById("noDisplayPassword").textContent = " - This field is required"
        } else {
            const divElement = document.getElementById("passwordInputBox")
            divElement.classList.remove("redOverlay")
            const passElement = document.getElementById("password")
            passElement.classList.remove("redOverlay")
            document.getElementById("noDisplayPassword").textContent = " "
        }

        if(!this.state.username) {
            const divElement = document.getElementById("usernameInputBox")
            divElement.classList.add("redOverlay");
            const userElement = document.getElementById("username")
            userElement.classList.add("redOverlay")
            document.getElementById("noDisplayUsername").textContent = " - This field is required"
        } else {
            const divElement = document.getElementById("usernameInputBox")
            divElement.classList.remove("redOverlay")
            const userElement = document.getElementById("username")
            userElement.classList.remove("redOverlay")
            document.getElementById("noDisplayUsername").textContent = " "
        }
        if (!this.state.username || !this.state.password) return;
        console.log("here")
            //let auth = authenticate(this.state.username, this.state.password)
            axios.post(`http://localhost:3001/api/auth/login`, { 
                withCredentials: true,
                username: this.state.username, 
                password: this.state.password 
            }).then(response => {
                if (response.status === 200) {
                    return this.props.history.push({ pathname: "/app" })
                } else {
                    const passElement = document.getElementById("passwordInputBox")
                    passElement.classList.add("redOverlay");
                    const userElement = document.getElementById("usernameInputBox")
                    userElement.classList.add("redOverlay");
                    document.getElementById("wrongDetails").textContent = " - Login or password is invalid"
                }
            }).catch(err => {
                if (err) {
                    const passElement = document.getElementById("passwordInputBox")
                    passElement.classList.add("redOverlay");
                    const userElement = document.getElementById("usernameInputBox")
                    userElement.classList.add("redOverlay");
                    document.getElementById("noDisplayUsername").textContent = " - Login or password is invalid"
                    document.getElementById("noDisplayPassword").textContent = " - Login or password is invalid"
                    return;
                }
            })
        }
        // deleteThis = (e) => {
        //     const spanElement = document.getElementById("close")
        //     if (!spanElement) return
        //     console.log(spanElement)
        //     spanElement.classList.add("spanClose");
        // }
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
    }
}

export default loginPage;