const Discord = require('discord.js');
const devConfig = require("../../Models/devConfig.js");
// const Logs = require("../../Models/setlogs.js");
// const Lang = require("../../Models/langdb.js");

module.exports = async (client, message) => {
/*
  const idioma = await Lang.findOne({ guildID: message.guild.id });
  const mant = await Mntnce.findOne({ clientID: client.user.id });
  const lgs = await Logs.findOne({ guildID: message.guild.id });

//--------------------------------------------------------------------------------
  const event = async () => {
    client.snipes = new Map()
  
    client.snipes.set(message.channel.id, {
      content: message.content,
      delete: message.author,
      canal: message.channel,
    })
//-------------------------------------------------------
    if(!lgs) return;
    if(lgs.messages.msgD == false) return;
    const logschannel = message.guild.channels.cache.get(lgs.channelID);
    if(!logschannel) return;
    if(!logschannel.permissionsFor(client.user.id).has(
      ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;
    if(!message.content) return;
    //-------------------------------
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: `MukaBot - Logs`, iconURL: client.user.displayAvatarURL() })
    .setThumbnail(message.author.displayAvatarURL())
    .setColor("ORANGE")
    .setTimestamp()
//--------------------------------------------------------------------------------
    const english = async () => {
      logschannel.send({ embeds: [embed
        .addField("➮ | User:", `- **__ID__**: \`${message.author.id}\`.
        - **__Tag__**: \`${message.author.tag}\`.`)
        .addField("➮ | Details:", `- **__ID__**: \`${message.id}\`.
- **__Date__**: <t:${Math.round(message.createdTimestamp / 1000)}:D>
- **__Channel__**: <#${message.channel.id}> (\`${message.channel.id}\`)
- **__Content__**: ${message.content}`)
        .setFooter({ text: "Message Delete." })
      ] });
    }
//-------------------------------------------------------
  if(!idioma) { return english() } else 
  if(idioma.lang == "en") { return english() } else 
  if(idioma.lang == "es") {
    logschannel.send({ embeds: [embed
      .addField("➮ | Usuario:", `- **__ID__**: \`${message.author.id}\`.
      - **__Tag__**: \`${message.author.tag}\`.`)
      .addField("➮ | Detalles:", `- **__ID__**: \`${message.id}\`.
- **__Hace__**: <t:${Math.round(message.createdTimestamp / 1000)}:D>
- **__Canal__**: <#${message.channel.id}> (\`${message.channel.id}\`)
- **__Contenido__**: ${message.content}`)
      .setFooter({ text: "Mensaje Borrado." })
    ] });
  }
//-------------------------------------------------------
  }
//--------------------------------------------------------------------------------
  const maintenance = async () => {
    if(message.guild.id == "717240720758669363") return event();
    if(!mant) return event();
    if(mant.mMode == "off") return event();
    if(mant.mMode == "on") return;
  }
  return maintenance();
  */
//--------------------------------------------------------------------------------
}