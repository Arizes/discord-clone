import React, { Component } from 'react'
const axios = require("axios")

class app extends Component {
    
    async componentDidMount() {
        await axios.get(`http://localhost:3001/api/auth`, { withCredentials: true }).then(response => {
            console.log(response)
            if (response.status !== 200) return this.props.history.push({ pathname: "/" })
            else return;
        }).catch(err => {
            if (err) return this.props.history.push({ pathname: "/" })
        })
    }

    render() {
        return (
            <div>
                <h1>A title</h1>
            </div>
        )
    }
}

export default app;