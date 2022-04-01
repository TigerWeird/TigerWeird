const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");
const devConfig = require("../../Models/devConfig.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("setstatus")
  .setDescription("Command to change the state of Muka. (Dev)")
  .addStringOption(option => option.setName("type").setDescription("Status type.").setRequired(true) )
  .addStringOption(option => option.setName("status").setDescription("New status.").setRequired(true) ),

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

  const y = interaction.options.getString("type")
  const x = interaction.options.getString("status")
  try {
    client.user.setActivity(`${x}`, {
      type: `${y}`,
    })
  interaction.reply({ content: ev + `Estado de Muka establecido en: ${x}`, ephemeral: true })
  } catch (e) {
    interaction.reply({ content: ee + `Error:\n\`\`\`js
${e}\`\`\``, ephemeral: true })
  }
  }
}