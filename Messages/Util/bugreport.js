const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Src/Json/used.json")

module.exports = {
  name: "bugreport",
  alias: ["reportbug", "bug"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {

  const bug = args.join(" ")
  const report = async () => {
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: `${message.author.tag}`, iconURL: message.author.displayAvatarURL()})
    .setTitle(`Reporte de bug en \`${message.guild.name}\``)
    .addField(`➮ | Info:`, `- **__GuildID__**: \`${message.guild.id}\`
- **__UserID__**: \`${message.author.id}\``, false)
    .addField(`➮ | Bug:`, `\`\`\`fix\n${bug}\`\`\``, false)
    .setColor("RED")
    .setTimestamp()
    client.channels.cache.get("857385424484696104").send({ embeds: [embed] }).catch(() => {});
  }

//------------------------------------------------------------------------
  const english = async () => {
    if(!bug) return message.reply({ content: ee + "What do you want report?", allowedMentions: { parse: [] } });
    report();
    message.reply({ content: 
      ev + `Thank you for reporting! Our devs will check it out and fix it asap. <3`, allowedMentions: { parse: [] } });
  }
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") { return english(); } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    if(!bug) return message.reply({ content: ee + "¿Que quieres reportar?", allowedMentions: { parse: [] } });
    report();
    message.reply({ content: 
      ev + `Gracias por reportar! Nuestros devs lo revisarán y arreglarán lo más pronto posible. <3`, allowedMentions: { parse: [] } });
  }
//------------------------------------------------------------------------
 }

}