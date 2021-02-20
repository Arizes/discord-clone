import React, { Component } from 'react'
const axios = require("axios")
import "./assets/appLoading.css";

class app extends Component {
    
    async componentDidMount() {
        await axios.get(`http://localhost:3001/api/auth`, { withCredentials: true }).then(response => {
            console.log(response)
            if (response.status !== 200) return this.props.history.push({ pathname: "/" })
            else return;
        }).then(response => {
            if (response.status === 200) {
                setTimeout(() => {
                    this.props.history.push({ pathname: "/channels/@me" })
                }, 2000)
            }
        }).catch(err => {
            if (err) return this.props.history.push({ pathname: "/" })
        })
    }
    render() {
        return (
            <div className="dark-background">
                <div className="loadingImg">
                    <img src="https://cdn.discordapp.com/attachments/414258067870449665/445736475158380544/discord.gif" />
                </div>
            </div>
        )
    }
}

export default app;