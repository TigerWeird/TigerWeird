const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("invite")
    .setDescription("This is my invitation."),

async execute(client, interaction, guildC) {

    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: " | MukaBot - Invite", iconURL: client.user.displayAvatarURL() })
    .setColor("BLUE")
    .setTimestamp()

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        const links = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
            .setLabel('Invite')
            .setEmoji("958571703024353300")
            .setStyle('LINK')
            .setURL("https://discord.com/api/oauth2/authorize?client_id=856987568780345385&permissions=8&scope=bot%20applications.commands"),
        )
        .addComponents(new Discord.MessageButton()
            .setLabel('Support')
            .setEmoji("958571556357951488")
            .setStyle('LINK')
            .setURL("https://discord.gg/uZDNSxSPcV")
        )
        .addComponents(new Discord.MessageButton()
            .setLabel('Top.gg')
            .setEmoji("958568926080544769")
            .setStyle('LINK')
            .setURL("https://top.gg/bot/856987568780345385")
        );
        interaction.reply({ embeds: [embed
            .setDescription(`Thanks for inviting me to your server!
I'm in \`${client.guilds.cache.size}\` but being on yours will help me a lot! <3 
Here Below I leave you all the links that you will need:
    
➮ | [\`Invite\`](https://discord.com/api/oauth2/authorize?client_id=856987568780345385&permissions=8&scope=bot%20applications.commands)
➮ | [\`Support\`](https://discord.gg/uZDNSxSPcV)
➮ | [\`Top.gg\`](https://top.gg/bot/856987568780345385)`)
            .setFooter({ text: "Voting for me In Top.gg you would help me a lot! <3" })
        ], components: [links] });
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        const links = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
            .setLabel('Invitación')
            .setEmoji("958571703024353300")
            .setStyle('LINK')
            .setURL("https://discord.com/api/oauth2/authorize?client_id=856987568780345385&permissions=8&scope=bot%20applications.commands"),
        )
        .addComponents(new Discord.MessageButton()
            .setLabel('Soporte')
            .setEmoji("958571556357951488")
            .setStyle('LINK')
            .setURL("https://discord.gg/uZDNSxSPcV")
        )
        .addComponents(new Discord.MessageButton()
            .setLabel('Top.gg')
            .setEmoji("958568926080544769")
            .setStyle('LINK')
            .setURL("https://top.gg/bot/856987568780345385"),
        );
        interaction.reply({ embeds : [embed
            .setDescription(`¡Muchas gracias por invitarme a tu servidor!
Actualmente estoy en \`${client.guilds.cache.size}\` servidores pero estar en el tuyo me ayudaría mucho. <3
Acá tienes todos los links que te podrían resultar útiles para usarme:
    
➮ | [\`Invitación\`](https://discord.com/api/oauth2/authorize?client_id=856987568780345385&permissions=8&scope=bot%20applications.commands)
➮ | [\`Soporte\`](https://discord.gg/uZDNSxSPcV)
➮ | [\`Top.gg\`](https://top.gg/bot/856987568780345385)`)
            .setFooter({ text:"¡Votando por mi en Top.gg me ayudarías mucho! <3" })
        ], components: [links] });
    }
//------------------------------------------------------------------------
    }
}