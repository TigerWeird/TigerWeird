const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const suggestInfo = require("../../Models/suggestInfo.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("reply")
    .setDescription("Approve or deny a suggestion.")
    .addStringOption(option => option.setName("id").setDescription("Suggestion ID.").setRequired(true))
    .addStringOption(option => option.setName("action").setDescription("The decision on the suggestion.").setRequired(true)
        .addChoice('accept', 'accept')
        .addChoice('deny', 'deny') )
    .addStringOption(option => option.setName("reason").setDescription("The reason you reject/approve the suggestion.")),

async execute(client, interaction, guildC) {

    interaction.deferReply({ ephemeral: true });
    const suggestId = interaction.options.getString("id");
    const action = interaction.options.getString("action");
    const sugReason = interaction.options.getString("reason");
    //-------------------------------------------------------------
    const canalSuggest = guildC?.config?.suggestions;
    const sugInfo = await suggestInfo.findOne({ suggestId: suggestId });
    const canal = client.channels.cache.get(sugInfo?.info?.suggestChannel);
    const resolveChannel = message.guild.channels?.resolve(canal.id)
    const fetchedSuggest = await canal.messages?.fetch(suggestId)
    //-------------------------------------------------------------
    const sugAuthor = await client.users?.fetch(sugInfo?.info?.suggestAuthor);
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: `${sugAuthor?.tag}`, iconURL: sugAuthor.avatarURL() })
    .setTimestamp()

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!canalSuggest || resolveChannel) return interaction.reply({ content: 
            ee + "This server doesn't count with a suggestions channel. :(", ephemeral: true });
        if(!sugInfo || fetchedSuggest || fetchedSuggest.author.id != client.user.id) return interaction.reply({ content: 
            ee + "Couldn't find the suggestion, make sure it's the right ID.", ephemeral: true });
        if(sugInfo?.info?.suggestReplied == true) return interaction.reply({ content: 
            ee + `This suggestion has been answered already.`, ephemeral: true });
        //-------------------------------------------------------------

        if(action == 'accept') {
            fetchedSuggest.edit({ embeds: [rd
                .setDescription(`> **__Suggestion Approved__**:\n- ${sugInfo?.info?.suggestContent}`)
                .addField(`> **__Reason__**:`, `- ${sugReason ?? "No especificado"}.`)
                .setFooter({ text: `Approved by: : ${interaction.user.tag}` })
                .setColor("GREEN")
            ] })
        } else 
            //-------------------------------------------------------------
        if(action == 'deny') {
            fetchedSuggest.edit({ embeds: [rd
                .setDescription(`> **__Suggestion Rejected__**:\n- ${sugInfo?.info?.suggestContent}`)
                .addField(`> **__Reason__**:`, `- ${sugReason ?? "No especificado."}`)
                .setFooter({ text: `Rechazada por: ${interaction.user.tag}` })
                .setColor("RED")
            ] });
        }
        sugInfo.info.suggestReplied = true;
        await sugInfo.save();
        interaction.reply({ content: ev + `Suggestion by: \`${x.tag}\` has been rejected successfully.`, ephemeral: true });
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!canalSuggest || resolveChannel) return interaction.reply({ content: 
            ee + "Este servidor no tiene ningún canal de sugerencias establecido. :(", ephemeral: true });
        if(!sugInfo || fetchedSuggest || fetchedSuggest.author.id != client.user.id) return interaction.reply({ content: 
            ee + "No pude encontrar la sugerencia, asegurate de que la id sea correcta.", ephemeral: true });
        if(sugInfo?.info?.suggestReplied == true) return interaction.reply({ content: 
            ee + `Esta sugerencia ya fue respondida.`, ephemeral: true });
        //-------------------------------------------------------------

        if(action == 'accept') {
            fetchedSuggest.edit({ embeds: [embed
                .setDescription(`> **__Sugerencia Aprobada__**:\n- ${sugInfo?.info?.suggestContent}`)
                .addField(`> **__Motivo__**:`, `- ${sugReason ?? "No especificado"}.`)
                .setFooter({ text: `Aprobada por: ${interaction.user.tag}` })
                .setColor("GREEN")
            ] });
        } else 
        //-------------------------------------------------------------
        if(action == 'deny') {
            fetchedSuggest.edit({ embeds: [embed
                .setDescription(`> **__Sugerencia Rechazada__**:\n- ${sugInfo?.info?.suggestContent}`)
                .addField(`> **__Motivo__**:`, `- ${sugReason ?? "No especificado."}`)
                .setFooter({ text: `Rechazada por: ${interaction.user.tag}` })
                .setColor("RED")
            ] });
        }
        sugInfo.info.suggestReplied = true;
        await sugInfo.save();
        interaction.reply({ content: ev + `La sugerencia de \`${sugAuthor.tag}\` fue respondida con éxito.`, ephemeral: true });
    }
//------------------------------------------------------------------------
    }
}