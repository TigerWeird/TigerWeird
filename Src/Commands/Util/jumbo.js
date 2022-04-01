const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("jumbo")
    .setDescription("I will show you the emoji you want.")
    .addStringOption(option => option.setName("emoji").setDescription("The emoji you want me to show you.").setRequired(true) ),

async execute(client, interaction, guildC) {

    const emoji = interaction.options.getString("emoji");
    let findEmoji = client.emojis.cache.find(x => x.name === emoji.split(":")[1]);
    const embed = new Discord.MessageEmbed()
    .setImage(findEmoji.url)
    .setColor("PURPLE")

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!findEmoji) return interaction.reply({ content: ee + `Could not find this emoji. :(`, ephemeral: true });
        interaction.reply({ embeds: [embed
            .setAuthor({ name: `This is your emoji:`, iconURL: interaction.user.avatarURL() })
            .setFooter({ text: `What a cute emoji. <3` })
        ] });
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!findEmoji) return interaction.reply({ content: ee + `No pude encontrar ese emoji. :(`, ephemeral: true });
        interaction.reply({ embeds: [embed
            .setAuthor({ name: `Este es tu emoji:`, iconURL: interaction.user.avatarURL() })
            .setFooter({ text: `Que emoji tan bonito. <3` })
        ] });
    }
//------------------------------------------------------------------------
    }
}