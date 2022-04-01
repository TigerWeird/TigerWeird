const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ev, wrongEn, wrongEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("bugreport")
    .setDescription("Report a Muka bug.")
    .addStringOption(option => option.setName("bug").setDescription("The bug you want to report.").setRequired(true) ),

async execute(client, interaction, guildC) {

    const bug = interaction.options.getString("bug");

    const report = async () => {
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: `${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL()})
        .setTitle(`Reporte de bug en \`${interaction.guild.name}\``)
        .addField(`➮ | Info:`, `- **__GuildID__**: \`${interaction.guild.id}\`
- **__UserID__**: \`${interaction.user.id}\``, false)
        .addField(`➮ | Bug:`, `\`\`\`fix\n${bug}\`\`\``, false)
        .setColor("RED")
        .setTimestamp()
        client.channels.cache.get("857385424484696104").send({ embeds: [embed] }).catch(() => {});
    }

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(mensaje.length >= 1024) return interaction.reply({ content: wrongEn + "You cannot send more than 1024 characters. :(", ephemeral: true });
        interaction.reply({ content: ev + `Thank you for reporting! Our devs will check it out and fix it asap. <3`, ephemeral: true });
        return report();
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(mensaje.length >= 1024) return interaction.reply({ content: wrongEs + "No puedes enviar más de 1024 caracteres. :(", ephemeral: true })
        interaction.reply({ content: ev + `Gracias por reportar! Nuestros devs lo revisarán y arreglarán lo más pronto posible. <3`, ephemeral: true });
        return report();
    }
//------------------------------------------------------------------------
    }
}