const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  alias: ["av", "logo"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {

    const user = message.mentions.users.first() || message.author;
    //--------------------------------------------
    const fetchedUser = await client.users.fetch(user.id)
    const embed = new Discord.MessageEmbed()
    .setColor("#ff47d4")
    .setTimestamp()
    .setImage(fetchedUser.displayAvatarURL({ dynamic: true, size: 1024 }))
    //--------------------------------------------
    const row = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageButton()
        .setStyle("LINK")
        .setLabel("PNG")
        .setEmoji("959226689907482694")
        .setURL(user?.displayAvatarURL({ size: 1024, format: "png" })),
        new Discord.MessageButton()
        .setStyle("LINK")
        .setLabel("JPG")
        .setEmoji("959226689907490887")
        .setURL(user?.displayAvatarURL({ size: 1024, format: "jpg" })),
        new Discord.MessageButton()
        .setStyle("LINK")
        .setLabel("WEBP")
        .setEmoji("959226689626439733")
        .setURL(user?.displayAvatarURL({ size: 1024, format: "webp" })),
        new Discord.MessageButton()
        .setStyle("LINK")
        .setLabel("GIF")
        .setEmoji("959226690154950727")
        .setURL(user?.displayAvatarURL({ dynamic: true, size: 1024, format: "gif" })),
    );

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!user) {
            return await reply(message, " ", [embed
                .setFooter({ text: `Nice avatar. <3` })
                .setAuthor({ name: `This is your avatar.`, iconURL: message.author.displayAvatarURL({ dynamic: true, size: 1024 }) })
            ], [row]);
        } else {
            return await reply(message, " ", [embed
                .setFooter({ text: `Request by: ${message.author.tag}` })
                .setAuthor({ name: `Avatar of ${fetchedUser?.tag}.`, iconURL: message.author.displayAvatarURL({ dynamic: true, size: 1024 }) })
            ], [row]);
        }
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!user) {
            return await reply(message, " ", [embed
                .setFooter({ text: `Que bonito avatar. <3` })
                .setAuthor({ name: `Acá tienes tu avatar.`, iconURL: message.author.displayAvatarURL({ dynamic: true, size: 1024 })})
            ], [row]);
        } else {
            return await reply(message, " ", [embed
                .setFooter({ text: `Pedido por: ${message.author.tag}` })
                .setAuthor({ name: `Avatar de ${fetchedUser?.tag}.`, iconURL: message.author.displayAvatarURL({ dynamic: true, size: 1024 }) })
            ], [row]);
        }
    }
//------------------------------------------------------------------------
    }
}