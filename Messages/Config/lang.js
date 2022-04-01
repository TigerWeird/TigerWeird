const Discord = require("discord.js");
const guildConfig = require("../../Src/Models/guildConfig.js");
const { ev, wrongEn, wrongEs } = require("../../Src/Json/used.json");

module.exports = {
  name: "lang",
  alias: ["idioma"],
  botPerms: [],
  userPerms: ["MANAGE_GUILD"],

async execute (client, message, args, guildC, reply, editReply, send) {

  const lang = args[0];
  const newLangEn = new guildConfig({ guildID: message.guild.id, lang: "en" });
  const newLangEs = new guildConfig({ guildID: message.guild.id, lang: "es" });

  const setLang = async (wrong, msg) => {
    if(['english', 'en'].includes(lang) || !lang){
      guildC ? await guildConfig.updateOne({ guildID: message.guild.id }, { lang: "en" }) : await newLangEn.save();
      await reply(message, ev + `*Now my main language in this server is \`English\`! <3*`);
    } else
    if(['español', 'es'].includes(lang)){
      guildC ? await guildConfig.updateOne({ guildID: message.guild.id }, { lang: "es" }) : await newLangEs.save();
      await reply(message, ev + `*Ahora mi idioma principal en este servidor es \`Español\`! <3*`);
    } else {
      return await reply(message, wrong + msg)
    }
  }
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    return setLang(wrongEn, `\`\`.`);
  } else 
//-----------------------------------
  if(guildC?.config?.lang == "es") {
    return setLang(wrongEs, `\`El idioma debe ser inglés (english, en) o español (español, es)\`.`);
  }
//------------------------------------------------------------------------
  }
}