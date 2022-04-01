const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ev, noPermsEn, noPermsEs, wrongEn, wrongEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("slowmode")
    .setDescription("Set current channel slow.")
    .addIntegerOption(option => option.setName("time").setDescription("Slowmode time.").setRequired(true) ),

async execute(client, interaction, guildC) {

    const tiempo = interaction.options.getInteger("time");
    const perms = interaction.guild.me.permissions.has("MANAGE_CHANNELS");
    const botPerms = interaction.member.permissions.has("MANAGE_CHANNELS");

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!perms) return interaction.reply({ content: noPermsEn.noPerms + `\`Manage Channels\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEn.noBotPerms + `\`Manage Channels\`.`, ephemeral: true });

        if(tiempo > 21600){
            return interaction.reply({ content: wrongEn + "\`\`.", ephemeral: true });
        } else if(tiempo == 0){
            interaction.channel.setRateLimitPerUser(0);
            return interaction.reply({ content: ev + "*!*", ephemeral: true });
        } else {
            interaction.channel.setRateLimitPerUser(tiempo);
            return interaction.reply({ content: ev + `* \`${tiempo}\` !*`, ephemeral: true });
        }
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!perms) return interaction.reply({ content: noPermsEs.noPerms + `\`Manage Channels\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEs.noBotPerms + `\`Manage Channels\`.`, ephemeral: true });

        if(tiempo > 21600){
            return interaction.reply({ content: wrongEs + "\`Debes darme un número entre 0 y 21600 para el modo lento\`.", ephemeral: true });
        } else if(tiempo == 0){
            interaction.channel.setRateLimitPerUser(0);
            return interaction.reply({ content: ev + "*El modo lento ha sido desactivado correctamente!*", ephemeral: true });
        } else {
            interaction.channel.setRateLimitPerUser(tiempo);
            return interaction.reply({ content: ev + `*El modo lento ha sido establecido en \`${tiempo}\` correctamente!*`, ephemeral: true });
        }
    }
//------------------------------------------------------------------------
    }
}