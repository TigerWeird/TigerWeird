const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");
const devConfig = require("../../Models/devConfig.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Command to do tests (Dev)."),

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

    const row1 = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageButton()
            .setCustomId('accept')
            .setLabel('Accept')
            .setStyle('SUCCESS'),
        );
    const row2 = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageButton()
            .setCustomId('deny')
            .setLabel('Deny')
            .setStyle('DANGER'),
        );

//------------------------------------------------------------------------
    interaction.reply({ content: ev + `Test.`, components: [row1, row2], fetchReply: true })

    const filter = i => i.customId === 'accept' && i.user.id == interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

    collector.on('collect', async i => {
    	if (i.customId === 'accept') {
    		await i.update({ content: 'El botón fue clickeado!', components: [] });
    	}
    });
//------------------------------------------------------------------------
    const filter2 = x => x.customId === 'deny' && x.user.id == interaction.user.id;

    const collector2 = interaction.channel.createMessageComponentCollector({ filter2, time: 15000 });

    collector2.on('collect', async x => {
    	if (x.customId === 'deny') {
    		await x.update({ content: 'El botón NO fue clickeado!', components: [] });
    	}
    });
//------------------------------------------------------------------------
    }
}