const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const mongoose = require("mongoose");
const { ee, ev, npn, nps } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Mira el ping de muka."),
    async execute(client, interaction, guildC) {

    const date = Date.now();
    const pmongo = await new Promise((r, j) => {
        mongoose.connection.db
        .admin()
        .ping((err, result) =>
            err || !result ? j(err || result) : r(Date.now() - date)
        );
    });
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: ` | MukaBot - Ping.`, iconURL: client.user.displayAvatarURL() })
    .setColor("PURPLE")
    .setTimestamp()
    .setThumbnail(client.user.displayAvatarURL())

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        interaction.reply({ embeds: [embed
            .setDescription(`This is Muka's ping:\n- **__API__**: \`${client.ws.ping}ms\`.
- **__Bot__**: \`${Math.round((Date.now() - interaction.createdTimestamp) / 1000)}ms\`.
- **__MongoDB__**: \`${pmongo}ms\`.`)
            .setFooter({ text: `Im lagged? Use /bugreport!` })
        ] });
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        interaction.reply({ embeds: [embed
            .setDescription(`Este es el ping de Muka:\n- **__API__**: \`${client.ws.ping}ms\`.
- **__Bot__**: \`${Math.round((Date.now() - interaction.createdTimestamp) / 1000)}ms\`.
- **__MongoDB__**: \`${pmongo}ms\`.`)
            .setFooter({ text: `¿Estoy lageado? Usa /bugreport!` })
        ] });
    }
//------------------------------------------------------------------------
    }
}