const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema({
    id: String,
    messages: {
        id: String,
        Author: {
            id: String,
            username: String
        },
        edited: Boolean,
    }
});
module.exports = mongoose.model("channelSchema", channelSchema)