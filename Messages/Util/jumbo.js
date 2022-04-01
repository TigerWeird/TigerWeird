const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Src/Json/used.json")

module.exports = {
  name: "jumbo",
  alias: ["emoji"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {

  const emoji = args[0]
  let findEmoji = client.emojis.cache.find(x => x.name === emoji?.split(":")[1])
  const embed = new Discord.MessageEmbed()
  .setImage(findEmoji?.url)
  .setColor("PURPLE")

  const english = async () => {
    if(!emoji) return message.reply({ content: ee + `You must give me a emoji. :(`, allowedMentions: { parse: [] } })
      if(!findEmoji) return message.reply({ content: ee + `Could not find this emoji. :(`, allowedMentions: { parse: [] } })
      message.reply({ embeds: [embed
        .setAuthor({ name: `This is your emoji:`, iconURL: message.author.displayAvatarURL() })
        .setFooter({ text: `What a cute emoji. <3` })
      ], allowedMentions: { parse: [] } })
  }
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") { return english(); } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    if(!emoji) return message.reply({ content: ee + `Debes darme un emoji. :(`, allowedMentions: { parse: [] } })
    if(!findEmoji) return message.reply({ content: ee + `No pude encontrar ese emoji. :(`, allowedMentions: { parse: [] } })
    message.reply({ embeds: [embed
      .setAuthor({ name: `Este es tu emoji:`, iconURL: message.author.displayAvatarURL() })
      .setFooter({ text: `Que emoji tan bonito. <3` })
    ], allowedMentions: { parse: [] } })
}
//------------------------------------------------------------------------
    
 }

}