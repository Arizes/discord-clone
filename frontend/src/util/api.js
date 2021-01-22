const axios = require('axios')

export function authenticate(username, password) {
    axios.post(`http://localhost:3001/api/auth/login`, { 
        username, 
        password 
    }).then(response => {
        if (response.status === 200) {
            return this.props.history.push({ pathname: "/app" })
        } else {
            return false
        }
    })
};