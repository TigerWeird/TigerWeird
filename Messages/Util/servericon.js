const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Src/Json/used.json")

module.exports = {
  name: "servericon",
  alias: ["icon", "icono", "logo"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {

    const canal = message.channel
    const author = message.author

//------------------------------------------------------------------------
if(guildC?.config?.lang == "en") {
        const icoen = new Discord.MessageEmbed()
        .setAuthor(`Icon of: ${message.guild.name}`, message.guild.iconURL())
        .addField("Link:", `[Click here](${message.guild.iconURL()})`)
        .setFooter(`Requested by: ${message.author.tag}`)
        .setTimestamp()
        .setColor("#f5bf62")
        .setImage(message.guild.iconURL({ dynamic: true, size: 1024}))
        message.channel.send(icoen)
    }
//------------------------------------------------------------------------
if(guildC?.config?.lang == "es") {
        const icoes = new Discord.MessageEmbed()
        .setAuthor(`Icono de: ${message.guild.name}`, message.guild.iconURL())
        .addField("Link:", `[Click aquí](${message.guild.iconURL()})`)
        .setFooter(`Pedido por: ${message.author.tag}`)
        .setTimestamp()
        .setColor("#f5bf62")
        .setImage(message.guild.iconURL({ dynamic: true, size: 1024}))
        message.channel.send(icoes)
    }
//------------------------------------------------------------------------
    
 }

}