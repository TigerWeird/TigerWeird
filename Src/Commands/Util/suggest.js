const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const suggestInfo = require("../../Models/suggestInfo.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("suggest")
    .setDescription("Make a suggestion for the server.")
    .addStringOption(option => option.setName("suggestion").setDescription("The reason for the report.").setRequired(true) ),

async execute(client, interaction, guildC) {

    interaction.deferReply({ ephemeral: true });
    const suggestionContent = interaction.options.getString("suggestion");
    const canalSuggest = guildC?.config?.suggestions;
    const channel = interaction.guild.channels.cache.resolve(canalSuggest);
    const canal = client.channels.cache.get(canalSuggest);
    const permsFor = canal.permissionsFor(client.user.id).has("VIEW_CHANNEL");
    const permsFor2 = canal.permissionsFor(client.user.id).has("SEND_MESSAGES");
    const permsFor3 = canal.permissionsFor(client.user.id).has("EMBED_LINKS");
    const permsFor4 = canal.permissionsFor(client.user.id).has("ADD_REACTIONS");
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: ` | ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
    .setDescription(`${suggestionContent}`)
    .setColor("BLUE")
    .setTimestamp()

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!channel) return interaction.reply({ content: ee + "This server doesn't count with a suggestions channel. :(", ephemeral: true })
        if(!permsFor) return interaction.reply({ content: ee + `I need \`View Channel\` permission on channel <#${canal.id}> to run this command. :(`, ephemeral: true });
        if(!permsFor2) return interaction.reply({ content: ee + `I need \`Send Messages\` permission on channel <#${canal.id}> to run this command. :(`, ephemeral: true });
        if(!permsFor3) return interaction.reply({ content: ee + `I need \`Embed Links\` permission on channel <#${canal.id}> to run this command. :(`, ephemeral: true });
        if(!permsFor4) return interaction.reply({ content: ee + `I need \`Add Reactions\` permission on channel <#${canal.id}> to run this command. :(`, ephemeral: true });

        await canal.send({ embeds: [embed
            .setTitle(`> **__New suggestion__**:`)
            .setFooter({ text: `Suggestion for: ${interaction.guild.name}` })
        ] }).then(async msg => {
            const sugInfo = new suggestInfo({
                suggestId: msg.id,
                suggestAuthor: interaction.user.id,
                suggestChannel: canalSuggest,
                suggestContent: `${suggestionContent}`,
                suggestReplied: false
            });
            await sugInfo.save();
            await msg.react('850499690243162173').catch(() => {});
            await msg.react('850499690364928060').catch(() => {});
            await msg.react('850499689232859168').catch(() => {});
        });
        setTimeout(() => {
            interaction.editReply({ content: ev + `Your suggestion has been sent successfully.` });
        }, 2000);
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!channel) return interaction.reply({ content: ee + "Este servidor no tiene canal de sugerencias. :(", ephemeral: true });
        if(!permsFor) return interaction.reply({ content: ee + `Necesito el permiso \`View Channel\` en el canal <#${canal.id}> para ejecutar este comando. :(`, ephemeral: true });
        if(!permsFor2) return interaction.reply({ content: ee + `Necesito el permiso \`Send Messages\` en el canal <#${canal.id}> para ejecutar este comando. :(`, ephemeral: true });
        if(!permsFor3) return interaction.reply({ content: ee + `Necesito el permiso \`Embed Links\` en el canal <#${canal.id}> para ejecutar este comando. :(`, ephemeral: true });
        if(!permsFor4) return interaction.reply({ content: ee + `Necesito el permiso \`Añadir Reacciones\` en el canal <#${canal.id}> para ejecutar este comando. :(`, ephemeral: true });

        await canal.send({ embeds: [embed
            .setTitle(`> **__Nueva sugerencia__**:`)
            .setAuthor({ name: `${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
            .setFooter({ text: `Sugerencia para: ${interaction.guild.name}` })
        ] }).then(async msg => {
            const sugInfo = new suggestInfo({
                suggestId: msg.id,
                suggestAuthor: interaction.user.id,
                suggestChannel: canalSuggest,
                suggestContent: `${suggestionContent}`,
                suggestReplied: false
            });
            await sugInfo.save();
            await msg.react('850499690243162173').catch(() => {});
            await msg.react('850499690364928060').catch(() => {});
            await msg.react('850499689232859168').catch(() => {});
        });
        setTimeout(() => {
            interaction.editReply({ content: ev + `Tu sugerencia fue enviada correctamente. <3` });
        }, 2000);
    }
//------------------------------------------------------------------------
    }
}