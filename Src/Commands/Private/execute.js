const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");
const devConfig = require("../../Models/devConfig.js");
const process = require("child_process");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("execute")
    .setDescription("I will run a command (Dev).")
    .addStringOption(option => option.setName("cmd").setDescription("Command to restart.").setRequired(true) ),

async execute(client, interaction, guildC) {

    const devC = devConfig.findOne({ clientID: client.user.id });

    if(guildC?.config?.lang == "en") {
        if(devC?.config?.devList.includes(message.author.id)) return interaction.reply({ content: 
            wrongEn + `\`You are not allowed for use this command\`.`, ephemeral: true });
    } else 
    if(guildC?.config?.lang == "es") {
        if(devC?.config?.devList.includes(message.author.id)) return interaction.reply({ content: 
            wrongEs + `\`No estás autorizado a usar este comando\`.`, ephemeral: true });
    }

    interaction.deferReply({ fetchReply: true })
    const x = interaction.options.getString("cmd")

setTimeout(() => {
    interaction.editReply({ content: "<a:rueditatm:847318816832749599> | Espera un minuto, ejecutando comando..." })
    process.exec(x, (error, stdout) => {
        let result = String(stdout || error)

        const e = new Discord.MessageEmbed()
        .setAuthor({ name: `Executado correctamente.`, iconURL: client.user.avatarURL()})
        .setColor("PURPLE")
        .setTimestamp()
        .setDescription(`${result}`)

        interaction.editReply({ content: ' ', embeds: [e] })
    })
}, 3000)
//------------------------------------------------------------------------
    }
}