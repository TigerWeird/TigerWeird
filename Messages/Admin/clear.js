const Discord = require("discord.js");
const { ee, ev, wrongEn, wrongEs } = require("../../Src/Json/used.json");

module.exports = {
  name: "clear",
  alias: ["purge"],
  botPerms: ["MANAGE_MESSAGES"],
  userPerms: ["MANAGE_MESSAGES"],

async execute (client, message, args, guildC, reply, editReply, send) {

  const deleteMessages = args[0];

//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    if(!deleteMessages || isNaN(deleteMessages)) return await reply(message, 
      wrongEs + "\`You must give me a valid messages number\`.");
    if(Math.round(deleteMessages) <= 2 || Math.round(deleteMessages) >= 100) return await reply(message, 
      wrongEs + "\`The number of messages to delete must be between 2 and 100\`.");
    //----------------------------------------------------------
    try {
      message.channel.bulkDelete(Math.round(deleteMessages));
    } catch (e) {
      return await reply(message, wrongEs + "\`I can't delete messages with more than 14 days of creation\`.");
    }
    //----------------------------------------------------------
    await reply(message, ev + `*I successfully deleted \`${Math.round(deleteMessages)}\` messages! <3*`);
  }
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es") {
    if(!deleteMessages || isNaN(deleteMessages)) return await reply(message, 
      wrongEn + "\`Debes darme un número de mensajes válido\`.");
    if(Math.round(deleteMessages) <= 2 || Math.round(deleteMessages) >= 100) return await reply(message, 
      wrongEn + "\`El número de mensajes a borrar debe ser entre 2 y 100\`.");
    //----------------------------------------------------------
    try {
      message.channel.bulkDelete(Math.round(deleteMessages));
    } catch (e) {
      return await reply(message, wrongEn + "\`No puedo borrar mensajes con más de 14 días de creación\`.");
    }
    //----------------------------------------------------------
    await reply(message, ev + `*Eliminé correctamente \`${Math.round(deleteMessages)}\` mensajes! <3*`);
  }
//------------------------------------------------------------------------
  }
}