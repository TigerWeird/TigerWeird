const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");
const devConfig = require("../../Models/devConfig.js");
const proceso = require("child_process");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("restart")
    .setDescription("I will run a command (Dev)."),

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

    interaction.deferReply({ fetchReply: true });
    // const maintenance = await Mntnce.findOne({ clientID: client.user.id });
    // maintenance.mMode = "on";
    // await maintenance.save()
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: ` | MukaBot - Console`, iconURL: client.user.displayAvatarURL()})
    .setColor("PURPLE")
    .setTimestamp()

    try {
        setTimeout(async () => {
            await interaction.editReply({ content: "<a:rueditatm:847318816832749599> | I'm shutting down..." });
            await proceso.exec("node cmdDelete.js", (error, stdout) => {
                let result = String(stdout || error);
                client.channels.cache.get("953861437820899348").send({ embeds: [embed
                    .setDescription(`${result.slice(0, 4096)}`)
                ] });
            });
        }, 1000);
        setTimeout(async () => {
            interaction.editReply({ content: ev + "Power off successfully.", fetchReply: true });
        }, 6500);
        setTimeout(async () => {
            await proceso.exec("node cmdLoad.js", (error, stdout) => {
                let result = String(stdout || error);
                client.channels.cache.get("953861437820899348").send({ embeds: [embed
                    .setDescription(`${result.slice(0, 4096)}`)
                ] });
            });
        }, 7000);
        setTimeout(async () => {
            // maintenance.mMode = "off";
            // await maintenance.save();
            await interaction.editReply({ content: `\`${client.user.tag}\` Reloaded successfully.` });
        }, 12000);
    } catch (err) {
        client.channels.cache.get("857363044055908362").send(`> **__Restart Error__**:\n\`\`\`js\n${err}\`\`\``);
    }
//------------------------------------------------------------------------
    }
}