const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Src/Json/used.json")

module.exports = {
  name: "userinfo",
  alias: ["user"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {

    const personamem = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    const personaus = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
    let nick = personamem.nickname
    if(!nick){
      nick = "No nickname"
    }

//------------------------------------------------------------------------
if(guildC?.config?.lang == "en") {
  const uien = new Discord.MessageEmbed()
  .setAuthor(`${personaus.tag}`, personaus.displayAvatarURL())
  .addField(`User:`, `- Tag: **${personaus.tag}**\n- ID: **${personaus.id}**\n- Username: **${personaus.username}**\n- Nickname: **${nick}**`)
  .addField(`Joined:`, `- Discord: **${personamem.user.createdAt.toDateString()}**\n- Server:**${personamem.joinedAt.toDateString()}**`)
  .addField("Roles:", personamem.roles.cache.map(roles => `${roles}`).join(', '))
  .setColor("GREEN")
  .setThumbnail(personaus.displayAvatarURL())
  message.lineReplyNoMention(uien)
}
//------------------------------------------------------------------------
if(guildC?.config?.lang == "es") {
  const uies = new Discord.MessageEmbed()
  .setAuthor(`${personaus.tag}`, personaus.displayAvatarURL())
  .addField(`Usuario:`, `- Tag: **${personaus.tag}**\n- ID: **${personaus.id}**\n- Username: **${personaus.username}**\n- Nickname: **${nick}**`)
  .addField(`Se unió:`, `- Discord: **${personamem.user.createdAt.toDateString()}**\n- Servidor:**${personamem.joinedAt.toDateString()}**`)
  .addField("Roles:", personamem.roles.cache.map(roles => `${roles}`).join(', '))
  .setColor("GREEN")
  .setThumbnail(personaus.displayAvatarURL())
  message.lineReplyNoMention(uies)
}
//------------------------------------------------------------------------
    
 }

}