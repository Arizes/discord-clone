const axios = require('axios')

export function authenticate(username, password) {
    axios.post(`http://localhost:3000/login`, { username, password })
};