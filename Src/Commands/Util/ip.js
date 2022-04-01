const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ip")
    .setDescription("It will show the ip of the server."),

async execute(client, interaction, guildC) {

    const ip = guildC?.config?.ip;

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(ip == null) return interaction.reply({ content: ee + `This server doesn't have any ip set. :(`, ephemeral: true });
        interaction.reply({ content: ev + `The ip of the server is:\n\n> \`${ip}\`.` });
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(ip == null) return interaction.reply({ content: ee + `Este servidor no tiene ningúna ip establecida. :(`, ephemeral: true });
        interaction.reply({ content: ev + `La ip del servidor es:\n\n> \`${ip}\`.` });
    }
//------------------------------------------------------------------------
    }
}