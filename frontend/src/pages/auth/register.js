import React, { Component } from 'react'

export default class register extends Component {

    render() {
        return (
            <div>
                <title>{this.props.title}</title>
                {this.props.error}
            </div>
        )
    }
}
