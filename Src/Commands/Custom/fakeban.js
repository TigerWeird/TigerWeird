const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { er, ev, wrongEn, wrongEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("fakeban")
    .setDescription("You can troll a friend to think they will bathe him.")
    .addUserOption(option => option.setName("target").setDescription("User you want \"ban\".").setRequired(true) ),

async execute(client, interaction, guildC) {

    const user = interaction.options.getUser('target');
    const resolveUser = interaction.guild.members.resolve(user.id);

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(user.id == interaction.user.id || 
            !interaction.guild.members.resolve(user.id)) return interaction.reply({ content: 
                wrongEn + `\`You must mention a valid user to troll\`.`, ephemeral: true });
        //-----------------------------------------------------
        interaction.reply({ content: er + `*\`${user.username}\` will be banned in 3...*` });
        setTimeout(() => {
            interaction.editReply({ content: er + `*\`${user.username}\` will be banned in 2...*` }).catch(() => {});
        }, 3000);
        setTimeout(() => {
            interaction.editReply({ content: er + `*\`${user.username}\` will be banned in 1...*` }).catch(() => {});
        }, 6000);
        setTimeout(() => {
            interaction.editReply({ content: ev + `*\`${user.username}\` has been trolled!*
https://cdn.discordapp.com/attachments/847608964270129182/859392536090378270/youve_been_trolled.mp4` }).catch(() => {});
        }, 9000);
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(user.id == interaction.user.id || 
            !resolveUser) return interaction.reply({ content: 
                wrongEs + `\`Debes mencionar a un usuario válido para trollear\`.`, ephemeral: true });
        //-----------------------------------------------------
        interaction.reply({ content: er + `*\`${user.username}\` será baneado en 3...*` });
        setTimeout(() => {
            interaction.editReply({ content: er + `*\`${user.username}\` será baneado en 2...*` }).catch(() => {});
        }, 3000);
        setTimeout(() => {
            interaction.editReply({ content: er + `*\`${user.username}\` será baneado en 1...*` }).catch(() => {});
        }, 6000);
        setTimeout(() => {
            interaction.editReply({ content: ev + `*\`${user.username}\` ha sido trolleado!*
https://media.discordapp.net/attachments/847608964270129182/941566846660935731/Troleador_cara.mp4` }).catch(() => {});
        }, 9000);
    }
//------------------------------------------------------------------------
    }
}