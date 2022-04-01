const Discord = require("discord.js")

module.exports = {
  name: "Avatar",
  type: 2,
  async execute(client, interaction) {
/*
  let idioma = await Lang.findOne({ guildID: interaction.guild.id })
  const x = interaction.guild.members.resolve(interaction.targetId)
  const a = new Discord.MessageEmbed()
  .setImage(x.user.avatarURL({ dynamic: true, size: 1024 }))
  .setDescription(`[Click here](${x.user.avatarURL()})`, true)
  .setColor("#ff47d4")
  .setTimestamp()

  const english = async () => {
    interaction.reply({ embeds: [a.setFooter(`Request by: ${interaction.user.tag}`)
      .setAuthor(`Avatar of: ${x.tag}`, interaction.user.displayAvatarURL())] })
  }
//------------------------------------------------------------------------
  if(!idioma){ english() }
  if(idioma.lang == 'en'){ english() }
//------------------------------------------------------------------------
  if(idioma.lang == 'es'){
    interaction.reply({ embeds: [a.setFooter(`Pedido por: ${interaction.user.tag}`)
      .setAuthor(`Avatar de: ${x.tag}`, interaction.user.displayAvatarURL()) ] })
}
//------------------------------------------------------------------------
*/
  }
}