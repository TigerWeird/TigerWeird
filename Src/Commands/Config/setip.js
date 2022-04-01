const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const guildConfig = require("../../Models/guildConfig.js");
const { ee, ev, noPermsEn, noPermsEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("setip")
    .setDescription("Set the server ip.")
    .addStringOption(option => option.setName("ip").setDescription("The ip of the server.").setRequired(true) ),

async execute(client, interaction, guildC) {

    const perms = interaction.member.permissions.has("MANAGE_CHANNELS");
    const newIp = interaction.options.getString("ip");
    const changeIp = new guildConfig({ guildID: interaction.guild.id, ip: newIp });

    const setIp = async (noPerms, msg) => {
        if(!perms) return interaction.reply({ content: noPerms + `\`Manage Channels\`.`, ephemeral: true });
        guildC ? await guildConfig.updateOne({ guildID: interaction.guild.id }, { ip: newIp }) : await changeIp.save();
        interaction.reply({ content: ev + `${msg} \`${newIp}\`. <3` });
    }
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        return setIp(noPermsEn.noPerms, `The server ip was set to`);
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es") {
        return setIp(noPermsEs.noPerms, `La ip del servidor fue establecida en`);
    }
//------------------------------------------------------------------------
    }
}