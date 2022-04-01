const Discord = require("discord.js")
const client = new Discord.Client({ intents: 32767 });
module.exports = new Discord.MessageEmbed()
.setTitle("<:arrowtm:897892368311779359> | Help Menu.")
.setColor("PURPLE")
.setTimestamp()
.setDescription(`Hi! Im **MukaBot**, a multifunctional bot that seeks to help your server with Antiraid, Configuration, Fun, Moderation and Useful commands. 

If you want to learn more about me use the / botinfo command and see my list of commands you can use the menu below this embed.
Thank you very much for joining your server and if you still do not do it below I will leave you some links about me.`)
.addField("Links:", `➮ | [Invitation](https://discord.com/api/oauth2/authorize?client_id=856987568780345385&permissions=8&scope=bot)
➮ | [Support server.](https://discord.gg/uZDNSxSPcV)
➮ | [BotList.](https://top.gg/bot/856987568780345385)`)
.setFooter("Do not forget to use the commands in the corresponding channels!")
