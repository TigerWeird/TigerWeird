const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { er } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("randomuser")
    .setDescription("I will choose a random user from the server."),

async execute(client, interaction, guildC) {

    const member = interaction.guild.members.cache.map(m => m);
    const randomUser = member[Math.floor(Math.random() * member.length)];
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: " | MukaBot - RandomUser", iconURL: client.user.avatarURL()})
    .setColor("RANDOM")
    .setTimestamp()

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        interaction.reply({ content: er + `*Picking a random user...*`, fetchReply: true });

        setTimeout(() => {
            interaction.editReply({ content: " ", embeds: [embed
                .setDescription(`I think I'll choose:\n\`${randomUser.user.tag}\``)
                .setFooter({ text: "Did I choose well?" })
            ] }).catch(() => {});
        }, 3000);
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        interaction.reply({ content: er + `*Eligiendo un usuario al azar...*`, fetchReply: true });

        setTimeout(() => {
            interaction.editReply({ content: " ", embeds: [embed
                .setDescription(`Creo que elejiré a:\n\`${randomUser.user.tag}\``)
                .setFooter({ text: "¿Elegí bien?" })
            ] }).catch(() => {});
        }, 3000);
    }
//------------------------------------------------------------------------
    }
}