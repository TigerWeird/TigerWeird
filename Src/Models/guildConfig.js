const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    guildID: String,
    config: {
        ip: {
            type: String,
            default: null,
        },
        lang: {
            type: String,
            default: "en",
        },
        prefix: {
            type: String,
            default: "k!",
        },
        reports: {
            type: String,
            default: null,
        },
        sanctions: {
            type: String,
            default: null,
        },
        confessions: {
            type: String,
            default: null,
        },
        suggestions: {
            type: String,
            default: null,
        },
    },
});

module.exports = mongoose.model("guildConfig", Schema);