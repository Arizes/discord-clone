import React, { Component } from 'react'

class MainPage extends Component{
    state = {
        username: "",
        password: "",
        loggedIn: false
    }
    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
    authenticateUser = () => {

    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.changeHandler} />
                    <input type="text" onChange={this.changeHandler} />
                    <button onClick={this.authenticateUser}></button>
                </form>
            </div>
        );
    }
}
export default MainPage;