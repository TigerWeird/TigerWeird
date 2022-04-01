const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    clientID: String,
    config: {
        devList: {
            type: Array,
            default: ["295250573937344514"]
        },
        blacklist: {
            userID: {
                blacklisted: Boolean,
                blacklistAuthor: String,
                blacklistReason: String,
            }
        },
        maintenance: {
            type: Boolean,
            default: false,
        }
    }
});

module.exports = mongoose.model("devConfig", Schema);