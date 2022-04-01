const Discord = require('discord.js');
const devConfig = require("../../Models/devConfig.js");
// const Logs = require("../../Models/setlogs.js");
// const Lang = require("../../Models/langdb.js");

module.exports = async (client, role) => {
/*
  const idioma = await Lang.findOne({ guildID: role.guild.id });
  const mant = await Mntnce.findOne({ clientID: client.user.id });
  const lgs = await Logs.findOne({ guildID: role.guild.id });

//--------------------------------------------------------------------------------
  const event = async () => {
    if(!lgs) return;
    if(lgs.roles.roleC == false) return;
    if(!client.channels.cache.get(lgs.channelID)) return;
    const logschannel = client.channels.cache.get(lgs.channelID);
    const audit = await role.guild.fetchAuditLogs({
      limit: 1,
      type: 'GUILD_ROLE_CREATE',
    });
    const roleLog = audit.entries.first();
    if(!logschannel.permissionsFor(client.user.id).has(
      ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;
    //-------------------------------
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: `MukaBot - Logs`, iconURL: client.user.displayAvatarURL() })
    .setThumbnail(roleLog.executor.displayAvatarURL())
    .setColor("GREEN")
    .setTimestamp()
//--------------------------------------------------------------------------------
    const english = async () => {
      logschannel.send({ embeds: [embed
        .addField("➮ | User:", `- **__ID__**: \`${roleLog.executor.id}\`.
- **__Tag__**: \`${roleLog.executor.tag}\`.`)
        .addField("➮ | Details:", `- **__Role__**: <@&${role.id}> (\`${role.id}\`)
- **__Date__**: <t:${Math.round(role.createdTimestamp / 1000)}:D>`)
        .setFooter({ text: "Role Create." })
      ] });
    }
//-------------------------------------------------------
    if(!idioma) { return english() } else 
    if(idioma.lang == "en") { return english() } else 
    if(idioma.lang == "es") {
      logschannel.send({ embeds: [embed
        .addField("➮ | Usuario:", `- **__ID__**: \`${roleLog.executor.id}\`.
- **__Tag__**: \`${roleLog.executor.tag}\`.`)
        .addField("➮ | Detalles:", `- **__Rol__**: <@&${role.id}> (\`${role.id}\`)
- **__Hace__**: <t:${Math.round(role.createdTimestamp / 1000)}:D>`)
    .setFooter({ text: "Rol Creado." })
  ] });
}
//-------------------------------------------------------
}
//--------------------------------------------------------------------------------
const maintenance = async () => {
  if(role.guild.id == "717240720758669363") return event();
  if(!mant) return event();
  if(mant.mMode == "off") return event();
  if(mant.mMode == "on") return;
}
return maintenance();*/
//--------------------------------------------------------------------------------
}