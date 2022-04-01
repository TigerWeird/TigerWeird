const Discord = require("discord.js")
module.exports = new Discord.MessageEmbed()
.setTitle("<:arrowtm:897892368311779359> | Moderation Commands.")
.setDescription(`\`ban\`: Command to ban a user who is breaking the rules.
\`clear\`: With this you can delete several messages without having to do them manually.
\`kick\`: Command to kick a user from the server.
\`kickcall\`: You will be able to expel a user from a voice room so that they do not disturb others.
\`nuke\`: This command is used to delete all the messages of a channel *(This deletes pinned messages, etc.)*.
\`slowmode\`: With this command you can activate or deactivate slow mode in a channel.
\`unban\`: It serves to unban a banned person, with this you will give him another chance.`)
.setColor("PURPLE")
.setTimestamp()
.setFooter("Do not forget to use the commands in the corresponding channels!")