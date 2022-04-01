const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("deleteraid")
    .setDescription("Buscaré todos los canales y/o roles repetidos y los eliminaré"),

async execute(client, interaction, guildC) {
/*
    const p = interaction.member.permissions.has("ADMINISTRATOR")
    const bp = interaction.guild.me.permissions.has("MANAGE_CHANNELS")
    const npbs = ee + `Necesito el permiso \`Administrador\` para usar este comando.`
    const ifilter = i => i.user.id == interaction.user.id
    const x = interaction.guild.channels.cache.map(({ name }) => name).filter((s => v => s.has(v) || !s.add(v))(new Set))
    const channels = interaction.guild.channels.cache
    const row = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageButton()
			.setCustomId('accept')
			.setLabel('Accept')
			.setStyle('SUCCESS'),
        new Discord.MessageButton()
            .setCustomId('deny')
            .setLabel('Deny')
            .setStyle('DANGER'),
		);

    if(!p) return interaction.reply({ content: nps })
    if(!bp) return interaction.reply({ content: npbs })
//----------------------------------------------------------------------

    interaction.reply({ content: `<a:rueditatm:847318816832749599> | Buscando canales y/o roles repetidos...`, fetchReply: true })
    if(x.length < 5) return interaction.editReply({ content: ev + `No logré encontrar roles ni canales repetidos. \`(Más de 5)\`` })
    if(x.length > 5) {

        const m = await interaction.editReply({ content: ev + `Logré encontrar \`${x.length + 1}\` canales con el mismo nombre.
¿Deseas eliminarlos?`, components: [row] })

        const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 })
//----------------------------------------------------------------------

        collector.on("collect", async i => {
            if(i.customId == "deny") return i.editReply({ content: ee + "Comando cancelado con éxito.", components: [] })
            if(i.customId == "accept") {
                if(!bp) return interaction.reply({ content: npbs })
                for (const channel of x) {
                    const bCanales = channels.filter(c => c.name == channel)
                    bCanales.forEach(a => {
                        a.delete().catch(() => {})
                    })
                }
            }
        })
        collector.on('end', x => {
            interaction.editReply({ components: [] });
        })
    }*/
//----------------------------------------------------------------------
    }
}