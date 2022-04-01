const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Src/Json/used.json");

module.exports = {
  name: "poll",
  alias: ["encuesta"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {
/*
  const model = await Prfx.findOne({ guildID: message.guild.id })
  const prfxa = model ? model.prefix : "z!"
  const perms = message.member.permissions.has("MANAGE_CHANNELS")
  const p1 = message.guild.me.permissions.has("MANAGE_MESSAGES")
  const p2 = message.guild.me.permissions.has("ATTACH_LINKS")
  const p3 = message.guild.me.permissions.has("ADD_REACTIONS")
  const emojierror = "<a:errortm:857815639099965440> | "
  const nopermses = "<a:errortm:857815639099965440> | No tienes suficientes permisos para usar este comando."
  const nopermsen = "<a:errortm:857815639099965440> | You don't have enough permissions to use this command."
  const pbn1 = `<a:errortm:857815639099965440> | I need permission **\`Manage Messages\`** to use this command.`
  const pbn2 = `<a:errortm:857815639099965440> | I need permission **\`Attach Links\`** to use this command.`
  const pbn3 = `<a:errortm:857815639099965440> | I need permission **\`Add Reactions\`** to use this command.`
  const pbs1 = `<a:errortm:857815639099965440> | Necesito el permiso **\`Gestionar Mensajes\`** para usar este comando.`
  const pbs2 = `<a:errortm:857815639099965440> | Necesito el permiso **\`Enviar Links\`** para usar este comando.`
  const pbs3 = `<a:errortm:857815639099965440> | Necesito el permiso **\`Agregar Reacciones\`** para usar este comando.`
  const malusoes = `${emojierror}El uso correcto de este comando es:\n**${prfxa}poll <pregunta> | <opción1> | <emoji_opción1> | <opción2> | <emoji_opción2>.**

**Recuerda:** Debes dar como mínimo 2 opciones y 2 reacciones.`
  const malusoen = `${emojierror}The correct use of this command is:\n**${prfxa}poll <question> | <option1> | <emoji_option1> | <option2> | <emoji_option2>.**

**Remember:** You must give at least 2 options and 2 reactions.`
  const x = args.join(' ');
  const z = x.split(' | ')
  const encuesta = z[0]
  const option1 = z[1]
  const opt1 =  z[2]
  const quiz2 = z[3]
  const opt2 = z[4]
  const quiz3 = z[5]
  const opt3 = z[6]
  const quiz4 = z[7]
  const opt4 = z[8]
//========================
  const embed = new Discord.MessageEmbed()
  .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
  .setTitle("📊 | Poll.")
  .addField(`**Option 1 - **${opt1}`, `${option1}`)
  .addField(`**Option 2 - **${opt2}`, `${quiz2}`)
  .setTimestamp()
  .setFooter("React with the option you like the most!")
  .setColor("BLUE")
//------------------------------------------------------------------------
if(guildC?.config?.lang == "en") {
  if(!p1) return message.reply({ content: `${pbn1}`, allowedMentions: { repliedUser: false } })
  if(!p2) return message.reply({ content: `${pbn2}`, allowedMentions: { repliedUser: false } })
  if(!p3) return message.reply({ content: `${pbn3}`, allowedMentions: { repliedUser: false } })
  if(!perms) return message.reply({ content: `${nopermsen}`, allowedMentions: { repliedUser: false } })
  if(!encuesta) return message.reply({ content: `${malusoen}`, allowedMentions: { repliedUser: false } })
  if(!option1) return message.reply({ content: `${malusoen}`, allowedMentions: { repliedUser: false } })
  if(!opt1) return message.reply({ content: `${malusoen}`, allowedMentions: { repliedUser: false } })
  if(!quiz2) return message.reply({ content: `${malusoen}`, allowedMentions: { repliedUser: false } })
  if(!opt2) return message.reply({ content: `${malusoen}`, allowedMentions: { repliedUser: false } })
  message.delete()

if(!opt3){
  message.channel.send({ content: `${encuesta}`, embeds: [embed] }).then(msg => {
    msg.react(opt1).catch(() => {})
    msg.react(opt2).catch(() => {})
  })
} else if(!opt4){
  message.channel.send({ content: `${encuesta}`, embeds: [embed].addField(`**Option 3 - **${opt3}`, `${quiz3}`) }).then(msg => {
    msg.react(opt1).catch(() => {})
    msg.react(opt2).catch(() => {})
    msg.react(opt3).catch(() => {})
  })
} else if(opt4){
  message.channel.send({ content: `${encuesta}`, embeds: [embed].addField(`**Option 3 - **${opt3}`, `${quiz3}`).addField(`**Option 4 - **${opt4}`, `${quiz4}`) }).then(msg => {
    msg.react(opt1).catch(() => {})
    msg.react(opt2).catch(() => {})
    msg.react(opt3).catch(() => {})
    msg.react(opt4).catch(() => {})
  })
}

}
//------------------------------------------------------------------------
if(guildC?.config?.lang == "es") {
  if(!p1) return message.reply({ content: `${pbs1}`, allowedMentions: { repliedUser: false } })
  if(!p2) return message.reply({ content: `${pbs2}`, allowedMentions: { repliedUser: false } })
  if(!p3) return message.reply({ content: `${pbs3}`, allowedMentions: { repliedUser: false } })
  if(!perms) return message.reply({ content: `${nopermses}`, allowedMentions: { repliedUser: false } })
  if(!encuesta) return message.reply({ content: `${malusoes}`, allowedMentions: { repliedUser: false } })
  if(!option1) return message.reply({ content: `${malusoes}`, allowedMentions: { repliedUser: false } })
  if(!opt1) return message.reply({ content: `${malusoes}`, allowedMentions: { repliedUser: false } })
  if(!quiz2) return message.reply({ content: `${malusoes}`, allowedMentions: { repliedUser: false } })
  if(!opt2) return message.reply({ content: `${malusoes}`, allowedMentions: { repliedUser: false } })
  message.delete()

if(!opt3){
  message.channel.send({ content: `${encuesta}`, embeds: [embed] }).then(msg => {
    msg.react(opt1).catch(() => {})
    msg.react(opt2).catch(() => {})
  })
} else if(!opt4){
  message.channel.send({ content: `${encuesta}`, embeds: [embed].addField(`**Option 3 - **${opt3}`, `${quiz3}`) }).then(msg => {
    msg.react(opt1).catch(() => {})
    msg.react(opt2).catch(() => {})
    msg.react(opt3).catch(() => {})
  })
} else if(opt4){
  message.channel.send({ content: `${encuesta}`, embeds: [embed].addField(`**Option 3 - **${opt3}`, `${quiz3}`).addField(`**Option 4 - **${opt4}`, `${quiz4}`) }).then(msg => {
    msg.react(opt1).catch(() => {})
    msg.react(opt2).catch(() => {})
    msg.react(opt3).catch(() => {})
    msg.react(opt4).catch(() => {})
  })
}

}*/
//------------------------------------------------------------------------
  }
}