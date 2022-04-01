const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");
const devConfig = require("../../Models/devConfig.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Command to restart some command (Dev).")
    .addStringOption(option => option.setName("type").setDescription("Command Type.").setRequired(true)
        .addChoice("prefix", "prefix")
        .addChoice("slash", "slash") )
    .addStringOption(option => option.setName("cate").setDescription("Command Category.").setRequired(true) )
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

    if(!dev.includes(interaction.user.id)) return interaction.reply({ content: ee + "You are no allowed to use this.", ephemeral: true })
    interaction.deferReply({ fetchReply: true })
    const type = interaction.options.getString("type").toLowerCase();
    const cate = interaction.options.getString("cate").toLowerCase();
    const commandName = interaction.options.getString("cmd").toLowerCase();

setTimeout(() => {
    if(["prefix"].includes(type)) {
        const command = client.cmds.get(commandName) || client.cmds.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return interaction.editReply(`No encontré ningún comando llamado \`${commandName}\`.`);
        delete require.cache[require.resolve(`../../../Messages/${cate}/${command.name}.js`)];

        try {
            const newCommand = require(`../../../Messages/${cate}/${command.name}.js`);
            client.cmds.set(newCommand.name, newCommand);
            interaction.editReply(`(!) | \`${commandName}\` Relodiao coretamete.`);
        } catch (error) {
            interaction.editReply({ content: `Algo malió sal\n\`\`\`js\n${error}\`\`\``});
        }
    } else if(["slash"].includes(type)) {
        const command = client.commands.get(commandName)
        if (!command) return interaction.editReply(`No encontré ningún comando llamado \`${commandName}\`.`);
        delete require.cache[require.resolve(`../${cate}/${command.name}.js`)];

        try {
            const newCommand = require(`../${cate}/${command.name}.js`);
            client.commands.set(newCommand.name, newCommand);
            interaction.editReply(`(/) | \`${commandName}\` Relodiao coretamete.`);
        } catch (error) {
            interaction.editReply({ content: `Algo malió sal\n\`\`\`js\n${error}\`\`\``});
        }
    }
}, 3000)

//------------------------------------------------------------------------
    }
}