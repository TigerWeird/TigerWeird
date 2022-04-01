const Discord = require("discord.js");
const { wrongEn, wrongEs } = require("../../Src/Json/used.json");

module.exports = {
  name: "say",
  alias: ["decir"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {

  const msg = args.join(" ");
  const permsBot = message.guild.me.permissions.has("MANAGE_MESSAGES");
  const linksRegex = /((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi;

  const ifNotPerms = async () => {
    if(!permsBot){
      send(message, `${msg}`, [], [], [], ["users"]);
    } else {
      send(message, `${msg}`, [], [], [], ["users"]);
      message.delete();
    }
  }
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    if(!msg) return reply(message, wrongEn + "\`What do you want me to say?\`");
    if(linksRegex.test(msg)) return reply(message, wrongEn + `\`I can't send links\`.`);
    if(msg.length >= 1024) return reply(message, wrongEn + "\`You cannot send more than 1024 characters\`.");
    ifNotPerms();
  } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    if(!msg) return reply(message, wrongEs + "\`¿Que quieres que diga?\`");
    if(linksRegex.test(msg)) return reply(message, wrongEn + `\`No puedo enviar links\`.`);
    if(msg.length >= 1024) return reply(message, wrongEs + "\`You cannot send more than 1024 characters\`.");
    ifNotPerms();
  }
//------------------------------------------------------------------------
  }
}