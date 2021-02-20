import React, { Component } from 'react'
import "./assets/registerStyle.css"
import { motion } from "framer-motion";

export default class register extends Component {

    state = {
        username: "",
        password:  "",

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
    }
    render() {
        return (
            <div className="background">
                <title>Register Page</title>
                <img src="https://discord.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg" className="discord-img" />
                <motion.div className="boxSurround-register" initial={{ opacity: 0.9 }} animate={{ opacity: 1, scale: [.987, 1] }} exit={{ opacity: 0 }}>
                    <div className="leftside">
                        <div className="white-title">Create an account</div>
                        <form onSubmit={this.authenticateUser} className="addtop">
                            <div id="usernameInputBox" className="">
                                <div className="textarea-title"><span>USERNAME</span><span className="noDisplay"> - This field is required</span></div>
                                <input autoComplete="username" id="username" name="username" type="text" className="inputfield username-input registerInput" onChange={this.changeHandler} />
                            </div>
                            <div id="passwordInputBox" className="">
                                <div className="textarea-title"><span>PASSWORD</span><span className="noDisplay"> - This field is required</span></div>
                                <input autoComplete="current-password" suggested="current-password" id="password" name="password" type="password" className="inputfield password-input registerInput" onChange={this.changeHandler} />
                            </div>
                            <div>
                                <input type="checkbox" className="check-field" /><div className="checkboxinput"><span className="greytext">I have read and agree to Discord's </span><span onClick={() => window.open("https://discord.com/terms")} className="link">Terms of Service</span><span className="greytext"> and </span><span className="link" onClick={() => window.open("https://discord.com/privacy")}>Privacy Policy</span></div>
                            </div>
                            <button type="submit" className="login-btn">Continue</button>
                            <div className="smalltext"><span className="link" onClick={() => this.props.history.push({ pathname: "/" })}>Already have an account?</span></div>
                        </form>
                    </div>
                </motion.div>
            </div>
        )
    }
}
