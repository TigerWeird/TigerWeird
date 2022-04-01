const Discord = require("discord.js")
const { inspect } = require ('util')
const { ee, ev, npn, nps } = require("../../Json/used.json");

module.exports = {
  name: "Eval",
  type: 3,
  async execute(client, interaction) {
/*
  if(!dev.includes(interaction.user.id)) return interaction.reply({ content: ee + "You are no allowed to use this.", ephemeral: true })
  const msg = await interaction.channel.messages.fetch(interaction.targetId)
  const x = msg.content

  try {
    const evaled = eval(x)
    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Evalué esto:")
    .addField(`**Type**:`, `\`\`\`prolog\n${typeof(evaled)}\`\`\``, true)
    .addField(`**Evaled in**:`, `\`\`\`yaml\n${client.ws.ping}ms\`\`\``, true)
    .addField(`**Input**:`, `\`\`\`js\n${x}\`\`\``)
    .addField(`**Output**:`, `\`\`\`js\n${inspect(evaled, {depth: 0})}\`\`\``)
    .setFooter("Parece funcionar!")
    interaction.reply({ embeds: [embed] })
  } catch (error) {
    const embedfallo = new Discord.MessageEmbed()
    .setColor("RED")
    .addField(`**Input**:`, `\`\`\`js\n${x}\`\`\``)
    .addField(`**Error**:`, `\`\`\`js\n${error}\`\`\``)
    .setFooter("Hiciste algo mal")
    interaction.reply({ embeds: [embedfallo] })
    }
*/
  }
}