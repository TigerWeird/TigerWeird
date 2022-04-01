const Discord = require("discord.js");
const guildConfig = require("../../Src/Models/guildConfig.js");

module.exports = {
  name: "sancionchannel",
  alias: [],
  botPerms: [],
  userPerms: ["MANAGE_CHANNELS"],

async execute (client, message, args, guildC, reply, editReply, send) {

  const canal = message.mentions.channels.first();
  //---------------------------------
  const channelIsText = canal?.isText();
  const permsFor = canal?.permissionsFor(message.guild.me)?.has("VIEW_CHANNEL");
  const permsFor2 = canal?.permissionsFor(message.guild.me)?.has("SEND_MESSAGES");
  const permsFor3 = canal?.permissionsFor(message.guild.me)?.has("EMBED_LINKS");

//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    if(!canal || !channelIsText) return await reply(message, wrongEn + "\`You must mention a valid channel to send the reports\`.");
    //---------------------------------------------
    if(!permsFor) return await reply(message, 
      wrongEn + `I need \`View Channel\` permission on channel <#${canal.id}> to run this command.`);
    if(!permsFor2) return await reply(message, 
      wrongEn + `I need \`Send Messages\` permission on channel <#${canal.id}> to run this command.`);
    if(!permsFor3) return await reply(message, 
      wrongEn + `I need \`Embed Links\` permission on channel <#${canal.id}> to run this command.`);
    //---------------------------------------------
    guildC.config.sanctions = canal.id;
    await guildC.save();
    await reply(message, ev + `*Now the sanctions will be sent to <#${canal.id}>! <3*`);
  } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    if(!canal || !channelIsText) return await reply(message, wrongEs + "\`Debes mencionar un canal válido para enviar los reportes\`.");
    //---------------------------------------------
    if(!permsFor) return await reply(message, 
      wrongEs + `Necesito el permiso \`View Channel\` en el canal <#${canal.id}> para ejecutar este comando.`);
    if(!permsFor2) return await reply(message, 
      wrongEs + `Necesito el permiso \`Send Messages\` en el canal <#${canal.id}> para ejecutar este comando.`);
    if(!permsFor3) return await reply(message, 
      wrongEs + `Necesito el permiso \`Embed Links\` en el canal <#${canal.id}> para ejecutar este comando.`);
    //---------------------------------------------
    guildC.config.sanctions = canal.id;
    await guildC.save();
    await reply(message, ev + `*Ahora las sanciones se enviarán a <#${canal.id}>! <3*`);
  }
//------------------------------------------------------------------------
  }
}