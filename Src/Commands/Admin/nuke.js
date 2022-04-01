const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ev, er, noPermsEn, noPermsEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("nuke")
    .setDescription("I will delete all messages from the current channel."),

async execute(client, interaction, guildC) {

    const perms = interaction.member.permissions.has("MANAGE_CHANNELS");
    const botPerms = interaction.guild.me.permissions.has("MANAGE_CHANNELS");
    const channelPosition = interaction.channel.position;
    //---------------------------------
    const clone = async (msg) => {
        await interaction.channel.clone().then(async canal => {
            await canal.setPosition(channelPosition).catch(() => {});
            await interaction.channel.delete().catch(() => {});

            canal.send({ content: ev + `*${msg} \`${interaction.user.tag}\`*` }).catch(() => {});
        }).catch(() => {});;
    }

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!perms) return interaction.reply({ content: noPermsEn.noPerms + `\`Manage Channels\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEn.noBotPerms + `\`Manage Channels\`.`, ephemeral: true });
        interaction.reply({ content: er + "*All messages in the channel will be deleted in a few seconds!*", ephemeral: true });

        setTimeout(async () => {
            await clone("Channel nuked by").catch(() => {})
        }, 3000);
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!perms) return interaction.reply({ content: noPermsEs.noPerms + `\`Manage Channels\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEs.noBotPerms + `\`Manage Channels\`.`, ephemeral: true });
        interaction.reply({ content: er + "*Todos los mensajes del canal serán borrados en unos segundos!*", ephemeral: true });

        setTimeout(async () => {
            await clone("Canal nukeado por").catch(() => {})
        }, 3000);
    }
//------------------------------------------------------------------------
    }
}