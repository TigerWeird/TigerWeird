const Discord = require("discord.js")
const mongoose = require("mongoose")
const { ee, ev, npn, nps } = require("../../Src/Json/used.json")

module.exports = {
    name: "ping",
    alias: ["latency"],
    botPerms: [],
    userPerms: [],

  async execute (client, message, args, guildC, reply, editReply, send) {

    let date = Date.now()
    let pmongo = await new Promise((r, j) => {
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
    const english = async () => {
        message.reply({ embeds: [embed
            .setDescription(`This is Muka's ping:\n- **__API__**: \`${client.ws.ping}ms\`.
- **__Bot__**: \`${Math.round((Date.now() - message.createdTimestamp) / 1000)}ms\`.
- **__MongoDB__**: \`${pmongo}ms\`.`)
            .setFooter({ text: `Im lagged? Use /bugreport!` })
        ], allowedMentions: { parse: [] } })
    }
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") { return english(); } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        message.reply({ embeds: [embed
            .setDescription(`Este es el ping de Muka:\n- **__API__**: \`${client.ws.ping}ms\`.
- **__Bot__**: \`${Math.round((Date.now() - message.createdTimestamp) / 1000)}ms\`.
- **__MongoDB__**: \`${pmongo}ms\`.`)
            .setFooter({ text: `¿Estoy lageado? Usa /bugreport!` })
        ], allowedMentions: { parse: [] } })
    }
//------------------------------------------------------------------------
    }
}