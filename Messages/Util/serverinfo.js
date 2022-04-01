const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Src/Json/used.json")

module.exports = {
  name: "serverinfo",
  alias: ["server", "svinfo"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {

  let icon = message.guild.iconURL({dynamic: true}) ?? "Sin icono."
  var x = message.guild.channels.cache;
  var chat = x.filter(c => c.type == `GUILD_TEXT`).size
  var voz = x.filter(c => c.type == `GUILD_VOICE`).size
  var total = x.filter(c => c.type == 'GUILD_TEXT' || c.type == 'GUILD_VOICE').size;

//------------------------------------------------------------------------
if(!idioma || idioma.lang == 'en'){
  const emen = new Discord.MessageEmbed()
  .setThumbnail(icon)
  .setAuthor(message.guild.name, message.guild.iconURL())
  .addField(`**ID:**`, message.guild.id, true)
  .addField('**Owner**', `${(await message.guild.fetchOwner()).user.tag} <:owner:848265994748297247>`, true)
  .addField(`**Creation date:**`, message.guild.joinedAt.toDateString())
  .addField(`**Members:**`, `<:users:848269507797057539> ${message.guild.memberCount}`, true)
  .addField(`**Channels:** `, `Total: **${total}**\n<:text:848269508194861076> Text: **${chat}**\n<:voice:848269508102979585> Voice: **${voz}**`, true)
  .addField(`**Additional:**`, `Roles: **${message.guild.roles.cache.size}**\nEmojis: **${message.guild.emojis.cache.size}**\nRegion: **${message.guild.region}**`, true)
  .addField(`**Other:**`, ` - Boosts: **${message.guild.premiumSubscriptionCount.toString()}** | \`(Nivel: ${message.guild.premiumTier})\` <:boost:848269508111499274>\n - Verification: **${message.guild.verificationLevel}**`)
  .setTimestamp()
  .setFooter(`Requested by: ${message.author.tag}`)
  .setColor("GREEN")
  message.channel.send({ embeds: [emen] })
}
//------------------------------------------------------------------------
if(idioma.lang == 'es'){
  const emes = new Discord.MessageEmbed()
  .setThumbnail(icon)
  .setAuthor(message.guild.name, message.guild.iconURL())
  .addField(`**ID:**`, message.guild.id, true)
  .addField('**Dueño/a**', `${(await message.guild.fetchOwner()).user.tag} <:owner:848265994748297247>`, true)
  .addField(`**Fecha de creación:**`, message.guild.joinedAt.toDateString())
  .addField(`**Miembros:**`, `<:users:848269507797057539> ${message.guild.memberCount}`, true)
  .addField(`**Canales:** `, `Total: **${total}**\n<:text:848269508194861076> Texto: **${chat}**\n<:voice:848269508102979585> Voz: **${voz}**`, true)
  .addField(`**Adicional:**`, `Roles: **${message.guild.roles.cache.size}**\nEmojis: **${message.guild.emojis.cache.size}**\nRegión: **${message.guild.region}**`, true)    
  .addField(`**Otros:**`, ` - Boosts: **${message.guild.premiumSubscriptionCount.toString()}** | \`(Nivel: ${message.guild.premiumTier})\` <:boost:848269508111499274>\n - Verificación: **${message.guild.verificationLevel}**`)
  .setTimestamp()
  .setFooter(`Solicitado por: ${message.author.tag}`)
  .setColor("GREEN")
  message.reply({ embeds: [emes], allowedMentions: { repliedUser: false } }) 
}
//------------------------------------------------------------------------
    
 }

}