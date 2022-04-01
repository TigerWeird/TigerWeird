const Discord = require("discord.js");
const { ev, wrongEn, wrongEs } = require("../../Src/Json/used.json")

module.exports = {
  name: "confession",
  alias: ["confesar", "confession"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {

  const confesion = args.join(" ");
  const confessionChannel = guildC?.config?.confessions;
  const canal = client.channels.cache?.get(confessionChannel);
  const permsFor = canal.permissionsFor(interaction.guild.me).has("VIEW_CHANNEL");
  const permsFor2 = canal.permissionsFor(interaction.guild.me).has("SEND_MESSAGES");
  const permsFor3 = canal.permissionsFor(interaction.guild.me).has("EMBED_LINKS");
  const embed = new Discord.MessageEmbed()
  .setDescription(`\`\`\`> ${confesion}\`\`\``)
  .setTimestamp()
  .setColor("RANDOM")

//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    message.delete().catch(() => {});
    if(!confesion) return reply(message, wrongEn + `\`What do you want confess?\``)
    if(!canal) return reply(message, wrongEn + `\`This server does not have a confession channel\`.`);
    //--------------------------------------------------------
    if(!permsFor) return reply(message, 
      wrongEn + `I need \`View Channel\` permission on channel <#${canal.id}> to run this command.`);
    if(!permsFor2) return reply(message, 
      wrongEn + `I need \`Send Messages\` permission on channel <#${canal.id}> to run this command.`);
    if(!permsFor3) return reply(message, 
      wrongEn + `I need \`Embed Links\` permission on channel <#${canal.id}> to run this command.`);
    if(confesion.length >= 1024) return reply(message, wrongEn + "\`You cannot send more than 1024 characters\`.");
    //--------------------------------------------------------
    canal.send({ embeds: [embed
      .setTitle(`\`Anonymous\` confess:`)
      .setFooter({ text: `By: Anonymous` })
    ] }).catch(() => {});
    reply(message, ev + "*Your confession was sent correctly! <3*");
    message.delete().catch(() => {});
  } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    if(!confesion) return reply(message, wrongEs + `\`¿Que quieres confesar?\``)
    if(!canal) return interaction.reply(message, wrongEs + `\`Este servidor no tiene canal de confesiones\`.`);
    //--------------------------------------------------------
    if(!permsFor) return interaction.reply(message, 
      wrongEs + `Necesito el permiso \`View Channel\` en el canal <#${canal.id}> para ejecutar este comando.`);
    if(!permsFor2) return interaction.reply(message, 
      wrongEs + `Necesito el permiso \`Send Messages\` en el canal <#${canal.id}> para ejecutar este comando.`);
    if(!permsFor3) return interaction.reply(message, 
      wrongEs + `Necesito el permiso \`Embed Links\` en el canal <#${canal.id}> para ejecutar este comando.`);
    if(confesion.length >= 1024) return interaction.reply(message, wrongEs + "\`No puedes enviar más de 1024 caracteres\`.");
    //--------------------------------------------------------
    canal.send({ embeds: [embed
      .setTitle(`\`Anónimo\` confiesa:`)
      .setFooter({ text: `Por: Anónimo` })
    ] }).catch(() => {});
    reply(message, ev + "*Tu confesión fue enviada correctamente! <3*");
    message.delete().catch(() => {});
  }
//------------------------------------------------------------------------
  }
}