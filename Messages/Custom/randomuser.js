const Discord = require("discord.js");
const { er } = require("../../Src/Json/used.json");

module.exports = {
  name: "randomuser",
  alias: ["ruser", "userrandom", "usuariorandom", "ru", "rus"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {

  const member = message.guild.members.cache.map(m => m);
  const randomUser = member[Math.floor(Math.random() * member.length)];
  const embed = new Discord.MessageEmbed()
  .setAuthor({ name: " | MukaBot - RandomUser", iconURL: client.user.avatarURL()})
  .setColor("RANDOM")
  .setTimestamp()

//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    const msg = reply(message, er + `*Picking a random user...*`);

    setTimeout(() => {
      editReply(msg, " ", [embed
        .setDescription(`I think I'll choose:\n\`${randomUser.user.tag}\``)
        .setFooter({ text: "Did I choose well?" })
      ]).catch(() => {});
    }, 3000);
  } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    const msg = reply(message, er + `*Eligiendo un usuario al azar...*`);

    setTimeout(() => {
      editReply(msg, " ", [embed
        .setDescription(`Creo que elejiré a:\n\`${randomUser.user.tag}\``)
        .setFooter({ text: "¿Elegí bien?" })
      ]).catch(() => {});
    }, 3000);
  }
//------------------------------------------------------------------------
  }
}