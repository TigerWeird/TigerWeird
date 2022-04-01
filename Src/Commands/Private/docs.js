const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const fetch = require('node-fetch');
const { ee, ev, wrongEn, wrongEs } = require("../../Json/used.json");
const devConfig = require("../../Models/devConfig.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("docs")
    .setDescription("Muestra las docs de djs (Dev).")
    .addStringOption(option => option.setName("src").setDescription("Recurso"))
    .addStringOption(option => option.setName("cont").setDescription("Contenido")),

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

    let src = '', cont = '';

    if(["stable", "master", "commando", "rpc", "akairo", "akairo-master", "collection"].includes(interaction.options.getString("src"))) {
        src = interaction.options.getString("src");
        cont = interaction.options.getString("cont");
    } else {
        src = 'stable';
        cont = interaction.options.getString("cont");
    }
    fetch(`https://djsdocs.sorta.moe/v2/embed?src=${encodeURIComponent(src)}&q=${encodeURIComponent(cont)}`)
    .then(r => r.json())
    .then(res => {
        interaction.reply({ embeds: [new Discord.MessageEmbed(res)], ephemeral: true })
    })
    .catch(async err => await
        interaction.reply({ content: 'Ha ocurrido un error:\n\n' + `\`\`\`js
${err.message}\`\`\``, ephemeral: true }))
//------------------------------------------------------------------------
    }
}