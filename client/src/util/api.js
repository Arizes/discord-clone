const axios = require('axios')
//action="http://localhost:3001/api/auth/login" method="POST"

export function authenticate(username, password) {
    axios.post(`http://localhost:3001/api/auth/login`, { username, password }, {
        headers: {
            "Access-Control-Allow-Origin": "*",
            'content-type': 'text/json'
        }
    })
};