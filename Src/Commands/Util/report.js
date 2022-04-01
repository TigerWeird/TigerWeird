const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("report")
    .setDescription("Report a user.")
    .addUserOption(option => option.setName("target").setDescription("The user you want to report to.").setRequired(true) )
    .addStringOption(option => option.setName("reason").setDescription("The reason for the report.").setRequired(true) ),

async execute(client, interaction, guildC) {

    const reports = guildC?.config?.reports
    const persona = interaction.options.getUser("target")
    const reporte = interaction.options.getString("reason")
    const channel = interaction.guild.channels.resolve(reports)
    const canal = client.channels.cache.get(reports)
    const embed = new Discord.MessageEmbed()
    .setFooter({ text: `Reporter ID: ${interaction.user.id}` })
    .setThumbnail(persona.displayAvatarURL())
    .setColor("RED")
    .setTimestamp()

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!channel) return interaction.reply({ content: ee + "This server doesn't have a reports channel. :(", ephemeral: true })
        if(persona.id == interaction.user.id) return interaction.reply({ content: ee + `You can't report yourself.`, ephemeral: true })
        if(persona.bot) return interaction.reply({ content: ee + "You can't report a bot.", ephemeral: true })

        await canal.send({ embeds: [embed
            .setAuthor({ name: `New Report:`, iconURL: interaction.user.displayAvatarURL()})
            .setDescription(`> \`${interaction.user.tag}\` has sent a report:`)
            .addField(`➮ | Member:`, `- **__ID__**: \`${persona.id}\`.\n- **__Tag__**: \`${persona.tag}\``)
            .addField(`➮ | Details:`, `- **__Hour__**: <t:${Math.floor(new Date(interaction.createdTimestamp).getTime() / 1000)}:R>.\n- **__Reason__**: ${reporte}`)
            .setFooter({ text: `Reporter ID: ${interaction.user.id}` })
        ] }).catch(() => {})
        interaction.reply({ content: ev + `Your report was sent successfully. <3`, ephemeral: true })
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!channel) return interaction.reply({ content: ee + "Este servidor no tiene canal de reportes. :(", ephemeral: true })
        if(persona.id == interaction.user.id) return interaction.reply({ content: ee + `No puedes reportarte a ti mismo.`, ephemeral: true })
        if(persona.bot) return interaction.reply({ content: ee + "No puedes reportar a un bot.", ephemeral: true })

        await canal.send({ embeds: [embed
            .setAuthor({ name: `Nuevo Reporte:`, iconURL: interaction.user.displayAvatarURL()})
            .setDescription(`> \`${interaction.user.tag}\` realizó un reporte:`)
            .addField(`➮ | Miembro:`, `- **__ID__**: \`${persona.id}\`.\n- **__Tag__**: \`${persona.tag}\``)
            .addField(`➮ | Detalles:`, `- **__Hace__**: <t:${Math.floor(new Date(interaction.createdTimestamp).getTime() / 1000)}:R>.\n- **__Motivo__**: ${reporte}`)
        ] }).catch(() => {})
        interaction.reply({ content: ev + `Tu reporte fue enviado correctamente. <3`, ephemeral: true })
}
//------------------------------------------------------------------------

    }
}