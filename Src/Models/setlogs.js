const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    guildID: String,
    channelID: String,
    channels: {
        channelC: Boolean,
        channelD: Boolean,
        channelU: Boolean,
        stageC: Boolean,
        stageD: Boolean,
        stageU: Boolean,
    },
    guild: {
        emojisU: Boolean,
        integrationsU: Boolean,
        stickersU: Boolean,
        guildU: Boolean,
        inviteC: Boolean,
        inviteD: Boolean,
        voiceServerU: Boolean,
        voiceStateU: Boolean,
        webhooksU: Boolean,
    },
    members: {
        banA: Boolean,
        banR: Boolean,
        memberA: Boolean,
        memberR: Boolean,
        memberU: Boolean,
    },
    messages: {
        msgD: Boolean,
        msgU: Boolean,
        msgDBulk: Boolean,
    },
    roles: {
        roleC: Boolean,
        roleD: Boolean,
        roleU: Boolean,
    }
})

module.exports = mongoose.model("logs", Schema)