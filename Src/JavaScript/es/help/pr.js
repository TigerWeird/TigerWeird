const Discord = require("discord.js")
const client = new Discord.Client({ intents: 32767 });
module.exports = new Discord.MessageEmbed()
.setTitle("<:arrowtm:897892368311779359> | Help Menu.")
.setColor("PURPLE")
.setTimestamp()
.setDescription(`¡Hola! Soy **MukaBot**, un bot multifuncional que busca ayudar a tu servidor con comandos de Antiraid, Configuración, Diversión, Moderació y Útiles. 

Si quieres aprender más sobre mi usa el comando /botinfo y ver mi lista de comandos puedes usar el menu debajo de este embed.
Muchas gracias por unirme a tu servidor y si todavía no lo haces debajo te dejo unos links sobre mi.`)
.addField("Links:", `➮ | [Invitation](https://discord.com/api/oauth2/authorize?client_id=856987568780345385&permissions=8&scope=bot)
➮ | [Server de soporte.](https://discord.gg/uZDNSxSPcV)
➮ | [BotList.](https://top.gg/bot/856987568780345385)`)
.setFooter("No olvides usar los comandos en los canales correspondientes!")