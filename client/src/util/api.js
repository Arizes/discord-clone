const axios = require('axios')
//action="http://localhost:3001/api/auth/login" method="POST"

export function authenticate(username, password) {
    axios.post(`http://localhost:3001/api/auth/login`, { 
        username, password, header: { "Access-Control-Allow-Origin": "Origin" }})
};