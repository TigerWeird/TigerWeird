const Discord = require('discord.js');
const devConfig = require("../../Models/devConfig.js");
// const Logs = require("../../Models/setlogs.js");
// const Lang = require("../../Models/langdb.js");

module.exports = async (client, oldMsg, newMsg) => {
/*
  const idioma = await Lang.findOne({ guildID: oldMsg.guild.id });
  const mant = await Mntnce.findOne({ clientID: client.user.id });
  const lgs = await Logs.findOne({ guildID: oldMsg.guild.id });

  if(mant.mMode == "on") return;
  if(!lgs) return;
  if(lgs.messages.msgU == false) return;
  if(!client.channels.cache.get(lgs.channelID)) return;
  const logschannel = client.channels.cache.get(lgs.channelID);
  if(!logschannel.permissionsFor(client.user.id).has(
    ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;
  if(oldMsg.content == newMsg.content) return;
  if(!oldMsg.content && !newMsg.content) return;
  if(!oldMsg.content) return;
  if(!newMsg.content) return;
//--------------------------------------------------------------------------------
  const event = async () => {
    //-------------------------------
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: `MukaBot - Logs`, iconURL: client.user.displayAvatarURL() })
    .setThumbnail(oldMsg.author.displayAvatarURL())
    .setColor("YELLOW")
    .setTimestamp()
//--------------------------------------------------------------------------------
    const english = async () => {
      logschannel.send({ embeds: [embed
        .addField("➮ | User:", `- **__ID__**: \`${oldMsg.author.id}\`.
- **__Tag__**: \`${oldMsg.author.tag}\`.`)
        .addField("➮ | Details:", `- **__ID__**: \`${oldMsg.id}\`.
- **__Date__**: <t:${Math.round(oldMsg.createdTimestamp / 1000)}:D>
- **__Channel__**: <#${oldMsg.channel.id}> (\`${oldMsg.channel.id}\`)
- **__Last Message__**: ${oldMsg.content}
- **__New Message__**: ${newMsg.content}`)
        .setFooter({ text: "Message Update." })
      ] });
    }
//-------------------------------------------------------
  if(!idioma) { return english() } else 
  if(idioma.lang == "en") { return english() } else 
  if(idioma.lang == "es") {
    logschannel.send({ embeds: [embed
      .addField("➮ | Usuario:", `- **__ID__**: \`${oldMsg.author.id}\`.
- **__Tag__**: \`${oldMsg.author.tag}\`.`)
      .addField("➮ | Detalles:", `- **__ID__**: \`${oldMsg.id}\`.
- **__Hace__**: <t:${Math.round(oldMsg.createdTimestamp / 1000)}:D>
- **__Canal__**: <#${oldMsg.channel.id}> (\`${oldMsg.channel.id}\`)
- **__Mensaje Antiguo__**: ${oldMsg.content}
- **__Nuevo Mensaje__**: ${newMsg.content}`)
      .setFooter({ text: "Mensaje Editado." })
    ] });
  }
//-------------------------------------------------------
  }
//--------------------------------------------------------------------------------
  return event();
  */
//--------------------------------------------------------------------------------
}