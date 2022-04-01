const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
// const ALinks = require("../../Models/alinks.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("antilinks")
    .setDescription("Turn on/off antilinks.")
    .addStringOption(option => option.setName("mode").setDescription("On/Off Antilinks.").setRequired(true)
        .addChoice('on', 'on')
        .addChoice('off', 'off') ),
    async execute(client, interaction, guildC) {
/*
    let alnks = await ALinks.findOne({ guildID: interaction.guild.id })
    let p = interaction.member.permissions.has("MANAGE_CHANNELS")
    let bp = interaction.guild.me.permissions.has("MANAGE_MESSAGES")
    let op = interaction.options.getString("mode")
    let docn = new Lang({ guildID: interaction.guild.id, lang: 'on' })
    let docf = new Lang({ guildID: interaction.guild.id, lang: 'off' })

//------------------------------------------------------------------------
    const english = async () => {
        if(!p) return interaction.reply({ content: npn, ephemeral: true });
        if(!bp) return interaction.reply({ content: ee + `I need permission \`Manage Messages\` to use this command.`, ephemeral: true });
        if(op == "on") {
            alnks ? await ALinks.updateOne({ guildID: interaction.guild.id }, { aLinks: 'on' }) : await docn.save();
            interaction.reply({ content: ev + `The antilinks system was \`Activated.\`` });
        } else
        if (op == "off") {
            alnks ? await ALinks.updateOne({ guildID: interaction.guild.id }, { lang: 'off' }) : await docf.save();
            interaction.reply ({content: ev + `Antilinks system was \`Disabled.\`` })
        }
    }
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") { return english(); } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!p) return interaction.reply({ content: nps, ephemeral: true });
        if(!bp) return interaction.reply({ content: ee + `Necesito el permiso \`Gestionar Mensajes\` para usar este comando.`, ephemeral: true });
        if(op == "on") {
            alnks ? await ALinks.updateOne({ guildID: interaction.guild.id }, { aLinks: 'on' }) : await docn.save();
            interaction.reply({ content: ev + `El sistema antilinks fue \`Activado.\`` });
        } else 
        if(op == "off") {
            alnks ? await ALinks.updateOne({ guildID: interaction.guild.id }, { lang: 'off' }) : await docf.save();
            interaction.reply({ content: ev + `El sistema antilinks fue \`Desactivado.\`` });
        }
}*/
//------------------------------------------------------------------------
    }
}