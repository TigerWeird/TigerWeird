const Discord = require("discord.js");
const { ev, wrongEn, wrongEs } = require("../../Src/Json/used.json");

module.exports = {
  name: "slowmode",
  alias: ["cooldown", "ccooldown", "channelcooldown"],
  botPerms: ["MANAGE_CHANNELS"],
  userPerms: ["MANAGE_CHANNELS"],

async execute (client, message, args, guildC, reply, editReply, send) {

  const tiempo = args[0];

//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    if(Math.round(tiempo) > 21600){
      return await reply(message, wrongEn + "\`\`.");
    } else if(Math.round(tiempo) == 0 || !tiempo){
      await message.channel.setRateLimitPerUser(0).catch(() => {});
      return await reply(message, ev + "*!*");
    } else {
      await message.channel.setRateLimitPerUser(Math.round(tiempo)).catch(() => {});
      return await reply(message, ev + `* \`${Math.round(tiempo)}\` !*`);
    }
  } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    if(Math.round(tiempo) > 21600){
      return await reply(message, wrongEs + "\`Debes darme un número entre 0 y 21600 para el modo lento\`.");
    } else if(Math.round(tiempo) == 0 || !tiempo){
      await message.channel.setRateLimitPerUser(0).catch(() => {});
      return await reply(message, ev + "*El modo lento ha sido desactivado correctamente!*");
    } else {
      await message.channel.setRateLimitPerUser(Math.round(tiempo)).catch(() => {});
      return await reply(message, ev + `*El modo lento ha sido establecido en \`${Math.round(tiempo)}\` correctamente!*`);
    }
  }
//------------------------------------------------------------------------
  }
}