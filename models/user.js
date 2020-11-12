const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String
})
module.exports = mongoose.model("user", userSchema)