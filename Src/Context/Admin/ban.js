const Discord = require("discord.js")
const { ee, ev, npn, nps } = require("../../Json/used.json")

module.exports = {
  name: "Ban",
  type: 2,
  async execute(client, interaction) {
/*
  const x = interaction.guild.members.resolve(interaction.targetId)
  const sanch = await Sach.findOne({ guildID: interaction.guild.id })
  const perms = interaction.member.permissions.has("BAN_MEMBERS")
  const botperms = interaction.guild.me.permissions.has("BAN_MEMBERS")
  const nopermsbtes = ee + `Necesito el permiso \`Ban Members\` para usar este comando.`
  const nopermsbten = ee + `I need permission \`Ban Members\` to use this command.`
  const per = interaction.guild.members.fetch(x.id)

  const english = async () => {
    if(!botperms) return interaction.reply({ content: nopermsbten, ephemeral: true })
    if(!perms) return interaction.reply({ content: npn, ephemeral: true })
    if(persona.id == interaction.user.id || 
      persona.id == client.user.id) return interaction.reply({ content: ee + `You cannot ban this user.`, ephemeral: true })
    interaction.guild.members.ban(per, { reason: `Context Menu Ban - ${interaction.user.tag}` }).catch(e => { console.log(`${e}`) })

    interaction.reply({ content: ev + `<@${persona.id}> Has been banned.`, ephemeral: true })

    if(!sanch){ return } else {
      if(!interaction.guild.channels.resolve(`${sanch.channelid}`)) return
      client.channels.cache.get(`${sanch.channelid}`).send({ embeds: [bn] })
    }
  }
//------------------------------------------------------------------------
  if(!idioma){ english() }
  if(idioma.lang == 'en'){ english() }
//------------------------------------------------------------------------
  if(idioma.lang == 'es'){
      
}
//------------------------------------------------------------------------
*/
  }
}