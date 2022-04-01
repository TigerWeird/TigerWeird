const Discord = require("discord.js");
const { ev, wrongEn, wrongEs } = require("../../Src/Json/used.json");

module.exports = {
  name: "md",
  alias: ["dm", "senddm", "sendmd"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {

  const user = message.mentions.users.first();
  const msg = args.slice(1).join(" ");
  const resolve = message.guild.members.resolve(per.id);
  const userFetched = client.users?.fetch(user.id);

//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    if(userFetched.bot || !resolve || !user || 
      userFetched.id == message.author.id) return reply(message, 
        wrongEn + `\`You must mention a valid user to dm\`.`);
    if(!msg) return reply(message, wrongEn + "\`What do you want send?\`.");
    if(msg.length >= 1024) return reply(message, wrongEn + "\`You cannot send more than 1024 characters\`.");
    try {
      userFetched.send(message, `${msg}\n\n> \`${message.author.tag}\``);
    } catch (e) {
      return reply(message, wrongEn + `I can't DM \`${userFetched.tag}\`.`);
    }
    reply(message, ev + `*I successfully sent the md to \`${userFetched.tag}\`! <3*`);
    message.delete().catch(() => {});
  } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    if(userFetched.bot || !resolve || !user || 
      userFetched.id == message.author.id) return reply(message, 
        wrongEs + `\`Debes mencionar a un usuario válido para enviar el md\`.`);
    if(!msg) return reply(message, wrongEn + "\`¿Que quieres enviar?\`.");
    if(msg.length >= 1024) return reply(message, wrongEs + "\`No puedes enviar más de 1024 caracteres\`.");
    try {
      userFetched.send(message, `${msg}\n\n> \`${message.author.tag}\``);
    } catch (e) {
      return reply(message, wrongEs + `No pude enviarle el md a \`${userFetched.tag}\`.`);
    }
    reply(message, ev + `*Le envié correctamente el md a \`${userFetched.tag}\`! <3*`);
    message.delete().catch(() => {});
  }
//------------------------------------------------------------------------
  }
}