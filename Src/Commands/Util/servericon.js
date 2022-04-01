const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("servericon")
    .setDescription("I'll show you the current server icon."),

async execute(client, interaction, guildC) {

    const guildIcon = interaction.guild.icon;

    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setColor("#f5bf62")
    .setImage(interaction.guild.iconURL({ dynamic: true, size: 1024}))

    const english = async () => {
        if(!guildIcon) return interaction.reply({ content: ee + "This server has no icon. :(", ephemeral: true });
        interaction.reply({ embeds: [embed
            .setAuthor({ name: `Icon of: ${interaction.guild.name}`, iconURL: interaction.guild.iconURL()})
            .setDescription(`[Click here](${interaction.guild.iconURL()})`)
            .setFooter({ text: `Requested by: ${interaction.user.tag}` })
        ] });
    }
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") { return english(); } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!i) return interaction.reply({ content: ee + "Este servidor no tiene icono. :(", ephemeral: true });
        interaction.reply({ embeds: [embed
            .setAuthor({ name: `Icono de: ${interaction.guild.name}`, iconURL: interaction.guild.iconURL()})
            .setDescription(`[Click aquí](${interaction.guild.iconURL()})`)
            .setFooter({ text: `Pedido por: ${interaction.user.tag}` })
        ] });
}
//------------------------------------------------------------------------
    }
}