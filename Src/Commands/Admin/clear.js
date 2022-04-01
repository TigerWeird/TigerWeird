const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev, noPermsEn, noPermsEs, wrongEn, wrongEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("clear")
    .setDescription("Delete messages from a channel.")
    .addNumberOption(option => option.setName("amount").setDescription("The number of messages to delete.").setRequired(true) ),

async execute(client, interaction, guildC) {

    const deleteMessages = interaction.options.getNumber("amount");
    const perms = interaction.member.permissions.has("MANAGE_MESSAGES");
    const botPerms = interaction.guild.me.permissions.has("MANAGE_MESSAGES");

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!perms) return interaction.reply({ content: noPermsEn.noPerms + `\`Manage Message\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEn.noBotPerms + `\`Manage Messages\`.`, ephemeral: true });
        if(deleteMessages <= 2 || deleteMessages >= 100) return interaction.reply({ content: 
            wrongEn + "\`The number of messages to delete must be between 2 and 100\`.", ephemeral: true });
        //----------------------------------------------------------
        try {
            interaction.channel.bulkDelete(deleteMessages);
        } catch (e) {
            return interaction.reply({ content: wrongEn + "\`I can't delete messages with more than 14 days of creation\`.", ephemeral: true });
        }
        //----------------------------------------------------------
        interaction.reply({ content: ev + `*I successfully deleted \`${Math.round(deleteMessages)}\` messages! <3*` });
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!perms) return interaction.reply({ content: noPermsEs.noPerms + `\`Manage Message\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEs.noBotPerms + `\`Manage Messages\`.`, ephemeral: true });
        if(deleteMessages <= 2 || deleteMessages >= 100) return interaction.reply({ content: 
            wrongEs + "\`El número de mensajes a borrar debe ser entre 2 y 100\`.", ephemeral: true });
        //----------------------------------------------------------
        try {
            interaction.channel.bulkDelete(deleteMessages);
        } catch (e) {
            return interaction.reply({ content: 
                wrongEs + "\`No puedo borrar mensajes con más de 14 días de creación\`.", ephemeral: true });
        }
        //----------------------------------------------------------
        interaction.reply({ content: ev + `*Eliminé correctamente \`${deleteMessages}\` mensajes! <3*` });
    }
//------------------------------------------------------------------------
    }
}