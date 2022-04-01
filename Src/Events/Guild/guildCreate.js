const Discord = require('discord.js');

module.exports = async (client, guild) => {

  if (!guild.name || !guild.memberCount) return;

  const newsv = new Discord.MessageEmbed()
  .setTitle(`📈 | Estoy en una nueva guild:`)
  .addField("➮ | General:", `- **__Guild__**: \`${guild.name}\` - (\`${guild.id}\`)
- **__Owner__**: \`${(await guild.fetchOwner()).user.tag}\` - \`(${(await guild.fetchOwner()).user.id})\`. <:owner:848265994748297247>
- **__Creación__**: <t:${Math.floor(new Date(guild.createdTimestamp).getTime() / 1000)}:D> - (<t:${Math.floor(new Date(guild.createdTimestamp).getTime() / 1000)}:R>).`, false)
  .addField("➮ | Stats:", `- **__Miembros__**: \`${guild.memberCount}\`. <:users:848269507797057539>
- **__Guilds__**: \`${client.guilds.cache.size}\`.`, true)
  .setTimestamp()
  .setThumbnail(guild.iconURL())
  .setFooter({ text: "Crecimos un poco más!" })
  .setColor("PURPLE")
  client.channels.cache.get("858175878583681094").send({ embeds: [newsv] });

}