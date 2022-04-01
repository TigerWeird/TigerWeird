const Discord = require('discord.js');
const devConfig = require("../../Models/devConfig.js");

module.exports = async (client, channel) => {
  const types = {
    "GUILD_TEXT": "Text",
    "GUILD_VOICE": "Voice",
    "GUILD_CATEGORY": "Category",
    "GUILD_STAGE_VOICE": "Stage",
    "GUILD_NEWS": "Announcement"
  }
  return client.channels.cache.get("900109530921328710").send({ embeds: [new Discord.MessageEmbed()
  .setDescription(`Tipo: ${types[channel.type]}
Nombre: ${channel.name}
creado: ${channel.createdAt.toString()}
ID: ${channel.id}`)] });

//--------------------------------------------------------------------------------
  const event = async () => {
  }
//--------------------------------------------------------------------------------
  const maintenance = async () => {
    if(channel.guild.id == "717240720758669363") return event();
    if(!mant) return event();
    if(mant.mMode == "off") return event();
    if(mant.mMode == "on") return;
  }
//--------------------------------------------------------------------------------
}