const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { inspect } = require ('util');
const { ee, ev, npn, nps } = require("../../Json/used.json");
const devConfig = require("../../Models/devConfig.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("eval")
  .setDescription("Command to evaluate codes (Dev).")
  .addStringOption(option => option.setName("code").setDescription("Code to evaluate.").setRequired(true) ),

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
  const x = interaction.options.getString("code")
  const filter = i => i.customId == 'borrar' && i.user.id == interaction.user.id;

  if(["token", "destroy"].includes(x)) return interaction.reply({ content: ee + "No puedo evaluar eso.", ephemeral: true })
  const borrar = new Discord.MessageActionRow()
  .addComponents(
    new Discord.MessageButton()
      .setCustomId('borrar')
      .setStyle('SECONDARY')
      .setEmoji('946447100504317983'),
  );
  let msg;
//--------------------------------------------------------------------------
  try {
    const evaled = eval(x)
    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Evalué esto:")
    .addField(`➮ | Type:`, `\`\`\`prolog\n${typeof(evaled)}\`\`\``, true)
    .addField(`➮ | Evaled in:`, `\`\`\`yaml\n${client.ws.ping}ms\`\`\``, true)
    .addField(`➮ | Input:`, `\`\`\`js\n${x}\`\`\``)
    .addField(`➮ | Outpu*:`, `\`\`\`js\n${inspect(evaled, {depth: 0})}\`\`\``)
    .setFooter({ text: "Parece que funciona." })
    msg = await interaction.reply({ embeds: [embed], components: [borrar], fetchReply: true })
  } catch (error) {
    const embedfallo = new Discord.MessageEmbed()
    .setColor("RED")
    .addField(`➮ | Input:`, `\`\`\`js\n${x}\`\`\``)
    .addField(`➮ | Error:`, `\`\`\`js\n${error}\`\`\``)
    .setFooter({ text: "Algo salió mal." })
    msg = await interaction.reply({ embeds: [embedfallo], components: [borrar], fetchReply: true })
  }

  const collector = msg.createMessageComponentCollector({ filter: filter, time: 70000 });
  collector.on('collect', async i => {
    if (i.customId == 'borrar') {
      const message = await interaction.channel.messages.fetch(msg.id)
      message.delete()
    }
  });
//--------------------------------------------------------------------------
  }
}