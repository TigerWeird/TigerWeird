const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("This is my help menu, where you can learn more about me."),

async execute(client, interaction, guildC) {

    const ifilter = i => i.user.id == interaction.user.id;
    const rowend = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageSelectMenu()
        .setCustomId("info_tecnica")
        .setMinValues(1)
        .setMaxValues(1)
        .setDisabled(true)
    );

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        const row = require('../../JavaScript/en/help/row.js');
        const principal = require('../../JavaScript/en/help/pr.js');
        const rapido = require('../../JavaScript/en/help/rpd.js');
        const antiraid = require('../../JavaScript/en/help/ard.js');
        const config = require('../../JavaScript/en/help/cfg.js');
        const diversion = require('../../JavaScript/en/help/fn.js');
        const moderacion = require('../../JavaScript/en/help/md.js');
        const util = require('../../JavaScript/en/help/utl.js');
        const m = await interaction.reply({ embeds: [principal.setThumbnail(client.user.avatarURL())], components: [row], fetchReply: true });
        const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 });

        collector.on("collect", async i => {
            if(i.values[0] == "1"){
                await i.deferUpdate();
                i.editReply({ embeds: [rapido], components: [row] });
            }
            if(i.values[0] == "2"){
                await i.deferUpdate();
                i.editReply({ embeds: [antiraid], components: [row] });
            }
            if(i.values[0] == "3"){
                await i.deferUpdate();
                i.editReply({ embeds: [config], components: [row] });
            }
            if(i.values[0] == "4"){
                await i.deferUpdate();
                i.editReply({ embeds: [diversion], components: [row] });
            }
            if(i.values[0] == "5"){
                await i.deferUpdate();
                i.editReply({ embeds: [moderacion], components: [row] });
            }
            if(i.values[0] == "6"){
                await i.deferUpdate();
                i.editReply({ embeds: [util], components: [row] });
            }
        })
        collector.on('end', x => {
            interaction.editReply({ components: [rowend] });
        });
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        const row = require('../../JavaScript/es/help/row.js');
        const principal = require('../../JavaScript/es/help/pr.js');
        const rapido = require('../../JavaScript/es/help/rpd.js');
        const antiraid = require('../../JavaScript/es/help/ard.js');
        const config = require('../../JavaScript/es/help/cfg.js');
        const diversion = require('../../JavaScript/es/help/fn.js');
        const moderacion = require('../../JavaScript/es/help/md.js');
        const util = require('../../JavaScript/es/help/utl.js');
        const m = await interaction.reply({ embeds: [principal.setThumbnail(client.user.avatarURL())], components: [row], fetchReply: true });
        const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 });

        collector.on("collect", async i => {
            if(i.values[0] == "1"){
                await i.deferUpdate();
                i.editReply({ embeds: [rapido], components: [row] });
            }
            if(i.values[0] == "2"){
                await i.deferUpdate();
                i.editReply({ embeds: [antiraid], components: [row] });
            }
            if(i.values[0] == "3"){
                await i.deferUpdate();
                i.editReply({ embeds: [config], components: [row] });
            }
            if(i.values[0] == "4"){
                await i.deferUpdate();
                i.editReply({ embeds: [diversion], components: [row] });
            }
            if(i.values[0] == "5"){
                await i.deferUpdate();
                i.editReply({ embeds: [moderacion], components: [row] });
            }
            if(i.values[0] == "6"){
                await i.deferUpdate();
                i.editReply({ embeds: [util], components: [row] });
            }
        });
        collector.on('end', x => {
            interaction.editReply({ components: [rowend] });
        });
    }
//------------------------------------------------------------------------
    }
}