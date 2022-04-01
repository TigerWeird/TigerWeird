const Discord = require('discord.js');
const { ee, ev, er } = require('../../Json/used.json');
const guildConfig = require("../../Models/guildConfig.js");
const devConfig = require("../../Models/devConfig.js");
const interact = require('../../JavaScript/icreate/interaction.js');
const context = require('../../JavaScript/icreate/context.js');
const button = require('../../JavaScript/icreate/button.js');

module.exports = async (client, interaction) => {
//----------------------------------- Constantes
  const guildC = await guildConfig.findOne({ guildID: interaction.guild.id });
  const devC = await devConfig.findOne({ clientID: client.user.id });
  const err = new Discord.MessageEmbed()
  .setTitle(`Error en \`${interaction.guild.name}\``, interaction.guild.iconURL())
  .setAuthor({ name: `${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
  .setColor("RED")
  .setTimestamp()
  if(!devC) {
    const devConfiguration = new devConfig({ clientID: client.user.id });
    await devConfiguration.save();
  }
  if(!guildC) {
    const guild = new guildConfig({ guildID: interaction.guild.id });
    interaction.reply({ content: er + "Wait a minute, I'm configuring me...", ephemeral: true, fetchReply: true });
    await guild.save();
    setTimeout(() => {
      interaction.editReply({ content: ev + "Done! I've got successfully configured in this server. <3" });
    }, 3000);
  } else {
//----------------------------------- (/)
  interact.interaccion(Discord, client, interaction, guildC, devC, err, ev, ee);
//----------------------------------- (C)
  context.ctxmenu(Discord, client, interaction, guildC, devC, err, ev, ee);
//----------------------------------- (B)
  button.ibutton(Discord, client, interaction, guildC, devC, err, ev, ee);
//-----------------------------------
  }
}