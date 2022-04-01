const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Src/Json/used.json")

module.exports = {
  name: "setprefix",
  alias: ["prefix"],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {
/*
  let Prefix = await Prfx.findOne({ guildID: message.guild.id })
  const perms = message.member.permissions.has("ADMINISTRATOR")
  const ee = "<a:errortm:857815639099965440> | "
  const ev = "<a:valetm:857815639900028929> | "
  let x = args.join(" ")

//------------------------------------------------------------------------
if(!idioma || idioma.lang == 'en'){
  if(!perms) return canal.send(ee + "You don't have enough permissions to use this command.")
  if(!x) return canal.send(ee + `What will the new prefix be?`)
  if(!Prefix){
  let doc = new Prfx({
    guildID: message.guild.id,
    prefix: `${x}`
})
  doc.save()
  message.lineReplyNoMention(ev + `My new prefix is: \`${x}\`.`) 
} else {
  await Prfx.findOneAndUpdate({ guildID: message.guild.id }, { prefix: `${x}` })
  message.lineReplyNoMention(ev + `My new prefix is: \`${x}\`.`) 
}
}
//------------------------------------------------------------------------
if(idioma.lang == 'es'){
  if(!perms) return canal.send(ee + "No tienes suficientes permisos para usar este comando.")
  if(!x) return canal.send(ee + `¿Cual será el nuevo prefix?`)
  if(!Prefix){
  let doc = new Prfx({
    guildID: message.guild.id,
    prefix: `${x}`
})
  doc.save()
  message.lineReplyNoMention(ev + `Mi nuevo prefix es: \`${x}\`.`) 
} else {
  await Prfx.findOneAndUpdate({ guildID: message.guild.id }, { prefix: `${x}` })
  message.lineReplyNoMention(ev + `Mi nuevo prefix es: \`${x}\`.`) 
}

}*/
//------------------------------------------------------------------------

 }

}