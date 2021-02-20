import React, { Component } from 'react'
import DmChannel from "./components/DmChannel"

export default class channelView extends Component {
 
    componentDidMount() {
        console.log(this.props.location)
        if (this.props.location.pathname === "/channels/@me/") this.props.history.push({ pathname: "/channels/@me" })
        else {

        }
    }
    render() {
        if (this.props.location.pathname === "/channels/@me") {
            return (
                <div>
                    <h1>Hi</h1>
                    <DmChannel />
                </div>
            );
        } else {
            return (
                <div>
                    <h1>hi</h1>
                </div>
            )
        }
    }
}
