const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Src/Json/used.json")

module.exports = {
  name: "help",
  alias: ["ayuda"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {
/*
  let prefix = await Prfx.findOne({ guildID: message.guild.id })
  const ifilter = i => i.user.id == message.author.id

//------------------------------------------------------------------------
  const english = async () => {
    const row = require('../../Src/JavaScript/en/help/row.js')
    const principal = require('../../Src/JavaScript/en/help/pr.js')
    const rapido = require('../../Src/JavaScript/en/help/rpd.js')
    const antiraid = require('../../Src/JavaScript/en/help/ard.js')
    const config = require('../../Src/JavaScript/en/help/cfg.js')
    const diversion = require('../../Src/JavaScript/en/help/fn.js')
    const moderacion = require('../../Src/JavaScript/en/help/md.js')
    const util = require('../../Src/JavaScript/en/help/utl.js')
    const m = await message.reply({ embeds: [principal
      .setThumbnail(client.user.avatarURL())], components: [row], fetchReply: true, allowedMentions: { repliedUser: false } })
    const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 })

    collector.on("collect", async i => {
      if(i.values[0] == "1"){
        i.update({ embeds: [rapido], components: [row] });
      }
      if(i.values[0] == "2"){
        i.update({ embeds: [antiraid], components: [row] });
      }
      if(i.values[0] == "3"){
        i.update({ embeds: [config], components: [row] });
      }
      if(i.values[0] == "4"){
        i.update({ embeds: [diversion], components: [row] });
      }
      if(i.values[0] == "5"){
        i.update({ embeds: [moderacion], components: [row] });
      }
      if(i.values[0] == "6"){
        i.update({ embeds: [util], components: [row] });
      }
    })
  }
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") { return english(); } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    const row = require('../../Src/JavaScript/es/help/row.js')
    const principal = require('../../Src/JavaScript/es/help/pr.js')
    const rapido = require('../../Src/JavaScript/es/help/rpd.js')
    const antiraid = require('../../Src/JavaScript/es/help/ard.js')
    const config = require('../../Src/JavaScript/es/help/cfg.js')
    const diversion = require('../../Src/JavaScript/es/help/fn.js')
    const moderacion = require('../../Src/JavaScript/es/help/md.js')
    const util = require('../../Src/JavaScript/es/help/utl.js')
    const m = await message.reply({ embeds: [principal
      .setThumbnail(client.user.avatarURL())], components: [row], fetchReply: true, allowedMentions: { repliedUser: false } })
    const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 })

    collector.on("collect", async i => {
      if(i.values[0] == "1"){
        i.update({ embeds: [rapido], components: [row] });
      }
      if(i.values[0] == "2"){
        i.update({ embeds: [antiraid], components: [row] });
      }
      if(i.values[0] == "3"){
        i.update({ embeds: [config], components: [row] });
      }
      if(i.values[0] == "4"){
        i.update({ embeds: [diversion], components: [row] });
      }
      if(i.values[0] == "5"){
        i.update({ embeds: [moderacion], components: [row] });
      }
      if(i.values[0] == "6"){
        i.update({ embeds: [util], components: [row] });
      }
    })
  }*/
  //------------------------------------------------------------------------
 }
}