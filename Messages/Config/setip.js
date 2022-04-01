const Discord = require("discord.js");
const guildConfig = require("../../Src/Models/guildConfig.js");
const { ev, wrongEn, wrongEs } = require("../../Src/Json/used.json");

module.exports = {
  name: "setip",
  alias: [],
  botPerms: [],
  userPerms: ["MANAGE_CHANNELS"],

async execute (client, message, args, guildC, reply, editReply, send) {

    const newIp = args[0];
    const changeIp = new guildConfig({ guildID: message.guild.id, ip: newIp });

    const setIp = async (wrong, msg, noIp) => {
        if(!newIp) return await reply(message, wrong + `\`${noIp}\``);
        guildC ? await guildConfig.updateOne({ guildID: message.guild.id }, { ip: newIp }) : await changeIp.save();
        await reply(message, ev + `*${msg} \`${newIp}\`. <3*`);
    }
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        return setIp(wrongEn, `The server ip was set to`, ``);
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es") {
        return setIp(wrongEs, `La ip del servidor fue establecida en`, `Debes darme la ip del servidor para poder establecerla!`);
    }
//------------------------------------------------------------------------
    }
}