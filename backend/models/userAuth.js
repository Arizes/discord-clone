const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
    guilds: Array,
    friends: Array,
    dmChannels: Array
})
module.exports = mongoose.model("userAuth", userSchema)