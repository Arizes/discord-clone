const mongoose = require('mongoose')

let guildSchema = new mongoose.Schema({
    id: String,
    name: String,
    owner: String,
    icon: String,
    permissions: String,
    channels: Array,
    roles: Array,
    members: Array,
})
module.exports = mongoose.model("guild", guildSchema)