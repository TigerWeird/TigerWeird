const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
  suggestId: String,
  info: {
    suggestAuthor: {
      type: String,
      default: null
    },
    suggestChannel: {
      type: String,
      default: null
    },
    suggestContent: {
      type: String,
      default: null
    },
    suggestReplied: {
      type: Boolean,
      default: false
    },
  }
})

module.exports = mongoose.model("suggestInfo", Schema)