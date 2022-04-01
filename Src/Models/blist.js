const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
  userID: String,
  bReason: String,
  bTed: Boolean,
  bAuthor: String,
})

module.exports = mongoose.model("bList", Schema)