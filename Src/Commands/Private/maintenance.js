const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");
const devConfig = require("../../Models/devConfig.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("maintenance")
    .setDescription("Put Muka in maintenance mode (Dev).")
    .addStringOption(option => option.setName("mode").setDescription("Turn off/on maintenance mode.").setRequired(true)
        .addChoice('on', 'on')
        .addChoice('off', 'off') ),

async execute(client, interaction, guildC) {

    const devC = devConfig.findOne({ clientID: client.user.id });

    if(guildC?.config?.lang == "en") {
        if(devC?.config?.devList.includes(message.author.id)) return interaction.reply({ content: 
            wrongEn + `\`You are not allowed for use this command\`.`, ephemeral: true });
    } else 
    if(guildC?.config?.lang == "es") {
        if(devC?.config?.devList.includes(message.author.id)) return interaction.reply({ content: 
            wrongEs + `\`No estás autorizado a usar este comando\`.`, ephemeral: true });
    }

    /*const x = interaction.options.getString("mode")
    const maintenance = await Mntnce.findOne({ clientID: client.user.id })
    let doc = new Mntnce({ clientID: client.user.id, mMode: "on" })
    let doc2 = new Mntnce({ clientID: client.user.id, mMode: "off" })
//---------------------------------------------------
    if(['on'].includes(x)){
        maintenance ? await Mntnce.updateOne({ clientID: client.user.id, mMode: "on" }) : await doc.save()
        interaction.reply({ content: ev + `El modo mantenimiento fue establecido en: \`On\`.` })
    }
    if(['off'].includes(x)){
        maintenance ? await Mntnce.updateOne({ clientID: client.user.id, mMode: "off" }) : await doc2.save()
        interaction.reply({ content: ev + `El modo mantenimiento fue establecido en: \`Off\`.` })
    }*/
//---------------------------------------------------
    }
}