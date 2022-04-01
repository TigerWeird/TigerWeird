const Discord = require("discord.js");
const { ev, wrongEn, wrongEs } = require("../../Src/Json/used.json")

module.exports = {
  name: "fakeban",
  alias: ["banfalso"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {

    const user = message.mentions.users.first();
    const resolveUser = interaction.guild.members.resolve(user.id);

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!user || user.id == interaction.user.id || 
            !interaction.guild.members.resolve(user.id)) return interaction.reply(message, 
                wrongEn + `\`You must mention a valid user to troll\`.`);
        //-----------------------------------------------------
        const msg = await reply(message, er + `*\`${user.username}\` will be banned in 3...*`);
        setTimeout(async () => {
            await editReply(msg, er + `*\`${user.username}\` will be banned in 2...*`).catch(() => {});
        }, 3000);
        setTimeout(async () => {
            await editReply(msg, er + `*\`${user.username}\` will be banned in 1...*`).catch(() => {});
        }, 6000);
        setTimeout(async () => {
            await editReply(msg, ev + `*\`${user.username}\` has been trolled!*
https://media.discordapp.net/attachments/847608964270129182/941566846660935731/Troleador_cara.mp4`).catch(() => {});
        }, 9000);
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!user || user.id == interaction.user.id || 
            !resolveUser) return await reply(message, 
                wrongEs + `\`Debes mencionar a un usuario válido para trollear\`.`);
        //-----------------------------------------------------
        const msg = interaction.reply(message, er + `*\`${user.username}\` será baneado en 3...*`);
        setTimeout(async () => {
            await editReply(msg, er + `*\`${user.username}\` será baneado en 2...*`).catch(() => {});
        }, 3000);
        setTimeout(async () => {
            await editReply(msg, er + `*\`${user.username}\` será baneado en 1...*`).catch(() => {});
        }, 6000);
        setTimeout(async () => {
            await editReply(msg, ev + `*\`${user.username}\` ha sido trolleado!*
https://media.discordapp.net/attachments/847608964270129182/941566846660935731/Troleador_cara.mp4`).catch(() => {});
        }, 9000);
    }
//------------------------------------------------------------------------
    }
}