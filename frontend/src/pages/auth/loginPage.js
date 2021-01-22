import React, { Component } from 'react'
import { authenticate } from "../../util/api";
const axios = require("axios");
// require("../assets/style.css");

class loginPage extends Component {

    componentWillMount() {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "./assets/style.css"
        document.head.appendChild(link)
    }
    async componentDidMount() {
        await axios.get(`http://localhost:3001/api/auth`,{ withCredentials: true }).then(response => {
            console.log(response)
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
            const element = document.getElementById("passwordInputBox")
            element.classList.add("redOverlay");
        } else {
            const element = document.getElementById("passwordInputBox")
            element.classList.remove("redOverlay")
        }

        if(!this.state.username) {
            const element = document.getElementById("usernameInputBox")
            element.classList.add("redOverlay");
        } else {
            const element = document.getElementById("usernameInputBox")
            element.classList.remove("redOverlay")
        }
        if (!this.state.username || !this.state.password) return;
            //let auth = authenticate(this.state.username, this.state.password)
            axios.post(`http://localhost:3001/api/auth/login`, { 
                header: {
                    "Access-Control-Allow-Origin": "*"
                },
                withCredentials: true,
                username: this.state.username, 
                password: this.state.password 
            }).then(response => {
                if (response.status === 200) {
                    return this.props.history.push({ pathname: "/app" })
                } else return;
            })
        }
    render () {

        return (
            
            <div>
                <title>Login Page</title>
                <img src="https://discord.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg" className="discord-img" />
                <div className="boxSurround">
                    <div className="leftside">
                        <div className="white-title">Welcome back!</div>
                        <div className="greytext">We're so excited to see you again!</div>
                        <form onSubmit={this.authenticateUser} className="addtop">
                            <div id="usernameInputBox" className="">
                                <div className="textarea-title"><span>USERNAME</span><span className="noDisplay"> - This field is required</span></div>
                                <input id="username" name="username" type="text" className="username-input" onChange={this.changeHandler} />
                            </div>
                            <div id="passwordInputBox" className="">
                                <div className="textarea-title"><span>PASSWORD</span><span className="noDisplay"> - This field is required</span></div>
                                <input suggested="current-password" id="password" name="password" type="password" className="password-input" onChange={this.changeHandler} />
                            </div>
                            <div className="link margintop"><span onClick={() => this.props.history.push({ pathname: "/forgotten" })}>Forgot your password?</span></div>
                            <button type="submit" className="login-btn">Login</button>
                            <div className="smalltext"><span className="lighttext">Need an account?</span><span className="link" onClick={() => this.props.history.push({ pathname: "/register" })}>Register</span></div>
                        </form>
                    </div>
                </div>
                <div className="rightside">
                    <div className="white-title boxtop box-left">Developed by Arize!</div>
                    <div className="greytext boxtop box-left">To learn more join my discord server</div>
                    <button className="bluebtn btnhover btnactive boxtop boxleft" onClick={() => window.open("https://discord.gg/Zuatb29")}>Join</button>
                </div>
            </div>
        );
    }
}

export default loginPage;