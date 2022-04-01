const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Src/Json/used.json")

module.exports = {
  name: "botinfo",
  alias: ["bot", "info"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {

//------------------------------------------------------------------------
if (!idioma || idioma.lang == 'en'){
  const eb = new Discord.MessageEmbed()
  .setAuthor(" | MukaBot info", client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
  .setDescription(`**Hola, Soy ${client.user.username}**, un bot multifuncional comandos muy variados, hasta el momento cuento con estas categorías:
- **Antiraid** ✨
- **Configuración** 🎑
- **Diversión** 🌾
- **Moderación** 🍂
- **Útil** 🌿
Soy un bot que busca ayudar a tu servidor, esta es mi información actual:`)
  .addField("Creation: ", `**__Date__**: *${client.user.createdAt.toDateString()}*
**__By__**: \`TigerWeird#1198\``, true)
  .addField("General:", `- **${Discord.version}** Discord.js 🌵
- **${client.ws.ping}** ms. 🍓
- **${client.commands.size}** commands. 🍁
- **${client.guilds.cache.size}** servers. 🍃`, true)
  .setColor("PURPLE")
  .setTimestamp()
  .setFooter("Thanks for joining your server!")
  message.reply({ embeds: [eb], allowedMentions: { repliedUser: false } })
}
//------------------------------------------------------------------------
if (idioma.lang == 'es'){
  const eb = new Discord.MessageEmbed()
  .setAuthor(" | MukaBot info", client.user.avatarURL())
  .setThumbnail(client.user.avatarURL())
  .setDescription(`**Hola, Soy ${client.user.username}**, un bot multifuncional comandos muy variados, hasta el momento cuento con estas categorías:
- **Antiraid** ✨
- **Configuración** 🎑
- **Diversión** 🌾
- **Moderación** 🍂
- **Útil** 🌿
Soy un bot que busca ayudar a tu servidor, esta es mi información actual:`)
  .addField("Creación: ", `**__Fecha__**: *${client.user.createdAt.toDateString()}*
**__Por__**: \`TigerWeird#1198\``, true)
  .addField("General:", `- **${Discord.version}** Discord.js 🌵
- **${client.ws.ping}** ms. 🍓
- **${client.commands.size}** comandos. 🍁
- **${client.guilds.cache.size}** servers. 🍃`, true)
  .setColor("PURPLE")
  .setTimestamp()
  .setFooter("Gracias por unirme a tu servidor!")
  message.reply({ embeds: [eb], allowedMentions: { repliedUser: false } }) 
}
//------------------------------------------------------------------------

 }

}