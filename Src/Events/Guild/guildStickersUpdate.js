const Discord = require('discord.js');
const devConfig = require("../../Models/devConfig.js");

module.exports = async (client, emoji) => {
  return;
  const mant = await Mntnce.findOne({ clientID: client.user.id })

//--------------------------------------------------------------------------------
  const event = async () => {
  }
//--------------------------------------------------------------------------------
  const maintenance = async () => {
    if(emoji.guild.id == "717240720758669363") return event();
    if(!mant) return event();
    if(mant.mMode == "off") return event();
    if(mant.mMode == "on") return;
  }
//--------------------------------------------------------------------------------
}